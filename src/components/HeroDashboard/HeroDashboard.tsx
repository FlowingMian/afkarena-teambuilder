import React, { useContext } from 'react';
import { Button, Stack, StackDirection, useBreakpointValue, VStack, Wrap, WrapItem } from '@chakra-ui/react';
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

function HeroDashboard():JSX.Element {
  const stackDirection:StackDirection|undefined = useBreakpointValue({ base: 'column', lg: 'row' });

  const {profile, setProfile} = useContext(ProfileContext);
  
  const [selectedHeroes, setSelectedHeroes] = useState<Array<Hero>>(heroes);
  const [heroCollection, setHeroCollection] = useState<Array<string>>(profile?.heroCollection||[]);
  const [hasChanged, setHasChanged] = useState<boolean>(false);

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
    setProfile({
      ...profile,
      heroCollection
    } as Profile);
    setHasChanged(false);
  }

  useEffect(() => {
    setPageTitle('Heroes');
  }, []);

  const heroesList = selectedHeroes.map((h) => {
    return <WrapItem key={h.id}><HeroDetails hero={h} isOwned={heroCollection.includes(h.id)} onChange={onChange}/></WrapItem>;
  });

  return (<>
    <VStack {...BoxControlsStyle} alignItems='stretch'>
      <HeroFiltersSelector onChange={filterHeroes}/>
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
