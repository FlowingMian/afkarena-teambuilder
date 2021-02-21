import { Hero } from "../../model/heroes";
import { Heading, HStack } from "@chakra-ui/react";
import HeroList from "./HeroList";

type HeroCategoryProps = {
  name: string;
  tags?: React.ReactNode | Array<React.ReactNode>; 
  heroes: Array<Hero>;
  colorScheme?: string
};

const backgroundAlpha:string = '33';

function HeroCategory({ name, tags, heroes, colorScheme }: HeroCategoryProps) {
  const flexStyle = colorScheme ? {
    border: '1px solid '+colorScheme,
    padding: 1,
    backgroundColor : colorScheme + backgroundAlpha,
    borderRadius: 'sm',
  } : null;

  return <HStack minWidth="296px" width="100%" {...flexStyle}>
        <Heading size="xs" minWidth="7rem">{name}</Heading>
        {tags}
      <HeroList heroes={heroes}/>
    </HStack>;
}

export default HeroCategory;
