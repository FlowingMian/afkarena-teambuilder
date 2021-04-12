import React from 'react';
import { Alert, AlertIcon, AlertTitle, Box, Center, HStack, Icon, ListItem, UnorderedList } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { HeroUsageDashboardResult, UsageDashboardResult } from './model';
import { BoxResultsStyle } from '../../theme/styles';
import CompositionSelector from '../Composition/CompositionSelector';
import UsageDashboardResults from './UsageDashboardResults';
import compositions from '../../data/compositions';
import heroes from '../../data/heroes';
import HeroFiltersSelector from '../HeroFilters/HeroFiltersSelector';
import { sendViewItems } from '../../useTracking';
import { setPageTitle } from '../utils';
import { HeroFilters } from '../HeroFilters/HeroFilters';
import { Profile } from '../../model/profile';
import Loader from '../Common/Loader';
import { useLocation } from 'react-router';
import ControlBar from '../Common/ControlBar';
import { FiFilter, FiUsers } from 'react-icons/fi';

type UsageDashboardProps = {
  profile: Profile;
};

function UsageDashboard({profile}:UsageDashboardProps):JSX.Element {

  const [usageResult, setUsageResult] = useState<UsageDashboardResult>();
  const [filters, setFilters] = useState<HeroFilters>();
  
  const [rendering, setRendering] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    setRendering(true);
  }, [pathname]);
  useEffect(() => {
    setPageTitle('Usages');
    setTimeout(() => {setRendering(false);}, 1);
  }, []);

  if (rendering) {
    return <Loader/>;
  }

  function filterHeroes(filters:HeroFilters) {
    setFilters(filters);
  }

  function calculateHeroUsage(compositionIds:Array<string>) {
    sendViewItems('composition', compositionIds);
    const heroUsagesResults = new Map(heroes.map((h): [string, HeroUsageDashboardResult] => [h.id, new HeroUsageDashboardResult(h)]));

    const selectedCompositions = compositions.filter(c => compositionIds.includes(c.id));

    selectedCompositions.forEach((c) => {
      c.coreHeroes.heroes.forEach((hr) => {
        const heroUsageResult = heroUsagesResults.get(hr.id) as HeroUsageDashboardResult;
        heroUsageResult.coreCompositions.push(c);
      });
      c.flexHeroes.forEach((cc) => {
        cc.heroes.forEach((hr) => {
          const heroUsageResult = heroUsagesResults.get(hr.id) as HeroUsageDashboardResult;
          heroUsageResult.flexCompositions.set(c, cc.role);
        });
      });
    });

    setUsageResult(new UsageDashboardResult(
      selectedCompositions.length,
      Array.from(heroUsagesResults.values())
        .sort((ur1, ur2) => 
          // Sort by number of usage > core > flex
          ur2.coreCompositions.length + ur2.flexCompositions.size - ur1.coreCompositions.length - ur1.flexCompositions.size ||
          ur2.coreCompositions.length - ur1.coreCompositions.length ||
          ur2.flexCompositions.size - ur1.flexCompositions.size
        )
    ));
  }

  return (<>
    <ControlBar>
      <CompositionSelector defaultSelection={Object.keys(profile.compositions)} onValidate={calculateHeroUsage}/>
      <HeroFiltersSelector onChange={filterHeroes}/>
    </ControlBar>
    <Box {...BoxResultsStyle}>
      {!usageResult && <Center>
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
            <ListItem>
              Start by clicking on the <b>button <Icon as={FiUsers}/></b> to select some compositions
            </ListItem>
            <ListItem>
              The tool will rank the heroes according to <b>their number of uses</b> in the compositions you have selected.
            </ListItem>
            <ListItem>
              You can then <b>apply some filters <Icon as={FiFilter}/></b> to narrow the results.
            </ListItem>
          </UnorderedList>
        </Alert>
      </Center>}
      {usageResult && <UsageDashboardResults profile={profile} usageResult={usageResult} filters={filters}/>}
    </Box>
  </>);
}

export default UsageDashboard;
