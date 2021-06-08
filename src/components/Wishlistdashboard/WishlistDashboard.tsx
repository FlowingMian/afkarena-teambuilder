import React from 'react';
import { Box, FormControl, Heading, HStack, Radio, RadioGroup, Switch, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import WishlistDashboardHelp from './WishlistDashboardHelp';
import { setPageTitle } from '../utils';
import { Profile } from '../../model/profile';
import Loader from '../Common/Loader';
import LinkPopover from '../Common/LinkPopover';
import { useLocation } from 'react-router';
import WishlistDashboardTable from './WishlistDashboardResult';
import guides from '../../data/wishlist';
import { Hero } from '../../model/heroes';
import ControlBar from '../Common/ControlBar';
import getDeviceStyle from '../../theme/deviceStyle/deviceStyle';
import { defaultFilter, HeroFilters } from '../HeroFilters/HeroFilters';
import { Faction } from '../../model/characteristics/characteristics';
import lightbearers from '../../data/heroes/lightbearers';
import maulers from '../../data/heroes/maulers';
import wilders from '../../data/heroes/wilders';
import graveborns from '../../data/heroes/graveborns';
import { WishlistGuide } from '../../model/wishlist';
import { Graveborn, Lightbearer, Mauler, Wilder } from '../../model/characteristics/factions';

type WishlistDashboardProps = {
  profile: Profile;
};

const STRATEGY_MERGE = 'MERGE';
const STRATEGY_COMPARE = 'COMPARE';

function WishlistDashboard({profile}:WishlistDashboardProps):JSX.Element {

  const deviceStyle = getDeviceStyle();

  const defaultSelection = guides.map(g => g.id);
  const [selection, setSelection] = useState<Array<string>>(defaultSelection);
  const [strategy, setStrategy] = useState<string>(STRATEGY_MERGE);
  const [wishlistResult, setWishlistResult] = useState<Map<Faction, Array<Array<Hero>>>>(new Map());
  const [filters, setFilters] = useState<HeroFilters>(defaultFilter);

  const [rendering, setRendering] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    setRendering(true);
  }, [pathname]);
  useEffect(() => {
    setPageTitle('Wishlist');
    calculateWishlist(defaultSelection, strategy);
    setTimeout(() => {setRendering(false);}, 1);
  }, []);

  if (rendering) {
    return <Loader/>;
  }

  function getMergeResult(selectedGuides:Array<WishlistGuide>):Map<Faction, Array<Array<Hero>>> {
    return new Map<Faction, Array<Array<Hero>>>(
      [lightbearers, maulers, wilders, graveborns]
        .map(factionHeroes => {
          // Build heroes ranking
          const faction = factionHeroes[0].faction;
          const heroesRanking:Array<Hero> = [];

          selectedGuides
            .map(g => g.wishlist.get(faction))
            .forEach(heroes => {
              if (heroes) {
                mergeScore(heroesRanking, heroes);
              }
            });

          // Sort by score and create result
          const ranking = Array.from(getMapByScore(heroesRanking).entries())
            .sort(([score1,], [score2,]) => score2 - score1)
            .map(([, heroes]) => heroes);
            
          return [faction, ranking];
        })
    );
  }

  function mergeScore(heroScores:Array<Hero>, heroesList:Array<Array<Hero>>) {
    heroesList.reduce((res, heroes, index) => {
      heroes.reduce((res, h) => {
        const found = heroScores.find(ar => ar.id === h.id);
        if (found && found.score) {
          found.score += (10-index);
        }
        else {
          heroScores.push({...h, score: 10-index});
        }
        return heroScores;
      }, heroScores);
      
      return heroScores;
    }, heroScores);
  } 

  function getMapByScore(ranking: Array<Hero>): Map<number, Array<Hero>> {
    return ranking.reduce(function (map, hero) {
      if (hero.score) {
        const heroes = map.get(hero.score) || [];
        map.set(hero.score, heroes.concat(hero));
      }
      return map;
    }, new Map<number, Array<Hero>>());
  }

  function compare(heroesComparison:Array<Array<Hero>>, heroesList:Array<Array<Hero>>) {
    heroesList.reduce((res, heroes, index) => {
      const rank = heroesComparison[index];
      if (rank) {
        rank.push(...heroes);
      }
      else {
        heroesComparison[index] = [...heroes];
      }
      return heroesComparison;
    }, heroesComparison);
  } 

  function getCompareResult(selectedGuides:Array<WishlistGuide>):Map<Faction, Array<Array<Hero>>> {
    return new Map<Faction, Array<Array<Hero>>>(
      [Lightbearer, Mauler, Wilder, Graveborn]
        .flatMap(faction => selectedGuides
          .map(g => {
            const heroes = g.wishlist.get(faction);
            return [{...faction, name:g.author}, heroes] as [Faction, Array<Array<Hero>>];
          })
        )
    );
  }

  function calculateWishlist(selectedGuideIds:Array<string>, strategy:string) {
    setWishlistResult(new Map());
    setTimeout(() => {
      const selectedGuides = guides
        .filter(g => selectedGuideIds.includes(g.id));

      const result = strategy === STRATEGY_MERGE ? getMergeResult(selectedGuides) : getCompareResult(selectedGuides);
      
      setWishlistResult(result);
    }, 1);
  }

  function onSelectionChange(e:React.ChangeEvent<HTMLInputElement>) {
    let newSelection:Array<string>;
    if (e.target.checked) {
      newSelection = [...selection, e.target.value];
    }
    else {
      newSelection = selection.filter(id => id !== e.target.value);
    }
    setSelection(newSelection);
    calculateWishlist(newSelection, strategy);
  }

  function onStrategyChange(newStrategy:string) {
    setStrategy(newStrategy as string);
    calculateWishlist(selection, newStrategy);
  }

  const guideSwitchs = guides.map(g => {
    return (
      <FormControl key={g.id} display="flex" alignItems="center"> 
        <Switch value={g.id} isChecked={selection.includes(g.id)} mr="5px" onChange={onSelectionChange}/>
        <Text fontSize='xs' mr='0.5rem' >{g.name} by {g.author} ({g.updateDate})</Text>
        <LinkPopover links={g.links}/>
      </FormControl>
    );
  });

  return (<HStack {...deviceStyle.viewport}>
    <ControlBar deviceStyle={deviceStyle}>
      <WishlistDashboardHelp deviceStyle={deviceStyle}/>
    </ControlBar>
    <Box {...deviceStyle.dashboard.viewport}>
      <Box {...deviceStyle.dashboard.controls}>
        <Heading size='xs'>Wishlist guides : </Heading>
        {guideSwitchs}
        <RadioGroup onChange={onStrategyChange} value={strategy}>
          <HStack>
            <Heading size='xs'>Strategy : </Heading>
            <Radio value={STRATEGY_MERGE}><Text fontSize='sm'>Merge</Text></Radio>
            <Radio value={STRATEGY_COMPARE}><Text fontSize='sm'>Compare</Text></Radio>
          </HStack>
        </RadioGroup>
      </Box>
      <Box {...deviceStyle.dashboard.results}>
        {wishlistResult.size > 0 ? <WishlistDashboardTable profile={profile} wishlistResult={wishlistResult} filters={filters}/> : <Loader/>}
      </Box>
    </Box>
  </HStack>);
}

export default WishlistDashboard;
