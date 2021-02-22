
import { Center, HStack } from '@chakra-ui/react'
import { Hero } from '../../model/heroes';

import { getHeroCharactericticsDistribution } from '../../model/stats';
import CharacteristicTable from './CharacteristicTable';

type HeroCharactericticsTableProps = {
  heroes: Array<Hero>;
};

function HeroCharactericticsTable({heroes} : HeroCharactericticsTableProps) {

  const heroCharacteristics = getHeroCharactericticsDistribution(heroes);

  return <Center flexShrink={0}>
    <HStack alignItems='start' spacing="1.5rem">
      <CharacteristicTable characterictics={heroCharacteristics.factions}/>
      <CharacteristicTable characterictics={heroCharacteristics.classes}/>
      <CharacteristicTable characterictics={heroCharacteristics.attributes}/>
    </HStack>
  </Center>
}

export default HeroCharactericticsTable;
