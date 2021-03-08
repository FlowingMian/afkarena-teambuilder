import React from 'react';
import { Checkbox, VStack,} from '@chakra-ui/react';
import { Characterictic } from '../../model/characteristics';

type CharacteristicCheckboxGroupProps<Characterictic> = {
  selection: Array<string>;
  characterictics: Array<Characterictic>;
  onChange:(value: Array<string>) => void;
};

function CharacteristicCheckboxGroup({ selection, characterictics, onChange : OnSelectionChange }: CharacteristicCheckboxGroupProps<Characterictic>):JSX.Element {

  const allChecked = selection.length === characterictics.length;
  const isIndeterminate = !allChecked && selection.length > 0;

  function toggleAll() {
    OnSelectionChange(selection.length === 0 ? characterictics.map(c => c.id) : []);
  }

  function onChange(e:React.ChangeEvent<HTMLInputElement>) {
    let values;
    if (e.target.checked) {
      values = [...selection, e.target.value];
    }
    else {
      values = selection.filter(c => c !== e.target.value);
    } 
    OnSelectionChange(values);
  }

  return (
    <VStack alignItems='start'>
      <Checkbox isChecked={allChecked} isIndeterminate={isIndeterminate} p='2px' onChange={toggleAll}/>
      {characterictics.map((c) => <Checkbox key={c.id} value={c.id} isChecked={selection.includes(c.id)} onChange={onChange} p='2px'/>)}
    </VStack>
  );
}

export default CharacteristicCheckboxGroup;
