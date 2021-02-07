import { Hero } from "../../../model/heroes";
import HeroBox from "../HeroBox/HeroBox";
import './HeroList.css'

type HeroListProps = {
  heroes: Array<Hero>;
};

function HeroList({ heroes }: HeroListProps) {
  const heroesList = heroes.map((h) => <HeroBox key={h.id} hero={h} />);

  return <div className="HeroList">{heroesList}</div>;
}

export default HeroList;
