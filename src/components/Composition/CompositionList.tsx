import { Composition } from "../../model/compositions";
import {Flex } from 'rebass'
import CompositionDetails from "./CompositionDetails";

type CompositionListProps = {
  compositions: Array<Composition>;
};

function CompositionList({ compositions }: CompositionListProps) {
  const compositionBoxes = compositions.map((c) => <CompositionDetails key={c.id} composition={c} />);

  return <Flex flexDirection="column">
    {compositionBoxes}
  </Flex>;
}

export default CompositionList;
