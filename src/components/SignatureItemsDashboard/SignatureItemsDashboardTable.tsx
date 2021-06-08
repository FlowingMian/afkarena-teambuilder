import React from 'react';
import { Table, Thead, Th, Tbody, Tr,  VStack } from '@chakra-ui/react';
import { HeroFilters, acceptHero } from '../HeroFilters/HeroFilters';
import SignatureItemsDashboardTableRow from './SignatureItemsDashboardTableRow';
import { Profile } from '../../model/profile';
import { Hero } from '../../model/heroes';
import { SignatureItemsGuideHero } from '../../model/signatureItems';
import HeroCharactericticsTable from '../Characteristic/HeroCharactericticsTable';

const DISPLAY_BEST = true;

type SignatureItemsDashboardTableProps = {
  profile:Profile;
  signatureItemsResult: Map<Hero, SignatureItemsGuideHero>;
  filters?:HeroFilters;
};

function SignatureItemsDashboardTable({ profile, signatureItemsResult , filters }: SignatureItemsDashboardTableProps):JSX.Element {
  
  const selection = Array.from(signatureItemsResult.entries())
    // // Override artifacts filter to accept all heroes regardless of their best Signature
    .filter(([hero]) => !filters || acceptHero(filters, profile, hero));
    // // Apply artifacts filter on all ranks
    // .filter(([, artifacts]) => !filters || filters.artifacts.some(artifactId => [artifacts._10, artifacts._20, artifacts._30].map(a => a.id).includes(artifactId))); 
  
  const rows = selection.map(([hero, artifacts]) => <SignatureItemsDashboardTableRow key={hero.id} hero={hero} signatureResultRow={artifacts} displayBest={DISPLAY_BEST}/>);

  return (
    <VStack alignItems='start'>
      <HeroCharactericticsTable heroes={Array.from(selection.map(a => a[0]))} />
      <Table size="sm" variant="striped">
        <Thead>
          <Tr>
            <Th>Hero</Th>
            {DISPLAY_BEST && <Th minWidth='4rem'>Recommended</Th>}
            <Th minWidth='3rem'>10</Th>
            <Th minWidth='3rem'>20</Th>
            <Th minWidth='3rem'>30</Th>
          </Tr>
        </Thead>
        <Tbody>
          {rows}
        </Tbody>
      </Table>
    </VStack>
  );
}

export default SignatureItemsDashboardTable;
