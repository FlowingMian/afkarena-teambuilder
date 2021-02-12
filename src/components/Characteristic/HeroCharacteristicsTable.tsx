import { WrapItem, Wrap} from "@chakra-ui/react";
import { Hero } from "../../model/heroes";
import { getHeroCharactericticsDistribution } from "../../model/stats";
import CharacteristicTable from "./CharacteristicTable";

type HeroCharacteristicsTableProps = {
  heroes: Array<Hero>;
};

function HeroCharacteristicsTable({ heroes }: HeroCharacteristicsTableProps) {

  const heroCharacteristics = getHeroCharactericticsDistribution(heroes);

  return (
    <Wrap direction='row'>
      <WrapItem flexGrow={1}>
        <CharacteristicTable characterictics={heroCharacteristics.factions} />
      </WrapItem>

      <WrapItem flexGrow={1}>
        <CharacteristicTable characterictics={heroCharacteristics.classes} />
      </WrapItem>

      <WrapItem flexGrow={1}>
        <CharacteristicTable characterictics={heroCharacteristics.attributes} />
      </WrapItem>
    </Wrap>
  );
}

export default HeroCharacteristicsTable;
