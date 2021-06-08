import React from 'react';
import { Tr, Td, Text, useBreakpointValue, HStack } from '@chakra-ui/react';
import HeroBox from '../Hero/HeroBox';
import CharactericticBox from '../Characteristic/CharacteristicBox';
import { SignatureItemsGuideHero } from '../../model/signatureItems';
import { Hero } from '../../model/heroes';

type SignatureItemsDashboardTableRowProps = {
  hero: Hero;
  signatureResultRow: SignatureItemsGuideHero;
  displayBest:boolean;
};


function SignatureItemsDashboardTableRow({ hero, signatureResultRow, displayBest }: SignatureItemsDashboardTableRowProps):JSX.Element {

  const bestSignatures = <CharactericticBox characterictic={hero.signature}/>;
  const signatureItemRating10 = <CharactericticBox characterictic={signatureResultRow._10}/>;
  const signatureItemRating20 = <CharactericticBox characterictic={signatureResultRow._10}/>;
  const signatureItemRating30 = <CharactericticBox characterictic={signatureResultRow._10}/>;


  return <Tr key={hero.id}>
    <Td><HStack>
      <HeroBox hero={hero} />
      <CharactericticBox characterictic={hero.class} />
      <Text fontSize='xs'>{hero.name}</Text>
    </HStack></Td>
    {displayBest && <Td>{bestSignatures}</Td>}
    <Td>{signatureItemRating10}</Td>
    <Td>{signatureItemRating20}</Td>
    <Td>{signatureItemRating30}</Td>
  </Tr>;

}

export default SignatureItemsDashboardTableRow;
