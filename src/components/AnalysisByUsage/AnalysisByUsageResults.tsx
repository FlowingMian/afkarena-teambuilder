import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"
import AnalysisByUsageTierList from "./AnalysisByUsageTierList";
import AnalysisByUsageTable from "./AnalysisByUsageTable";
import { UsageResult } from './model';

type AnalysisByUsageResultsProps = {
    usageResult: UsageResult | undefined;
};

function AnalysisByUsageResults({ usageResult }: AnalysisByUsageResultsProps) {
    return usageResult ? (<Tabs isLazy>
        <TabList>
          <Tab>Tier List</Tab>
          <Tab>Table</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
          < AnalysisByUsageTierList usageResult={usageResult} />
          </TabPanel>
          <TabPanel>
          <AnalysisByUsageTable usageResult={usageResult} />
          </TabPanel>
      </TabPanels>
    </Tabs>
    ) : null;
}

export default AnalysisByUsageResults;