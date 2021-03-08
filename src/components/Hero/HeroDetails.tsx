import React from 'react';
import {HStack, Image, Tooltip, Link, VStack } from '@chakra-ui/react';
import { Hero } from '../../model/heroes';
import CharactericticBox from '../Characteristic/CharacteristicBox';

type HeroDetailsProps = {
  hero: Hero;
};

const SIZE_SM = '2.5rem';
const SIZE = '3rem';

function HeroDetails({ hero }: HeroDetailsProps):JSX.Element {

  const detailsStyle= {
    width: '7.8rem',
    border: '1px solid gray',
    paddingTop: '0.15rem',
  };

  return (
    <HStack minWidth={[SIZE_SM, SIZE]} height={[SIZE_SM, SIZE]}
      spacing={0} alignItems='stretch'>
      <Tooltip label={hero.name} aria-label={hero.name}>
        <Image 
          src={hero.portraitURL}
          alt={hero.name}
          boxSize={[SIZE_SM, SIZE]}
        />
      </Tooltip>
      <VStack {...detailsStyle} spacing={0} justifyContent="center">
        <HStack>
          <CharactericticBox characterictic={hero.faction}/>
          <CharactericticBox characterictic={hero.class}/>
          <CharactericticBox characterictic={hero.attribute}/>
        </HStack>
        <Link href={`/compositions?query=${hero.name}`} fontSize="xs">View compositions</Link>
      </VStack>
    </HStack>
  );
}

export default HeroDetails;
