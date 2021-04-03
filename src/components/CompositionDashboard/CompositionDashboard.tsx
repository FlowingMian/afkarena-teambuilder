import React from 'react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Box, Heading, Link, Text, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import compositions from '../../data/compositions';
import { Composition } from '../../model/compositions';
import { BoxControlsStyle, BoxResultsStyle, BoxQuoteStyle } from '../../theme/styles';
import CompositionDetailsList from '../Composition/CompositionDetailsList';
import CompositionSearch from '../Composition/CompositionSearch';
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

        <Heading size="sm">What is a composition?</Heading>
        <Text fontSize="sm"><span>Composition (or Grouping around a Hero Core / Set / Team / ...) refers to what </span>
          <Link 
            href="https://www.reddit.com/r/afkarena/comments/l7ji8t/introduction_to_hero_cores_an/"
            isExternal>
          /u/aimb defined on Reddit <ExternalLinkIcon mx="2px" />
          </Link>
        </Text>
        <Box {...BoxQuoteStyle}>
          <b>“Core”</b> here refers to function, namely working as a whole towards a <b>specific “win condition.”</b> <br/>
          <b>“Flex”</b> here refers to heroes that capitalize on the strengths, compensate for weaknesses, or modify win conditions more directly.
        </Box>

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
