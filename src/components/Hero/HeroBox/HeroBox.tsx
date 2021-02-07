import { Hero } from "../../../model/heroes";
import "./HeroBox.css";

type HeroBoxProps = {
  hero: Hero;
};

function HeroBox({ hero }: HeroBoxProps) {
  return (
    <div className="Portrait">
      <img src={hero.portraitURL} alt={hero.name} />
    </div>
  );
}

export default HeroBox;
