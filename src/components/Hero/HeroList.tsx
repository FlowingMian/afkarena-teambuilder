import { Wrap, WrapItem } from "@chakra-ui/react"
import { Hero } from "../../model/heroes";
import HeroBox from "./HeroBox";

type HeroListProps = {
  heroes: Array<Hero>;
};

function HeroList({ heroes }: HeroListProps) {
  const heroesList = heroes.map((h) => <WrapItem key={h.id}><HeroBox hero={h}/></WrapItem>);

  return (
    <Wrap flexDirection="row" flexWrap="wrap" spacing={1}>
      {heroesList}
    </Wrap>
  );
}

export default HeroList;
