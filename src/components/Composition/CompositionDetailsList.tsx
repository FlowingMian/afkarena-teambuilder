import React from 'react';
import { Composition } from '../../model/compositions';
import { Box, Stack, StackDirection, useBreakpointValue } from '@chakra-ui/react';
import CompositionDetails from './CompositionDetails';
import { BoxCardStyle } from '../../theme/styles';

type CompositionDetailsListProps = {
  compositions: Array<Composition>;
};

function CompositionDetailsList({ compositions }: CompositionDetailsListProps):JSX.Element {
  const stackDirection:StackDirection|undefined = useBreakpointValue({ base: 'column', lg: 'row' });

  const compositionBoxes = compositions.map((c) => 
    <Box {...BoxCardStyle} minWidth={[null, '29rem']} key={c.id}>
      <CompositionDetails composition={c} />
    </Box>
  );

  return <Box width="100%" overflow='scroll'>
    <Stack direction={stackDirection}>
      {compositionBoxes}
    </Stack>
  </Box>;
}

export default CompositionDetailsList;
