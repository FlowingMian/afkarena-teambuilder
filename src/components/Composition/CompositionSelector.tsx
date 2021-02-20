
import { FormControl, Switch, Flex, VStack, HStack, Button, useDisclosure, Drawer, DrawerOverlay, DrawerCloseButton, DrawerHeader, DrawerContent, DrawerBody, DrawerFooter, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import compositions from '../../data/compositions';
import { Composition } from '../../model/compositions';
import CompositionBox from "./CompositionBox";
import CompositionSearch from './CompositionSearch';

type CompositionSelectorProps = {
  onValidate:(compositionIds:Array<string>) => void;
  openOnInit?:boolean;
};

function CompositionSelector({ onValidate, openOnInit = false }: CompositionSelectorProps) {
  const [displayedCompositions, setDisplayedCompositions] = useState<Array<Composition>>([]);
  const [selection, setSelection] = useState<Array<string>>([]);
  const { isOpen, onOpen, onClose } = useDisclosure()

  useEffect(() => {
    if (openOnInit) {
      onOpen()
    }
  }, []);

  function filterCompositions(compositionIds:Array<string>) {
    setDisplayedCompositions(compositions.filter(c => compositionIds.includes(c.id)));
  }

  function onChange(e:React.ChangeEvent<HTMLInputElement>) {
    let values:Array<string>;
    if (e.target.checked) {
      values = [...selection, e.target.value];
    }
    else {
      values = selection.filter(id => id !== e.target.value)
    }
    setSelection(values);
  }

  function validateSelection() {
    onClose();
    onValidate(selection);
  }

  function selectAll() {
    setSelection(compositions.map(c => c.id));
  }

  function selectResults() {
    setSelection(displayedCompositions.map(c => c.id));
  }

  function selectNone() {
    setSelection([]);
  }

  const compositionBoxes = displayedCompositions.map((c) => 
    <FormControl key={c.id} display="flex" alignItems="center" m={1}> 
      <Switch value={c.id} isChecked={selection.includes(c.id)} mr="5px" onChange={onChange}/>
      <CompositionBox key={c.id} composition={c} />
    </FormControl>
  );

  return (
    <>
    <Button onClick={onOpen}>
      Select compositions ({selection.length})
    </Button>
    <Drawer
      isOpen={isOpen}
      placement="left"
      size="md"
      onClose={onClose}
    >
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Select compositions</DrawerHeader>

          <DrawerBody p={1}>
            <VStack alignItems='stretch'>
              <CompositionSearch onChange={filterCompositions}/>
              <Flex flexDirection="row" wrap="wrap">
                  {compositionBoxes}
              </Flex>;
            </VStack>
          </DrawerBody>

          <DrawerFooter>
            <HStack mt='1rem' wrap='wrap'>
              <Text size='xs'>Select</Text>
              <Button size="sm" px={1} variant='outline' onClick={selectResults}>Results</Button>
              <Button size="sm" px={1} variant='outline' onClick={selectAll}>All</Button>
              <Button size="sm" px={1} variant='outline' onClick={selectNone}>None</Button>
              <Button size="sm" px={1} variant='solid' onClick={validateSelection}>Validate ({selection.length})</Button>
            </HStack>
          </DrawerFooter>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  </>
  )
}

export default CompositionSelector;
