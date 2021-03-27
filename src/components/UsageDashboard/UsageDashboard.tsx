import React from 'react';
import { Alert, AlertIcon, AlertTitle, Box, Center, HStack, Link, ListItem, UnorderedList, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { HeroUsageDashboardResult, UsageDashboardResult } from './model';
import { BoxControlsStyle, BoxResultsStyle } from '../../theme/styles';
import CompositionSelector from '../Composition/CompositionSelector';
import UsageDashboardResults from './UsageDashboardResults';
import compositions from '../../data/compositions';
import heroes from '../../data/heroes';
import HeroFiltersSelector from '../Characteristic/HeroFiltersSelector';
import { sendViewItems } from '../../useTracking';
import { setPageTitle } from '../utils';
import { HeroFilters } from '../Characteristic/HeroFilters';

function UsageDashboard():JSX.Element {

  const [usageResult, setUsageResult] = useState<UsageDashboardResult>();
  const [filters, setFilters] = useState<HeroFilters>();
  
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
  
  useEffect(() => {
    setPageTitle('Usages');
  }, []);

  return (<>
    <VStack {...BoxControlsStyle} alignItems='stretch'>
      <CompositionSelector onValidate={calculateHeroUsage}/>
      <HeroFiltersSelector onChange={filterHeroes}/>
    </VStack>
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
            <ListItem>Start by <b>selecting some compositions </b><Link href='/compositions'>(Click for more information)</Link></ListItem>
            <ListItem>The tool will rank the heroes according to <b>their number of uses</b> in the compositions you have selected.</ListItem>
            <ListItem>You can then <b>apply some filters</b> to narrow the results.</ListItem>
          </UnorderedList>
        </Alert>
      </Center>}
      {usageResult && <UsageDashboardResults usageResult={usageResult} filters={filters}/>}
    </Box>
  </>);
}

export default UsageDashboard;
