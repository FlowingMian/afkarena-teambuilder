import React from 'react';
import { Table, Thead, Th, Tbody, Tr, Stack, useBreakpointValue, StackDirection } from '@chakra-ui/react';
import { HeroFilters, acceptHero } from '../Characteristic/HeroFilters';
import ArtifactDashboardTableRow from './ArtifactDashboardTableRow';
import { Profile } from '../../model/profile';
import { Hero } from '../../model/heroes';
import { ArtifactGuideHero } from '../../model/artifacts';
import { Artifacts } from '../../model/characteristics/artifacts';
import { BoxResultsStyle } from '../../theme/styles';
import HeroCharactericticsTable from '../Characteristic/HeroCharactericticsTable';

const DISPLAY_BEST = false;

type ArtifactDashboardTableProps = {
  profile:Profile;
  artifactResult: Map<Hero, ArtifactGuideHero>;
  filters?:HeroFilters;
};

function ArtifactDashboardTable({ profile, artifactResult , filters }: ArtifactDashboardTableProps):JSX.Element {

  const stackDirection:StackDirection|undefined = useBreakpointValue({ base: 'column', lg: 'row' });

  const selection = Array.from(artifactResult.entries())
    // Override artifacts filter to accept all heroes regardles of their best Artifact
    .filter(([hero]) => !filters || acceptHero({...filters, artifacts: Artifacts.map(a => a.id)}, profile, hero))
    // Apply artifacts filter on all ranks
    .filter(([, artifacts]) => !filters || filters.artifacts.some(artifactId => [...artifacts.rank1, ...artifacts.rank2, ...artifacts.rank3].map(a => a.id).includes(artifactId))); 
  
  const rows = selection.map(([hero, artifacts]) => <ArtifactDashboardTableRow key={hero.id} hero={hero} artifactResultRow={artifacts} displayBest={DISPLAY_BEST}/>);

  return (
    <Stack direction={stackDirection} alignItems='start' {...BoxResultsStyle} >
      <HeroCharactericticsTable heroes={Array.from(selection.map(a => a[0]))} />
      <Table size="sm" variant="striped">
        <Thead>
          <Tr>
            <Th width='4rem'>Hero</Th>
            <Th>Class</Th>
            {DISPLAY_BEST && <Th>Best</Th>}
            <Th>First</Th>
            <Th>Second</Th>
            <Th>Third</Th>
          </Tr>
        </Thead>
        <Tbody>
          {rows}
        </Tbody>
      </Table>
    </Stack>
  );
}

export default ArtifactDashboardTable;
