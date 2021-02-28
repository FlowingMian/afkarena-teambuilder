import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"
import UsageDashboardTierList from "./UsageDashboardTierList";
import UsageDashboardTable from "./UsageDashboardTable";
import { UsageDashboardResult } from './model';
import HeroCharactericticsTable from "../Characteristic/HeroCharactericticsTable";
import { HeroCharactericticsSelection } from "../Characteristic/HeroCharactericticsSelector";

type UsageDashboardResultsProps = {
    usageResult: UsageDashboardResult;
    filters: HeroCharactericticsSelection | undefined;
};

function UsageDashboardResults({ usageResult, filters }: UsageDashboardResultsProps) {
  const filteredHeroes = usageResult.heroUsageResults
  .filter(ur => !filters || filters.accept(ur.hero))
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
              <UsageDashboardTierList usageResult={usageResult} filters={filters}/>
            </TabPanel>
            <TabPanel>
              <UsageDashboardTable usageResult={usageResult} filters={filters}/>
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