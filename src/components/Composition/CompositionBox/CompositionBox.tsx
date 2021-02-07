import { Composition } from "../../../model/compositions";
import HeroCategory from "../../Hero/HeroCategory/HeroCategory";
import "./CompositionBox.css";

type CompositionBoxProps = {
  composition: Composition;
};

function CompositionBox({ composition }: CompositionBoxProps) {
  return (
    <div className="CompositionBox">
      <HeroCategory name={composition.name} heroes={composition.coreHeroes.heroes.map(hr => hr.hero)} />
    </div>
  );
}

export default CompositionBox;
