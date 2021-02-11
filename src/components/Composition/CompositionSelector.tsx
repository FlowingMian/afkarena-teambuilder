
import { FormControl, Switch, Flex } from '@chakra-ui/react'
import { Composition } from '../../model/compositions';
import CompositionBox from "./CompositionBox";

export interface SelectedComposition extends Composition {
  selected: boolean
};

type CompositionSelectorProps = {
  compositions: Array<SelectedComposition>;
  onChange:(compositionId:string, value:boolean) => void;
};

function CompositionSelector({ compositions, onChange }: CompositionSelectorProps) {

  const compositionBoxes = compositions.map((c) => 
    <FormControl key={c.id} maxWidth='24%' minWidth="335px" display="flex" alignItems="center" m="calc(0.5rem/2)"> 
      <Switch defaultChecked={c.selected} mr="5px" onChange={() => onChange(c.id, !c.selected)}/>
      <CompositionBox key={c.id} composition={c} />
    </FormControl>
  );

  return <Flex flexDirection="row" wrap="wrap">
      {compositionBoxes}
  </Flex>;
}

export default CompositionSelector;
