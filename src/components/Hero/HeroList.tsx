import React from 'react';
import { Wrap, WrapItem } from '@chakra-ui/react';
import { State } from '../../model/common';
import { HeroRequirement } from '../../model/compositions';
import { Hero } from '../../model/heroes';
import HeroBox from './HeroBox';

type HeroListProps = {
  heroes: Array<Hero | HeroRequirement>;
  heroStates?: Map<string, State>;
  onClick?:(e:React.MouseEvent, hero:Hero | HeroRequirement) => void;
};

function HeroList({ heroes, heroStates, onClick }: HeroListProps):JSX.Element {
  const heroesList = heroes.map((h) => <WrapItem key={h.id}><HeroBox hero={h} state={heroStates?.get(h.id)} onClick={onClick}/></WrapItem>);

  return (
    <Wrap flexDirection="row" flexWrap="wrap" spacing={1}>
      {heroesList}
    </Wrap>
  );
}

export default HeroList;
