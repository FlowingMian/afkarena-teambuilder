import React from 'react';
import { Box, Heading, HStack, Wrap, WrapItem } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import compositions from '../../data/compositions';
import { Composition } from '../../model/compositions';
import CompositionSearch from '../Composition/CompositionSearch';
import CompositionDashboardHelp from './CompositionDashboardHelp';
import { setPageTitle } from '../utils';
import Loader from '../Common/Loader';
import { useLocation } from 'react-router';
import ControlBar from '../Common/ControlBar';
import getDeviceStyle from '../../theme/deviceStyle/deviceStyle';
import { BoxCardStyle } from '../../theme/styles';
import CompositionDetails from '../Composition/CompositionDetails';


function CompositionDashboard():JSX.Element {

  const deviceStyle = getDeviceStyle();
  
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

  const compositionBoxes = selectedCompositions.map((c) => 
    <WrapItem key={c.id}>
      <Box {...BoxCardStyle} width={['21.5rem', '44rem']} height='100%'>
        <CompositionDetails deviceStyle={deviceStyle} composition={c} />
      </Box>
    </WrapItem>
  );

  return (<HStack {...deviceStyle.viewport}>
    <ControlBar deviceStyle={deviceStyle}>
      <CompositionDashboardHelp deviceStyle={deviceStyle}/>
    </ControlBar>
    <Box {...deviceStyle.dashboard.viewport}>
      <Box {...deviceStyle.dashboard.controls}>
        <CompositionSearch onChange={filterCompositions}/>
      </Box>
      <Box {...deviceStyle.dashboard.results}>
        {selectedCompositions.length === 0 && <Loader/>}
        {selectedCompositions.length !== 0 && <>
          <Heading size='md'>{selectedCompositions.length} compositions</Heading>
          <Wrap spacing={1}>
            {compositionBoxes}
          </Wrap>
        </>}
      </Box>
    </Box>
  </HStack>
  );
}

export default CompositionDashboard;
