import { Hero } from "../../model/heroes";
import { Box, Heading, HStack } from "@chakra-ui/react";
import HeroList from "./HeroList";
import HeroCharacteristicsPopover from "../Characteristic/HeroCharacteristicsPopover";

type HeroCategoryProps = {
  name: string;
  tags?: Array<React.ReactNode>; 
  heroes: Array<Hero>;
  charactericticsDistribution?: boolean
  colorScheme?: string
};

const backgroundAlpha:string = '33';

function HeroCategory({ name, tags, heroes, charactericticsDistribution = true, colorScheme }: HeroCategoryProps) {
  const flexStyle = colorScheme ? {
    border: '1px solid '+colorScheme,
    padding: 1,
    backgroundColor : colorScheme + backgroundAlpha,
    borderRadius: 'sm',
  } : null;

  return <HStack minWidth="296px" {...flexStyle}>
      <Box>
        <Heading size="xs" minWidth="8rem">{name}</Heading>
        {tags}
      </Box>
      {charactericticsDistribution && <HeroCharacteristicsPopover heroes={heroes}/>}
      <HeroList heroes={heroes}/>
    </HStack>;
}

export default HeroCategory;
