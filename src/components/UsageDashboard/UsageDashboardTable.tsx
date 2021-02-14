import { Table, Thead, Th, Tbody, Tr } from "@chakra-ui/react"

import { HeroCharactericticsSelection } from "../Characteristic/HeroCharactericticsSelector";
import { UsageDashboardResult } from "./model";
import UsageDashboardTableRow from "./UsageDashboardTableRow";

type UsageDashboardTableProps = {
  usageResult: UsageDashboardResult;
  filters?:HeroCharactericticsSelection;
};

function UsageDashboardTable({ usageResult, filters }: UsageDashboardTableProps) {



  const rows = usageResult.heroUsageResults
    .filter(ur => !filters || filters.accept(ur.hero))
    .map(ur => <UsageDashboardTableRow heroUsageResult={ur} compositionCount={usageResult.compositionCount}/>);

  return (
    <Table size="sm" variant="striped">
      <Thead>
        <Tr>
          <Th width='4rem'>Hero</Th>
          <Th>Usage</Th>
          <Th>Core</Th>
          <Th>Flex</Th>
          <Th>Flex roles</Th>
        </Tr>
      </Thead>
      <Tbody>
        {rows}
      </Tbody>
    </Table>
  )
}

export default UsageDashboardTable;
