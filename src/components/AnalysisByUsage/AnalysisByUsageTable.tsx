import { Table, Thead, Th, Tbody, Tr, Td } from "@chakra-ui/react"
import HeroBox from "../Hero/HeroBox";
import { UsageResult } from "./model";

type AnalysisByUsageTableProps = {
  usageResult: UsageResult;
};

function AnalysisByUsageTable({ usageResult }: AnalysisByUsageTableProps) {

  const rows = usageResult.heroUsageResults.map(ur => {
    return <Tr key={ur.hero.id}>
      <Td><HeroBox hero={ur.hero} /></Td>
      <Td>
        {ur.coreCompositions.length} ({Math.round(ur.coreCompositions.length * 100 / usageResult.compositionCount)}%)
      </Td>
      <Td>
        {ur.flexCompositions.length} ({Math.round(ur.flexCompositions.length * 100 / usageResult.compositionCount)}%)
      </Td>
    </Tr>
  });

  return (
    <Table size="sm">
      <Thead>
        <Tr>
          <Th>Hero</Th>
          <Th width={75}>Core</Th>
          <Th width={75}>Flex</Th>
        </Tr>
      </Thead>
      <Tbody>
        {rows}
      </Tbody>
      </Table>
  )
}

export default AnalysisByUsageTable;
