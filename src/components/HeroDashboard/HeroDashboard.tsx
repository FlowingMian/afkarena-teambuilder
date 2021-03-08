import React from 'react';
import { Stack, StackDirection, useBreakpointValue, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import heroes from '../../data/heroes';
import { Hero } from '../../model/heroes';
import { BoxResultsStyle, BoxControlsStyle } from '../../theme/styles';
import HeroCharactericticsSelector, { HeroCharactericticsSelection } from '../Characteristic/HeroCharactericticsSelector';
import HeroCharactericticsTable from '../Characteristic/HeroCharactericticsTable';
import HeroDetailList from '../Hero/HeroDetailList';
import { setPageTitle } from '../utils';


function HeroDashboard():JSX.Element {
  const stackDirection:StackDirection|undefined = useBreakpointValue({ base: 'column', lg: 'row' });

  const [selectedHeroes, setSelectedHeroes] = useState<Array<Hero>>(heroes);
  
  function filterHeroes(filters:HeroCharactericticsSelection) {
    setSelectedHeroes(heroes.filter(h => filters.accept(h)));
  }
  
  useEffect(() => {
    setPageTitle('Heroes');
  }, []);

  return (<>
    <VStack {...BoxControlsStyle} alignItems='stretch'>
      <HeroCharactericticsSelector onChange={filterHeroes}/>
    </VStack>
    <Stack direction={stackDirection} alignItems='start' {...BoxResultsStyle} >
      <HeroCharactericticsTable heroes={selectedHeroes} />
      <HeroDetailList heroes={selectedHeroes} />
    </Stack>
  </>);
}

export default HeroDashboard;
