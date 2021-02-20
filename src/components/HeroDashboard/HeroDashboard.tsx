import { VStack } from '@chakra-ui/react';
import { useState } from 'react';
import heroes from '../../data/heroes';
import { Hero } from '../../model/heroes';
import { BoxResultsStyle, BoxControlsStyle } from '../../theme/styles';
import HeroCharactericticsSelector, { HeroCharactericticsSelection } from '../Characteristic/HeroCharactericticsSelector';
import HeroCharactericticsTable from '../Characteristic/HeroCharactericticsTable';
import HeroList from '../Hero/HeroList';


function HeroDashboard() {

  const [selectedHeroes, setSelectedHeroes] = useState<Array<Hero>>(heroes);
  
  function filterHeroes(filters:HeroCharactericticsSelection) {
    setSelectedHeroes(heroes.filter(h => filters.accept(h)));
  }
  
  return (<>
    <VStack {...BoxControlsStyle} alignItems='stretch'>
      <HeroCharactericticsSelector onChange={filterHeroes}/>
    </VStack>
    <VStack {...BoxResultsStyle} alignItems='stretch'>
      <HeroCharactericticsTable heroes={selectedHeroes} />
      <HeroList heroes={selectedHeroes} />
    </VStack>
  </>);
}

export default HeroDashboard;
