import { Stack, StackDirection, useBreakpointValue, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import heroes from '../../data/heroes';
import { Hero } from '../../model/heroes';
import { BoxResultsStyle, BoxControlsStyle } from '../../theme/styles';
import HeroCharactericticsSelector, { HeroCharactericticsSelection } from '../Characteristic/HeroCharactericticsSelector';
import HeroCharactericticsTable from '../Characteristic/HeroCharactericticsTable';
import HeroList from '../Hero/HeroList';


function HeroDashboard() {
  const stackDirection:StackDirection|undefined = useBreakpointValue({ base: 'column', lg: 'row' })

  const [selectedHeroes, setSelectedHeroes] = useState<Array<Hero>>(heroes);
  
  function filterHeroes(filters:HeroCharactericticsSelection) {
    setSelectedHeroes(heroes.filter(h => filters.accept(h)));
  }
  
  return (<>
    <VStack {...BoxControlsStyle} alignItems='stretch'>
      <HeroCharactericticsSelector onChange={filterHeroes}/>
    </VStack>
    <Stack direction={stackDirection} alignItems='stretch' {...BoxResultsStyle} >
      <HeroCharactericticsTable heroes={selectedHeroes} />
      <HeroList heroes={selectedHeroes} />
    </Stack>
  </>);
}

export default HeroDashboard;
