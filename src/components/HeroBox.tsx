import { Hero } from "../data/heroes/model";
type HeroBoxProps = {
  hero: Hero;
}


function HeroBox({hero}:HeroBoxProps) {
    return (
      <div>
        {hero.name} {hero.faction}
      </div>
    );
  }
  
  export default HeroBox;