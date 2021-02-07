import compositions from "../../../data/compositions";
import { Composition } from "../../../model/compositions";
import HeroCategory from "../../Hero/HeroCategory/HeroCategory";
import "./CompositionDetails.css";

type CompositionDetailsProps = {
  composition: Composition;
};

function CompositionDetails({ composition }: CompositionDetailsProps) {
  const coreHeroBoxes = <HeroCategory name={composition.coreHeroes.role.name} heroes={composition.coreHeroes.heroes.map(hr => hr.hero)} />;
  const flexHeroBoxes = composition.flexHeroes.map(cc => <HeroCategory name={cc.role.name} heroes={cc.heroes.map(hr => hr.hero)} />);

  return (
    <div className="CompositionDetails">
      <div className="CompositionDetailsName">{composition.name}</div>
      {coreHeroBoxes}
      {flexHeroBoxes}
    </div>
  );
}

export default CompositionDetails;
