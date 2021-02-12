import { Hero } from "../../model/heroes";
import { Flex, Heading } from "@chakra-ui/react";
import HeroList from "./HeroList";
import HeroCharacteristicsPopover from "../Characteristic/HeroCharacteristicsPopover";

type HeroCategoryProps = {
  name: string;
  heroes: Array<Hero>;
  charactericticsDistribution?: boolean
  colorScheme?: string
};

const backgroundAlpha:string = '33';

function HeroCategory({ name, heroes, charactericticsDistribution = true, colorScheme }: HeroCategoryProps) {
  const flexStyle = colorScheme ? {
    border: '1px solid '+colorScheme,
    padding: 1,
    backgroundColor : colorScheme + backgroundAlpha,
    borderRadius: 'sm',
  } : null;

  return <Flex flexDirection="row" alignItems="center" 
    minWidth="296px" width='100%' 
    {...flexStyle}
    >
      <Heading size="xs" minWidth="8rem">
        {name}
      </Heading>
      {charactericticsDistribution && <HeroCharacteristicsPopover heroes={heroes}/>}
      <HeroList heroes={heroes}/>
    </Flex>;
}

export default HeroCategory;
