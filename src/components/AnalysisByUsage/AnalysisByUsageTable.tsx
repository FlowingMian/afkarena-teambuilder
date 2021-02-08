import { Box, Card, Flex } from "rebass";
import HeroBox from "../Hero/HeroBox";
import { UsageResult } from "./model/UsageResult";

type AnalysisByUsageTableProps = {
  usageResult: UsageResult;
};

function AnalysisByUsageTable({ usageResult }: AnalysisByUsageTableProps) {

  const rows = usageResult.heroUsageResults.map(ur => {
    return <Flex flexDirection="row">
      <HeroBox hero={ur.hero} />
      <Box width={75}>
        {ur.coreCompositions.length} ({Math.round(ur.coreCompositions.length * 100 / usageResult.compositionCount)}%)
      </Box>
      <Box width={75}>
      {ur.flexCompositions.length} ({Math.round(ur.flexCompositions.length * 100 / usageResult.compositionCount)}%)
      </Box>
    </Flex>
  });

  return <Card>
      <Flex flexDirection="column">
      {rows}
    </Flex>
  </Card>
}

export default AnalysisByUsageTable;
