import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import UsageDashboardTierList from './UsageDashboardTierList';
import UsageDashboardTable from './UsageDashboardTable';
import { UsageDashboardResult } from './model';
import HeroCharactericticsTable from '../Characteristic/HeroCharactericticsTable';
import { HeroFilters, acceptHero } from '../HeroFilters/HeroFilters';
import { Profile } from '../../model/profile';

type UsageDashboardResultsProps = {
  profile:Profile;
  usageResult: UsageDashboardResult;
  filters: HeroFilters | undefined;
};

function UsageDashboardResults({ profile, usageResult, filters }: UsageDashboardResultsProps):JSX.Element {

  const filteredHeroes = usageResult.heroUsageResults
    .filter(ur => !filters || acceptHero(filters, profile, ur.hero))
    .map(ur => ur.hero);

  return (<>
    <Tabs isLazy>
      <TabList>
        <Tab>Tier List</Tab>
        <Tab>Table</Tab>
        <Tab>Distribution</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <UsageDashboardTierList profile={profile} usageResult={usageResult} filters={filters}/>
        </TabPanel>
        <TabPanel>
          <UsageDashboardTable profile={profile} usageResult={usageResult} filters={filters}/>
        </TabPanel>
        <TabPanel>
          <HeroCharactericticsTable heroes={filteredHeroes} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  </>
  );
}

export default UsageDashboardResults;