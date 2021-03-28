import React from 'react';
import { Table, Thead, Th, Tbody, Tr } from '@chakra-ui/react';
import { HeroFilters, acceptHero } from '../Characteristic/HeroFilters';
import { UsageDashboardResult } from './model';
import UsageDashboardTableRow from './UsageDashboardTableRow';
import { Profile } from '../../model/profile';

type UsageDashboardTableProps = {
  profile:Profile;
  usageResult: UsageDashboardResult;
  filters?:HeroFilters;
};

function UsageDashboardTable({ profile, usageResult, filters }: UsageDashboardTableProps):JSX.Element {

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
