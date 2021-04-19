import React from 'react';
import { Table, Thead, Th, Tbody, Tr,  VStack } from '@chakra-ui/react';
import { HeroFilters, acceptHero } from '../HeroFilters/HeroFilters';
import ArtifactDashboardTableRow from './ArtifactDashboardTableRow';
import { Profile } from '../../model/profile';
import { Hero } from '../../model/heroes';
import { ArtifactGuideHero } from '../../model/artifacts';
import { Artifacts } from '../../model/characteristics/artifacts';
import HeroCharactericticsTable from '../Characteristic/HeroCharactericticsTable';

const DISPLAY_BEST = false;

type ArtifactDashboardTableProps = {
  profile:Profile;
  artifactResult: Map<Hero, ArtifactGuideHero>;
  filters?:HeroFilters;
};

function ArtifactDashboardTable({ profile, artifactResult , filters }: ArtifactDashboardTableProps):JSX.Element {
  
  const selection = Array.from(artifactResult.entries())
    // Override artifacts filter to accept all heroes regardless of their best Artifact
    .filter(([hero]) => !filters || acceptHero({...filters, artifacts: Artifacts.map(a => a.id)}, profile, hero))
    // Apply artifacts filter on all ranks
    .filter(([, artifacts]) => !filters || filters.artifacts.some(artifactId => [...artifacts.rank1, ...artifacts.rank2, ...artifacts.rank3].map(a => a.id).includes(artifactId))); 
  
  const rows = selection.map(([hero, artifacts]) => <ArtifactDashboardTableRow key={hero.id} hero={hero} artifactResultRow={artifacts} displayBest={DISPLAY_BEST}/>);

  return (
    <VStack alignItems='start'>
      <HeroCharactericticsTable heroes={Array.from(selection.map(a => a[0]))} />
      <Table size="sm" variant="striped">
        <Thead>
          <Tr>
            <Th>Hero</Th>
            {DISPLAY_BEST && <Th minWidth='4rem'>Best</Th>}
            <Th minWidth='3rem'>1st</Th>
            <Th minWidth='3rem'>2nd</Th>
            <Th minWidth='3rem'>3rd</Th>
          </Tr>
        </Thead>
        <Tbody>
          {rows}
        </Tbody>
      </Table>
    </VStack>
  );
}

export default ArtifactDashboardTable;
