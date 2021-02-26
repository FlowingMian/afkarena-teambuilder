import { Hero } from "../../model/heroes";
import { Heading, HStack, VStack } from "@chakra-ui/react";
import HeroList from "./HeroList";
import { State } from "../../model/common";

type HeroCategoryProps = {
  name: string;
  heroes: Array<Hero>;
  heroStates?: Map<string, State>;
  tags?: React.ReactNode | Array<React.ReactNode>; 
  adornment?: React.ReactNode; 
  onClick?:(hero:Hero) => void;
  colorScheme?: string
};

const backgroundAlpha:string = '33';

function HeroCategory({ name, heroes, heroStates, tags, adornment, onClick, colorScheme }: HeroCategoryProps) {
  const flexStyle = colorScheme ? {
    border: '1px solid '+colorScheme,
    backgroundColor : colorScheme + backgroundAlpha,
    borderRadius: 'sm',
  } : null;

  return (
    <HStack width="100%" padding={1} {...flexStyle}>
        <VStack alignItems='start' spacing={0}>
          <Heading size="xs" minWidth="7rem">{name}</Heading>
          {tags}
        </VStack>
        {adornment}
        <HeroList heroes={heroes} heroStates={heroStates} onClick={onClick}/>
    </HStack>
  );
}

export default HeroCategory;
