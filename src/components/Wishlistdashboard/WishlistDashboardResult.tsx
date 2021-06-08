import React from 'react';
import { HStack, VStack } from '@chakra-ui/react';
import { HeroFilters, acceptHero } from '../HeroFilters/HeroFilters';
import { Profile } from '../../model/profile';
import { Hero } from '../../model/heroes';
import { Faction } from '../../model/characteristics/characteristics';
import HeroCategory from '../Hero/HeroCategory';
import CharactericticBox from '../Characteristic/CharacteristicBox';
import HeroBox from '../Hero/HeroBox';

type WishlistDashboardResultProps = {
  profile:Profile;
  wishlistResult: Map<Faction, Array<Array<Hero>>>;
  filters?:HeroFilters;
};

function WishlistDashboardResult({ profile, wishlistResult, filters }: WishlistDashboardResultProps):JSX.Element {

  const rows = Array.from(wishlistResult.entries())
    .map(([faction, heroes]) => {

      const heroesElements = heroes
        .map((rankHeroes, index) => {
          const heroBoxes = rankHeroes.map(h => <HeroBox key={h.id} hero={h}/>);
          return <VStack key={'rank_'+index}>
            {heroBoxes}
          </VStack>;});

      return (
        <HStack key={faction.id + '_' + faction.name} width="100%" padding={1}>
          <VStack alignItems='start' width='9rem' flexShrink={0} spacing={0}>
            <CharactericticBox characterictic={faction} displayName={true}/>
          </VStack>
          {heroesElements}
        </HStack>
      );}
    );

  return (
    <VStack alignItems='start'>
      {rows}
    </VStack>
  );
}

export default WishlistDashboardResult;
