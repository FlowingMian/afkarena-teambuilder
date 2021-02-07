import { CompositionRole} from "../../../model/compositions";

import HeroBox from "../HeroBox/HeroBox";
import { Hero } from "../../../model/heroes";
import './HeroCategory.css'

type HeroCategoryProps = {
  name: string;
  icon?:string
  heroes: Array<Hero>;
};

function HeroCategory({ name, heroes }: HeroCategoryProps) {
  const heroBoxes = heroes.map(hero => <HeroBox key={hero.id} hero={hero} />);

  return <div className="HeroCategory">
    <div className="HeroCategoryName">{name}</div>
    {heroBoxes}
  </div>;
}

export default HeroCategory;
