import React from 'react';
import { Tr, Td, Text, useBreakpointValue, HStack } from '@chakra-ui/react';
import HeroBox from '../Hero/HeroBox';
import CharactericticBox from '../Characteristic/CharacteristicBox';
import { ArtifactGuideHero } from '../../model/artifacts';
import { Hero } from '../../model/heroes';

type ArtifactDashboardTableRowProps = {
  hero: Hero;
  artifactResultRow: ArtifactGuideHero;
  displayBest:boolean;
};

const ARTIFACT_SIZE_SM = '2.5rem';
const ARTIFACT_SIZE = '3rem';

function ArtifactDashboardTableRow({ hero, artifactResultRow, displayBest }: ArtifactDashboardTableRowProps):JSX.Element {

  const artifactIconSize:string|undefined = useBreakpointValue({ base: ARTIFACT_SIZE_SM, lg: ARTIFACT_SIZE });
  console.log('artifactIconSize', artifactIconSize);
  
  const bestArtifacts = hero.artifacts && hero.artifacts.map(a => (
    <CharactericticBox key={a.id} characterictic={a} size={artifactIconSize}/>
  ));
  const rank1Artifacts = artifactResultRow.rank1.map(a => (
    <CharactericticBox key={a.id} characterictic={a} size={artifactIconSize}/>
  ));
  const rank2Artifacts = artifactResultRow.rank2.map(a => (
    <CharactericticBox key={a.id} characterictic={a} size={artifactIconSize}/>
  ));
  const rank3Artifacts = artifactResultRow.rank3.map(a => (
    <CharactericticBox key={a.id} characterictic={a} size={artifactIconSize}/>
  ));

  return <Tr key={hero.id}>
    <Td><HStack>
      <HeroBox hero={hero} />
      <CharactericticBox characterictic={hero.class} />
      <Text fontSize='xs'>{hero.name}</Text>
    </HStack></Td>
    {displayBest && <Td>{bestArtifacts}</Td>}
    <Td>{rank1Artifacts}</Td>
    <Td>{rank2Artifacts}</Td>
    <Td>{rank3Artifacts}</Td>
  </Tr>;

}

export default ArtifactDashboardTableRow;
