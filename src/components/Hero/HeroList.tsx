import { Wrap, WrapItem } from "@chakra-ui/react"
import { State } from "../../model/common";
import { Hero } from "../../model/heroes";
import HeroBox from "./HeroBox";

type HeroListProps = {
  heroes: Array<Hero>;
  heroStates?: Map<string, State>;
  onClick?:(hero:Hero) => void;
};

function HeroList({ heroes, heroStates, onClick }: HeroListProps) {
  const heroesList = heroes.map((h) => <WrapItem key={h.id}><HeroBox hero={h} state={heroStates?.get(h.id)} onClick={onClick}/></WrapItem>);

  return (
    <Wrap flexDirection="row" flexWrap="wrap" spacing={1}>
      {heroesList}
    </Wrap>
  );
}

export default HeroList;
