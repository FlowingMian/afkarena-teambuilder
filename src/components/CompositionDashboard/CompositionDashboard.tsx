import { Box, Heading } from '@chakra-ui/react';
import { useState } from 'react';
import compositions from '../../data/compositions';
import { Composition } from '../../model/compositions';
import { BoxControlsStyle, BoxResultsStyle } from '../../theme/styles';
import CompositionDetailsList from '../Composition/CompositionDetailsList';
import CompositionSearch from '../Composition/CompositionSearch';


function CompositionDashboard() {

  const [selectedCompositions, setSelectedCompositions] = useState<Array<Composition>>([]);
  
  function filterCompositions(compositionIds:Array<string>) {
    setSelectedCompositions(compositions.filter(c => compositionIds.includes(c.id)));
  }

  return (
    <div>
      <Box {...BoxControlsStyle}>
        <CompositionSearch onChange={filterCompositions}/>
      </Box>
      <Box {...BoxResultsStyle}>
          <Heading>{selectedCompositions.length} compositions</Heading>
          <CompositionDetailsList compositions={selectedCompositions}/>
      </Box>
    </div>
  );
}

export default CompositionDashboard;
