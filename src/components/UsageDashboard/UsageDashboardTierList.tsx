import HeroCategory from "../Hero/HeroCategory";
import { UsageDashboardResult, Tier } from "./model";
import { VStack } from "@chakra-ui/react";
import { heatGradient } from "../../theme/colors";
import { HeroCharactericticsSelection } from "../Characteristic/HeroCharactericticsSelector";

type UsageDashboardTierListProps = {
  usageResult: UsageDashboardResult;
  filters?:HeroCharactericticsSelection;
};

function UsageDashboardTierList({ usageResult, filters }: UsageDashboardTierListProps) {
  
  const globalFlex:Tier = new Tier('Global Flex', heatGradient[900]);
  const coreOrFlex:Tier = new Tier('Core or Flex', heatGradient[700]);
  const coreOrNiche:Tier = new Tier('Core or Niche', heatGradient[600]);
  const flex:Tier = new Tier('Flex', heatGradient[500]);
  const niche:Tier = new Tier('Niche', heatGradient[400]);
  const neverUsed:Tier = new Tier('Never used', heatGradient[100]);

  usageResult.heroUsageResults
    .filter(ur => !filters || filters.accept(ur.hero))
    .forEach(ur => {
      let tier:Tier;
      if (ur.isCore()) {
        if (ur.isNicheFlex(usageResult.compositionCount)) {
          tier = coreOrNiche;
        }
        else {
          tier = coreOrFlex;
        }
      }
      else {
        if (ur.flexCompositions.size === 0) {
          tier = neverUsed;
        }
        else if (ur.isGlobalFlex(usageResult.compositionCount)) {
          tier = globalFlex;
        }
        else if (ur.isNicheFlex(usageResult.compositionCount)) {
          tier = niche;
        }
        else {
          tier = flex;
        }
      }
      tier.heroes.push(ur.hero)
    });

  const tierRows = [globalFlex, coreOrFlex, coreOrNiche, flex, niche, neverUsed]
    .map(tier => <HeroCategory key={tier.name} name={tier.name} heroes={tier.heroes} colorScheme={tier.variant}/>);

  return (
    <VStack direction="column" alignItems='stretch'>
      {tierRows}
    </VStack>
  )
}

export default UsageDashboardTierList;
