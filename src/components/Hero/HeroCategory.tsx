import { Hero } from "../../model/heroes";
import { Flex, Heading } from "rebass";
import HeroList from "./HeroList";

type HeroCategoryProps = {
  name: string;
  icon?:string
  heroes: Array<Hero>;
};

function HeroCategory({ name, heroes }: HeroCategoryProps) {
  return <Flex flexDirection="row">
      <Heading 
        fontSize={1}
        width={120}
      >
        {name}
      </Heading>
      <HeroList heroes={heroes}/>
    </Flex>;
}

export default HeroCategory;
