
import { FormControl, Switch, Flex, VStack, HStack, Button } from '@chakra-ui/react'
import { useState } from 'react';
import compositions from '../../data/compositions';
import { Composition } from '../../model/compositions';
import CompositionBox from "./CompositionBox";
import CompositionSearch from './CompositionSearch';

type CompositionSelectorProps = {
  onValidate:(compositionIds:Array<string>) => void;
};

function CompositionSelector({ onValidate }: CompositionSelectorProps) {

  const [displayedCompositions, setDisplayedCompositions] = useState<Array<Composition>>([]);
  const [selection, setSelection] = useState<Array<string>>(compositions.map(c => c.id));

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

  return <VStack alignItems='stretch'>
    <CompositionSearch onChange={filterCompositions}/>
    <Flex flexDirection="row" wrap="wrap">
        {compositionBoxes}
    </Flex>;
    <HStack mt='1rem'>
      <Button variant='solid' onClick={validateSelection}>Select {selection.length} compositions</Button>
      <Button variant='outline' onClick={selectAll}>Select all</Button>
      <Button variant='outline' onClick={selectNone}>Select none</Button>
    </HStack>
  </VStack>
}

export default CompositionSelector;
