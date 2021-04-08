import React from 'react';
import { Tr, Td } from '@chakra-ui/react';
import HeroBox from '../Hero/HeroBox';
import CharactericticBox from '../Characteristic/CharacteristicBox';
import { ArtifactGuideHero } from '../../model/artifacts';
import { Hero } from '../../model/heroes';

type ArtifactDashboardTableRowProps = {
  hero: Hero;
  artifactResultRow: ArtifactGuideHero;
  displayBest:boolean;
};

const ARTIFACT_SIZE = '3rem';

function ArtifactDashboardTableRow({ hero, artifactResultRow, displayBest }: ArtifactDashboardTableRowProps):JSX.Element {

  const bestArtifacts = hero.artifacts && hero.artifacts.map(a => (
    <CharactericticBox key={a.id} characterictic={a} size={ARTIFACT_SIZE}/>
  ));
  const rank1Artifacts = artifactResultRow.rank1.map(a => (
    <CharactericticBox key={a.id} characterictic={a} size={ARTIFACT_SIZE}/>
  ));
  const rank2Artifacts = artifactResultRow.rank2.map(a => (
    <CharactericticBox key={a.id} characterictic={a} size={ARTIFACT_SIZE}/>
  ));
  const rank3Artifacts = artifactResultRow.rank3.map(a => (
    <CharactericticBox key={a.id} characterictic={a} size={ARTIFACT_SIZE}/>
  ));

  return <Tr key={hero.id}>
    <Td><HeroBox hero={hero} /></Td>
    <Td><CharactericticBox characterictic={hero.class} /></Td>
    {displayBest && <Td>{bestArtifacts}</Td>}
    <Td>{rank1Artifacts}</Td>
    <Td>{rank2Artifacts}</Td>
    <Td>{rank3Artifacts}</Td>
  </Tr>;

}

export default ArtifactDashboardTableRow;
