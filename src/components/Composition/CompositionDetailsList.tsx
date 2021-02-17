import { Composition } from "../../model/compositions";
import { Box, Wrap, WrapItem } from '@chakra-ui/react'
import CompositionDetails from "./CompositionDetails";
import { BoxCardStyle } from "../../theme/styles";

type CompositionDetailsListProps = {
  compositions: Array<Composition>;
};

function CompositionDetailsList({ compositions }: CompositionDetailsListProps) {
  const compositionBoxes = compositions.map((c) => 
    <WrapItem key={c.id}>
      <Box {...BoxCardStyle} width="34rem" minHeight="30rem">
        <CompositionDetails composition={c} />
      </Box>
    </WrapItem>
  );

  return <Wrap>
    {compositionBoxes}
  </Wrap>;
}

export default CompositionDetailsList;
