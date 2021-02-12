import { Hero } from "../../model/heroes";
import { Flex, Heading } from "@chakra-ui/react";
import HeroList from "./HeroList";
import CharactericticsDistribution from "../Characteristic/CharacteristicDistribution";

type HeroCategoryProps = {
  name: string;
  heroes: Array<Hero>;
  charactericticsDistribution?: boolean
};

function HeroCategory({ name, heroes, charactericticsDistribution = true }: HeroCategoryProps) {
  return <Flex flexDirection="row" alignItems="center">
      <Heading size="xs" minWidth="120px">
        {name}
      </Heading>
      {charactericticsDistribution && <CharactericticsDistribution  heroes={heroes}/>}
      <HeroList heroes={heroes}/>
    </Flex>;
}

export default HeroCategory;
