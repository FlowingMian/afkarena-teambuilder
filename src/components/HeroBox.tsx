import { Hero } from "../data/heroes/model";
type HeroBoxProps = {
  hero: Hero;
};

function HeroBox({ hero }: HeroBoxProps) {
  return (
    <div>
      <img
        className="Portrait"
        src={`../data/heroes/portraits/${hero.name}.webp`}
      />
      {hero.name} {hero.faction}
    </div>
  );
}

export default HeroBox;
