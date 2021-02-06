import { Hero } from "../data/heroes/model";
import "./HeroBox.css";

type HeroBoxProps = {
  hero: Hero;
};

function HeroBox({ hero }: HeroBoxProps) {
  return (
    <div className="Portrait">
      <img src={`../data/heroes/portraits/${hero.name}.webp`} alt={hero.name} />
    </div>
  );
}

export default HeroBox;
