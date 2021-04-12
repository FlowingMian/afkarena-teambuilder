import React from 'react';
import { Box, Heading, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import compositions from '../../data/compositions';
import { Composition } from '../../model/compositions';
import { BoxControlsStyle, BoxResultsStyle } from '../../theme/styles';
import CompositionDetailsList from '../Composition/CompositionDetailsList';
import CompositionSearch from '../Composition/CompositionSearch';
import CompositionDashboardHelp from './CompositionDashboardHelp';
import { setPageTitle } from '../utils';
import Loader from '../Common/Loader';
import { useLocation } from 'react-router';
import ControlBar from '../Common/ControlBar';


function CompositionDashboard():JSX.Element {

  const [selectedCompositions, setSelectedCompositions] = useState<Array<Composition>>([]);

  const [rendering, setRendering] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    setRendering(true);
  }, [pathname]);
  useEffect(() => {
    setPageTitle('Compositions');
    setTimeout(() => {setRendering(false);}, 1);
  }, []);

  if (rendering) {
    return <Loader/>;
  }

  function filterCompositions(compositionIds:Array<string>) {
    setSelectedCompositions(compositions.filter(c => compositionIds.includes(c.id)));
  }

  return (<>
    <ControlBar>
      <CompositionDashboardHelp/>
    </ControlBar>
    <Box {...BoxControlsStyle}>
      <CompositionSearch onChange={filterCompositions}/>
    </Box>
    <VStack {...BoxResultsStyle} alignItems='stretch'>
      {selectedCompositions.length === 0 && <Loader/>}
      {selectedCompositions.length !== 0 && <>
        <Heading size='md'>{selectedCompositions.length} compositions</Heading>
        <CompositionDetailsList compositions={selectedCompositions}/>
      </>}
    </VStack>
  </>
  );
}

export default CompositionDashboard;
