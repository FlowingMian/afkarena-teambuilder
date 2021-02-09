import HeroCategory from "../Hero/HeroCategory";
import { UsageResult, Tier } from "./model";
import { Wrap, WrapItem } from "@chakra-ui/react";

type AnalysisByUsageTierListProps = {
  usageResult: UsageResult;
};

function AnalysisByUsageTierList({ usageResult }: AnalysisByUsageTierListProps) {
  
  const GLOBAL_PERCENT_THRESHOLD: number = 0.5;
  const NICHE_PERCENT_THRESHOLD: number = 0.25;

  const coreOrFlex:Tier = new Tier('Core or Flex');
  const coreOrNiche:Tier = new Tier('Core or Niche');
  const globalFlex:Tier = new Tier('Global Flex');
  const flex:Tier = new Tier('Flex');
  const niche:Tier = new Tier('Niche');
  const neverUsed:Tier = new Tier('Never used');

  usageResult.heroUsageResults.forEach(ur => {
    const flexProportion = ur.flexCompositions.length / usageResult.compositionCount;
    let tier:Tier;
    if (ur.coreCompositions.length > 0) {
      if (flexProportion > NICHE_PERCENT_THRESHOLD) {
        tier = coreOrFlex;
      }
      else {
        tier = coreOrNiche;
      }
    }
    else {
      if (flexProportion > GLOBAL_PERCENT_THRESHOLD) {
        tier = globalFlex;
      }
      else if (flexProportion > NICHE_PERCENT_THRESHOLD) {
        tier = flex;
      }
      else if (ur.flexCompositions.length > 0) {
        tier = niche;
      }
      else {
        tier = neverUsed;
      }
    }
    tier.heroes.push(ur.hero)
  });

  const tierRows = [globalFlex, coreOrFlex, coreOrNiche, flex, niche, neverUsed]
    .map(tier => <WrapItem key={tier.name}><HeroCategory name={tier.name} heroes={tier.heroes} /></WrapItem>);

  return (
    <Wrap direction="column">
      {tierRows}
    </Wrap>
  )
}

export default AnalysisByUsageTierList;
