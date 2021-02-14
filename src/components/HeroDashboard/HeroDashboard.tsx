import { Box, HStack, Spacer, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import heroes from '../../data/heroes';
import { Hero } from '../../model/heroes';
import { BoxResultsStyle, BoxCardStyle } from '../../theme/styles';
import HeroCharactericticsSelector, { HeroCharactericticsSelection } from '../Characteristic/HeroCharactericticsSelector';
import HeroCharactericticsTable from '../Characteristic/HeroCharactericticsTable';
import HeroList from '../Hero/HeroList';


function HeroDashboard() {

  const [selectedHeroes, setSelectedHeroes] = useState<Array<Hero>>(heroes);
  
  function filterHeroes(filters:HeroCharactericticsSelection) {
    setSelectedHeroes(heroes.filter(h => filters.accept(h)));
  }
  
  return (
    <Box {...BoxResultsStyle}>
      <HStack spacing="1rem" alignItems='start'>
        <VStack alignItems='start'>
          <HeroCharactericticsSelector onChange={filterHeroes}/>
          <Spacer/>
          <Box {...BoxCardStyle}>
            <HeroCharactericticsTable heroes={selectedHeroes} />
          </Box>
        </VStack>

        <HeroList heroes={selectedHeroes} />
      </HStack>
    </Box>
  );
}

export default HeroDashboard;
