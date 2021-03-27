import React from 'react';
import {HStack, Image, Tooltip, Link, Switch } from '@chakra-ui/react';
import { Hero } from '../../model/heroes';
import CharactericticBox from '../Characteristic/CharacteristicBox';

type HeroDetailsProps = {
  hero: Hero;
  isOwned: boolean
  onChange:(e:React.ChangeEvent<HTMLInputElement>, hero:Hero) => void;
};

const SIZE_SM = '2.5rem';
const SIZE = '3rem';

function HeroDetails({ hero, isOwned, onChange }: HeroDetailsProps):JSX.Element {

  const detailsStyle= {
    border: '1px solid gray',
    paddingX: '0.5rem'
  };

  return (
    <HStack height={[SIZE_SM, SIZE]}
      alignItems='center'
      {...detailsStyle}
      backgroundColor={isOwned ? 'green.100' : 'red.100'}>
      <Switch value={hero.id} isChecked={isOwned} mr="5px" onChange={(e) => onChange(e, hero)}/>

      <Tooltip label={hero.name} aria-label={hero.name}>
        <Image 
          src={hero.portraitURL}
          alt={hero.name}
          boxSize={[SIZE_SM, SIZE]}
        />
      </Tooltip>

      <HStack>
        <CharactericticBox characterictic={hero.faction}/>
        <CharactericticBox characterictic={hero.class}/>
        <CharactericticBox characterictic={hero.attribute}/>
      </HStack>

      <Link href={`/compositions?query=${hero.name}`} fontSize="sm">View compositions</Link>
    </HStack>
  );
}

export default HeroDetails;
