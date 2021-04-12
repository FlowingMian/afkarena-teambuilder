import React from 'react';
import { FormControl, Switch, Flex, VStack, HStack, Button, useDisclosure, Drawer, DrawerOverlay, DrawerCloseButton, DrawerHeader, DrawerContent, DrawerBody, DrawerFooter, Text, Heading, IconButton } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import compositions from '../../data/compositions';
import { Composition } from '../../model/compositions';
import CompositionBox from './CompositionBox';
import CompositionSearch from './CompositionSearch';
import { FiUsers } from 'react-icons/fi';

type CompositionSelectorProps = {
  defaultSelection?: Array<string>;
  onValidate:(compositionIds:Array<string>) => void;
  openOnInit?:boolean;
};

function CompositionSelector({ defaultSelection, onValidate, openOnInit = false }: CompositionSelectorProps):JSX.Element {
  const [displayedCompositions, setDisplayedCompositions] = useState<Array<Composition>>([]);
  const [selection, setSelection] = useState<Array<string>>(defaultSelection || []);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (openOnInit) {
      onOpen();
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
      values = selection.filter(id => id !== e.target.value);
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
    <FormControl key={c.id} display="flex" alignItems="center"> 
      <Switch value={c.id} isChecked={selection.includes(c.id)} mr="5px" onChange={onChange}/>
      <CompositionBox key={c.id} composition={c} />
    </FormControl>
  );

  return (
    <>
      <IconButton icon={<FiUsers/>} aria-label='Select compositions' onClick={onOpen}/>

      <Drawer
        isOpen={isOpen}
        placement="right"
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
                <Heading size='xs'>{displayedCompositions.length} compositions</Heading>
                <Flex flexDirection="row" wrap="wrap">
                  {compositionBoxes}
                </Flex>;
              </VStack>
            </DrawerBody>

            <DrawerFooter>
              <HStack mt='1rem' wrap='wrap'>
                <Text size='xs'>Select</Text>
                <Button size="xs" px={1} variant='outline' onClick={selectNone}>None</Button>
                <Button size="xs" px={1} variant='outline' onClick={selectAll}>All</Button>
                <Button size="xs" px={1} variant='outline' onClick={selectResults}>Results ({displayedCompositions.length})</Button>
                <Button size="sm" px={1} variant='solid' onClick={validateSelection}>Validate ({selection.length})</Button>
              </HStack>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
}

export default CompositionSelector;
