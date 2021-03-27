import React, { useContext } from 'react';
import { Table, Thead, Th, Tbody, Tr } from '@chakra-ui/react';
import { HeroFilters, acceptHero } from '../Characteristic/HeroFilters';
import { UsageDashboardResult } from './model';
import UsageDashboardTableRow from './UsageDashboardTableRow';
import { ProfileContext } from '../Profile/ProfileContext';

type UsageDashboardTableProps = {
  usageResult: UsageDashboardResult;
  filters?:HeroFilters;
};

function UsageDashboardTable({ usageResult, filters }: UsageDashboardTableProps):JSX.Element {
  const {profile} = useContext(ProfileContext);

  const rows = usageResult.heroUsageResults
    .filter(ur => !filters || acceptHero(filters, profile, ur.hero))
    .map(ur => <UsageDashboardTableRow key={ur.hero.id} heroUsageResult={ur} compositionCount={usageResult.compositionCount}/>);

  return (
    <Table size="sm" variant="striped">
      <Thead>
        <Tr>
          <Th width='4rem'>Hero</Th>
          <Th>Usage</Th>
          <Th>Core</Th>
          <Th>Flex</Th>
          {/* <Th>Flex roles</Th> */}
        </Tr>
      </Thead>
      <Tbody>
        {rows}
      </Tbody>
    </Table>
  );
}

export default UsageDashboardTable;
