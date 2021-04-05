import React from 'react';
import { Hero } from '../../model/heroes';
import { Heading, HStack, VStack } from '@chakra-ui/react';
import HeroList from './HeroList';
import { State } from '../../model/common';

type HeroCategoryProps = {
  name?: string;
  heroes: Array<Hero>;
  heroStates?: Map<string, State>;
  tags?: React.ReactNode | Array<React.ReactNode>; 
  adornment?: React.ReactNode; 
  onClick?:(e:React.MouseEvent, hero:Hero) => void;
  colorScheme?: string
};

const backgroundAlpha = '33';

function HeroCategory({ name, heroes, heroStates, tags, adornment, onClick, colorScheme }: HeroCategoryProps):JSX.Element {
  const flexStyle = colorScheme ? {
    border: '1px solid '+colorScheme,
    backgroundColor : colorScheme + backgroundAlpha,
    borderRadius: 'sm',
  } : null;

  return (
    <HStack width="100%" padding={1} {...flexStyle}>
      <VStack alignItems='start' width='9rem' flexShrink={0} spacing={0}>
        <HStack width='100%' justifyContent="space-between">
          {name && <Heading size="xs">{name}</Heading>}
          {adornment}
        </HStack>
        {tags}
      </VStack>
      <HeroList heroes={heroes} heroStates={heroStates} onClick={onClick}/>
    </HStack>
  );
}

export default HeroCategory;
