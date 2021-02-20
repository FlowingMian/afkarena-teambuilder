import { Composition } from "../../model/compositions";
import HeroCategory from "../Hero/HeroCategory";
import CompositionModal from "./CompositionModal";

type CompositionBoxProps = {
  composition: Composition;
};

function CompositionBox({ composition }: CompositionBoxProps) {
  const tags = <CompositionModal composition={composition} />
  return (
    <HeroCategory name={composition.name} tags={tags} heroes={composition.coreHeroes.heroes.map(hr => hr.hero)} />
  );
}

export default CompositionBox;
