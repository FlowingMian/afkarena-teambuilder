import { Composition } from "../../model/compositions";
import HeroCategory from "../Hero/HeroCategory";

type CompositionBoxProps = {
  composition: Composition;
};

function CompositionBox({ composition }: CompositionBoxProps) {
  return (
    <HeroCategory name={composition.name} charactericticsDistribution={false} heroes={composition.coreHeroes.heroes.map(hr => hr.hero)} />
  );
}

export default CompositionBox;
