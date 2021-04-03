import React from 'react';
import { Alert, AlertIcon, AlertTitle, Box, Center, HStack, Link, ListItem, UnorderedList, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { BoxControlsStyle, BoxResultsStyle } from '../../theme/styles';
import CompositionSelector from '../Composition/CompositionSelector';
import MultifightDashboardResults from './MultifightDashboardResults';
import compositions from '../../data/compositions';
import { sendViewItems } from '../../useTracking';
import { setPageTitle } from '../utils';
import { CompositionHeroes, Profile } from '../../model/profile';
import Loader from '../Common/Loader';
import { useLocation } from 'react-router';

type MultifightDashboardProps = {
  profile: Profile;
};

function MultifightDashboard({profile}:MultifightDashboardProps):JSX.Element {

  const [selectedCompositions, setSelectedCompositions] = useState<CompositionHeroes>(profile.compositions);
  
  const [rendering, setRendering] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    setRendering(true);
  }, [pathname]);
  useEffect(() => {
    setPageTitle('Multifight');
    setTimeout(() => {setRendering(false);}, 1);
  }, []);

  if (rendering) {
    return <Loader/>;
  }


  function filterCompositions(compositionIds:Array<string>) {
    sendViewItems('composition', compositionIds);
    setSelectedCompositions(compositions
      .filter(c => compositionIds.includes(c.id))
      .reduce((res, c) => (res[c.id] = c.coreHeroes.heroes, res), {} as CompositionHeroes)
    );
  }

  return (<>
    <VStack {...BoxControlsStyle} alignItems='stretch'>
      <CompositionSelector defaultSelection={Object.keys(profile.compositions)} onValidate={filterCompositions}/>
    </VStack>
    <Box {...BoxResultsStyle}>
      {Object.keys(selectedCompositions).length === 0 && <Center>
        <Alert 
          status="info" 
          width={[null, '60rem']}
          flexDirection="column"
          alignItems="start"
          fontSize="sm">
          <HStack mb={3}>
            <AlertIcon /><AlertTitle>How does it work?</AlertTitle>
          </HStack>
          <UnorderedList>
            <ListItem>Start by <b>selecting some compositions </b><Link href='/compositions'>(Click for more information)</Link></ListItem>
            <ListItem>You can then <b>fill remaining spots</b> with heroes still availble.</ListItem>
          </UnorderedList>
        </Alert>
      </Center>}
      {Object.keys(selectedCompositions).length > 0 && 
        <MultifightDashboardResults profile={profile} compositionHeroes={selectedCompositions} onCompositionHeroesChange={setSelectedCompositions}/>
      }
    </Box>
  </>);
}

export default MultifightDashboard;
