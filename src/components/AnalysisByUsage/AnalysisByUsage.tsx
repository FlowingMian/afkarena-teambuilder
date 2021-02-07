import { Composition } from "../../model/compositions";
import { Hero } from "../../model/heroes";
import { UsageResult } from "./model/UsageResult";
import { HeroUsageResult } from "./model/HeroUsageResult";
import AnalysisByUsageTierList from "./TierList/AnalysisByUsageTierList";
import AnalysisByUsageTable from "./Table/AnalysisByUsageTable";
import "./AnalysisByUsage.css";

type AnalysisByUsageProps = {
  heroes: Array<Hero>;
  compositions: Array<Composition>;
};

function AnalysisByUsage({heroes, compositions}: AnalysisByUsageProps) {

  const heroUsagesResults = new Map(heroes.map((h): [Hero, HeroUsageResult] => [h, new HeroUsageResult(h)]));

  compositions.forEach(composition => {
    composition.coreHeroes.heroes.forEach(hr => {
      const heroUsageResult = heroUsagesResults.get(hr.hero) as HeroUsageResult;
      heroUsageResult.coreCompositions.push(composition);
    });
    composition.flexHeroes.forEach(cc => {
      cc.heroes.forEach(hr => {
        const heroUsageResult = heroUsagesResults.get(hr.hero) as HeroUsageResult;
        heroUsageResult.flexCompositions.push(composition);
      });
    });
  });

  const usageResult = new UsageResult(
    compositions.length, 
    Array.from(heroUsagesResults.values()).sort((ur1, ur2) => ur2.coreCompositions.length - ur1.coreCompositions.length || ur2.flexCompositions.length - ur1.flexCompositions.length)
  );

  return (
    <div className="AnalysisByUsage">
      <AnalysisByUsageTierList usageResult={usageResult} />
      <AnalysisByUsageTable usageResult={usageResult} />
    </div>
  );
}

export default AnalysisByUsage;
