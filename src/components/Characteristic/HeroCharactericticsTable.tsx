
import { HStack } from '@chakra-ui/react'
import { Hero } from '../../model/heroes';

import { getHeroCharactericticsDistribution } from '../../model/stats';
import CharacteristicTable from './CharacteristicTable';

type HeroCharactericticsTableProps = {
  heroes: Array<Hero>;
};

function HeroCharactericticsTable({heroes} : HeroCharactericticsTableProps) {

  const heroCharacteristics = getHeroCharactericticsDistribution(heroes);

  return <HStack alignItems='start' width='100%' justifyContent='space-between'>
    <CharacteristicTable characterictics={heroCharacteristics.factions} displayName={false}/>
    <CharacteristicTable characterictics={heroCharacteristics.classes} displayName={false} />
    <CharacteristicTable characterictics={heroCharacteristics.attributes} displayName={false} />
  </HStack>
}

export default HeroCharactericticsTable;
