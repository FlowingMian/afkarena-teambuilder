import { Hero } from "../data/heroes/model";
import HeroBox from "./HeroBox";

type HeroesListProps = {
  heroes: Array<Hero>;
};

function HeroesList({ heroes }: HeroesListProps) {
  const heroesList = heroes.map((h) => <HeroBox key={h.name} hero={h} />);

  return <div className="HeroesList">{heroesList}</div>;
}

export default HeroesList;
