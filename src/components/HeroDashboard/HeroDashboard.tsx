import React, { useContext } from 'react';
import { Button, Heading, Stack, StackDirection, Text, useBreakpointValue, VStack, Wrap, WrapItem, Link } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import heroes from '../../data/heroes';
import { Hero } from '../../model/heroes';
import { BoxResultsStyle, BoxControlsStyle } from '../../theme/styles';
import HeroFiltersSelector from '../Characteristic/HeroFiltersSelector';
import HeroCharactericticsTable from '../Characteristic/HeroCharactericticsTable';
import { setPageTitle } from '../utils';
import HeroDetails from '../Hero/HeroDetails';
import { Profile } from '../../model/profile';
import { ProfileContext } from '../Profile/ProfileContext';
import { HeroFilters, acceptHero } from '../Characteristic/HeroFilters';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import Loader from '../Common/Loader';
import { useLocation } from 'react-router';

type HeroDashboardProps = {
  profile: Profile;
};

function HeroDashboard({profile}:HeroDashboardProps):JSX.Element {

  const stackDirection:StackDirection|undefined = useBreakpointValue({ base: 'column', lg: 'row' });
  const {updateProfile} = useContext(ProfileContext);
  
  const [selectedHeroes, setSelectedHeroes] = useState<Array<Hero>>(heroes);
  const [heroCollection, setHeroCollection] = useState<Array<string>>(profile.heroCollection||[]);
  const [hasChanged, setHasChanged] = useState<boolean>(false);

  const [rendering, setRendering] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    setRendering(true);
  }, [pathname]);
  useEffect(() => {
    setPageTitle('Heroes');
    setTimeout(() => {setRendering(false);}, 1);
  }, []);

  if (rendering) {
    return <Loader/>;
  }

  function filterHeroes(filters:HeroFilters) {
    setSelectedHeroes(heroes.filter(h => acceptHero(filters, profile, h)));
  }
  
  function onChange(e:React.ChangeEvent<HTMLInputElement>, hero:Hero) {
    let newHeroCollection:Array<string>;
    const currentHeroCollection = heroCollection;
    if (e.target.checked) {
      newHeroCollection = [...currentHeroCollection, hero.id];
    }
    else {
      newHeroCollection = currentHeroCollection.filter(id => id !== hero.id);
    }
    setHeroCollection(newHeroCollection);
    setHasChanged(true);
  }

  function onSave() {
    updateProfile({
      ...profile,
      heroCollection
    });
    setHasChanged(false);
  }

  

  const heroesList = selectedHeroes.map((h) => {
    return <WrapItem key={h.id}><HeroDetails hero={h} isOwned={heroCollection.includes(h.id)} onChange={onChange}/></WrapItem>;
  });

  return (<>
    <VStack {...BoxControlsStyle} alignItems='stretch'>

      <HeroFiltersSelector onChange={filterHeroes}/>

      <Heading size="sm">How are defined the Furniture items ratings?</Heading>
      <Text fontSize="sm"><span>The source and in-depth explanations for each one come from the </span>
        <Link 
          href="https://www.reddit.com/r/afkarena/comments/mc774q/visual_guide_to_furniture_priorities_indepth_by/"
          isExternal>
        Visual Guide to Furniture Priorities In-Depth by Arty & Alpattex (update : Mar 2021) <ExternalLinkIcon mx="2px" />
        </Link>
      </Text>

      <Heading size="sm">Why are Signature items ratings not available yet?</Heading>
      <Text fontSize="sm">Today, there is no up-to-date and easy to implement guide about Signature items and I do not have the legitimity to create my own</Text>

    </VStack>
    <Stack direction={stackDirection} alignItems='start' {...BoxResultsStyle} >
      <HeroCharactericticsTable heroes={selectedHeroes} />
      <VStack>
        <Button colorScheme='red' onClick={onSave} disabled={!hasChanged}>Save Hero Collection</Button>
        <Wrap flexDirection="row" flexWrap="wrap" spacing={1}>
          {heroesList}
        </Wrap>
        <Button colorScheme='red' onClick={onSave} disabled={!hasChanged}>Save Hero Collection</Button>
      </VStack>
    </Stack>
  </>);
}

export default HeroDashboard;
