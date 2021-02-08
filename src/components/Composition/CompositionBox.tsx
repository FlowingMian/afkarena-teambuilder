import { Flex } from "rebass";
import { Composition } from "../../model/compositions";
import HeroCategory from "../Hero/HeroCategory";
import "./CompositionBox.css";

type CompositionBoxProps = {
  composition: Composition;
};

function CompositionBox({ composition }: CompositionBoxProps) {
  return (
    <HeroCategory name={composition.name} heroes={composition.coreHeroes.heroes.map(hr => hr.hero)} />
  );
}

export default CompositionBox;
