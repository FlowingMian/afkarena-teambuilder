import { Composition } from "../../model/compositions";
import { Wrap, WrapItem } from '@chakra-ui/react'
import CompositionDetails from "./CompositionDetails";

type CompositionDetailsListProps = {
  compositions: Array<Composition>;
};

function CompositionDetailsList({ compositions }: CompositionDetailsListProps) {
  const compositionBoxes = compositions.map((c) => 
    <WrapItem key={c.id}>
      <CompositionDetails composition={c} />
    </WrapItem>
  );

  return <Wrap>
    {compositionBoxes}
  </Wrap>;
}

export default CompositionDetailsList;
