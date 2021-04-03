import React from 'react';
import { Heading, VStack } from '@chakra-ui/react';
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

  return (
    <div>
      <VStack {...BoxControlsStyle} alignItems='stretch'>
        <CompositionSearch onChange={filterCompositions}/>
        <CompositionDashboardHelp/>
      </VStack>
      
      <VStack {...BoxResultsStyle} alignItems='stretch'>
        {selectedCompositions.length === 0 && <Loader/>}
        {selectedCompositions.length !== 0 && <>
          <Heading size='md'>{selectedCompositions.length} compositions</Heading>
          <CompositionDetailsList compositions={selectedCompositions}/>
        </>}
      </VStack>
    </div>
  );
}

export default CompositionDashboard;
