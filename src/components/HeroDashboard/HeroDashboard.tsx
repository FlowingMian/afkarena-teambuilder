import React, { useContext } from 'react';
import { Box, HStack, Stack, Wrap, WrapItem } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import heroes from '../../data/heroes';
import { Hero } from '../../model/heroes';
import HeroFiltersSelector from '../HeroFilters/HeroFiltersSelector';
import HeroCharactericticsTable from '../Characteristic/HeroCharactericticsTable';
import HeroDashboardHelp from './HeroDashboardHelp';
import { setPageTitle } from '../utils';
import HeroDetails from '../Hero/HeroDetails';
import { Profile } from '../../model/profile';
import { ProfileContext } from '../Profile/ProfileContext';
import { HeroFilters, acceptHero } from '../HeroFilters/HeroFilters';
import Loader from '../Common/Loader';
import { useLocation } from 'react-router';
import ControlBar from '../Common/ControlBar';
import getDeviceStyle from '../../theme/deviceStyle/deviceStyle';
import SaveButton from '../Common/SaveButton';

type HeroDashboardProps = {
  profile: Profile;
};

function HeroDashboard({profile}:HeroDashboardProps):JSX.Element {

  const deviceStyle = getDeviceStyle();
  
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

  return (<HStack {...deviceStyle.viewport}>
    <ControlBar deviceStyle={deviceStyle}>
      <HeroDashboardHelp deviceStyle={deviceStyle}/>
      <SaveButton deviceStyle={deviceStyle} onSave={onSave} disabled={!hasChanged}/>
      <HeroFiltersSelector onChange={filterHeroes}/>
    </ControlBar>
    <Box {...deviceStyle.dashboard.viewport}>
      <Stack {...deviceStyle.dashboard.results} >
        <HeroCharactericticsTable heroes={selectedHeroes} />
        <Wrap spacing={2}>
          {heroesList}
        </Wrap>
      </Stack>
    </Box>
  </HStack>);
}

export default HeroDashboard;
