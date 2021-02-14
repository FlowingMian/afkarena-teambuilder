import { Tabs, TabList, TabPanels, Tab, TabPanel, HStack, VStack, Spacer, Box } from "@chakra-ui/react"
import UsageDashboardTierList from "./UsageDashboardTierList";
import UsageDashboardTable from "./UsageDashboardTable";
import { UsageDashboardResult } from './model';
import HeroCharactericticsSelector, { HeroCharactericticsSelection } from "../Characteristic/HeroCharactericticsSelector";
import { useState } from "react";
import HeroCharactericticsTable from "../Characteristic/HeroCharactericticsTable";
import { BoxCardStyle } from "../../theme/styles";

type UsageDashboardResultsProps = {
    usageResult: UsageDashboardResult;
};

function UsageDashboardResults({ usageResult }: UsageDashboardResultsProps) {

  const [filters, setFilters] = useState<HeroCharactericticsSelection>();
  
  function filterHeroes(filters:HeroCharactericticsSelection) {
    setFilters(filters);
  }

  const filteredHeroes = usageResult.heroUsageResults
    .filter(ur => !filters || filters.accept(ur.hero))
    .map(hr => hr.hero);

  return (
    <HStack spacing="1rem" alignItems='start'>
      <VStack alignItems='start'>
        <HeroCharactericticsSelector onChange={filterHeroes}/>
        <Spacer/>
        <Box {...BoxCardStyle}>
          <HeroCharactericticsTable heroes={filteredHeroes} />
        </Box>
      </VStack>

      <Tabs isLazy flexGrow={1}>
          <TabList>
            <Tab>Tier List</Tab>
            <Tab>Table</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
            < UsageDashboardTierList usageResult={usageResult} filters={filters}/>
            </TabPanel>
            <TabPanel>
            <UsageDashboardTable usageResult={usageResult} filters={filters}/>
            </TabPanel>
        </TabPanels>
      </Tabs>
    </HStack>
  );
}

export default UsageDashboardResults;