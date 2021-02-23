import { Hero } from "../../model/heroes";
import { Heading, HStack, VStack } from "@chakra-ui/react";
import HeroList from "./HeroList";

type HeroCategoryProps = {
  name: string;
  tags?: React.ReactNode | Array<React.ReactNode>; 
  adornment?: React.ReactNode; 
  heroes: Array<Hero>;
  colorScheme?: string
};

const backgroundAlpha:string = '33';

function HeroCategory({ name, tags, adornment, heroes, colorScheme }: HeroCategoryProps) {
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
        <HeroList heroes={heroes}/>
    </HStack>
  );
}

export default HeroCategory;
