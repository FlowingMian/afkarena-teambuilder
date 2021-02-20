
import { FormControl, Switch, Flex, VStack, HStack, Button, useDisclosure, Drawer, DrawerOverlay, DrawerCloseButton, DrawerHeader, DrawerContent, DrawerBody, DrawerFooter } from '@chakra-ui/react'
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
  const [selection, setSelection] = useState<Array<string>>(compositions.map(c => c.id));
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

  function selectNone() {
    setSelection([]);
  }

  const compositionBoxes = displayedCompositions.map((c) => 
    <FormControl key={c.id} maxWidth='24%' minWidth="335px" display="flex" alignItems="center" m="0.25rem"> 
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
      placement="top"
      size="lg"
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
              <Button size="sm" variant='ghost' onClick={selectAll}>Select all</Button>
              <Button size="sm" variant='ghost' onClick={selectNone}>Select none</Button>
              <Button size="md" variant='solid' onClick={validateSelection}>Select {selection.length}</Button>
            </HStack>
          </DrawerFooter>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  </>
  )
}

export default CompositionSelector;
