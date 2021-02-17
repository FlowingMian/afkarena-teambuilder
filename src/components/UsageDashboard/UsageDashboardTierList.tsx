import HeroCategory from "../Hero/HeroCategory";
import { UsageDashboardResult, Tier, GLOBAL_PERCENT_THRESHOLD, NICHE_PERCENT_THRESHOLD } from "./model";
import { Tooltip, VStack } from "@chakra-ui/react";
import { heatGradient } from "../../theme/colors";
import { HeroCharactericticsSelection } from "../Characteristic/HeroCharactericticsSelector";
import { InfoIcon } from "@chakra-ui/icons";

type UsageDashboardTierListProps = {
  usageResult: UsageDashboardResult;
  filters?:HeroCharactericticsSelection;
};

function UsageDashboardTierList({ usageResult, filters }: UsageDashboardTierListProps) {
  
  const globalFlex:Tier = new Tier('Global Flex', `Flex in more than ${GLOBAL_PERCENT_THRESHOLD * 100}% of compositions`, heatGradient[900]);
  const coreOrFlex:Tier = new Tier('Core or Flex', `Core at least once and Flex in more than ${NICHE_PERCENT_THRESHOLD * 100}% of compositions`, heatGradient[700]);
  const coreOrNiche:Tier = new Tier('Core or Niche', `Core at least once and Flex in less than ${NICHE_PERCENT_THRESHOLD * 100}% of compositions`, heatGradient[600]);
  const flex:Tier = new Tier('Flex', `Flex in ${NICHE_PERCENT_THRESHOLD * 100}% to ${GLOBAL_PERCENT_THRESHOLD * 100}% of compositions`, heatGradient[500]);
  const niche:Tier = new Tier('Niche', `Flex in less than ${NICHE_PERCENT_THRESHOLD * 100}% of compositions`, heatGradient[400]);
  const neverUsed:Tier = new Tier('Never used', ':\'(', heatGradient[100]);

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
    .map(tier => {
      const description = <Tooltip label={tier.description} aria-label={tier.description}>
        <InfoIcon/>
      </Tooltip>
      return <HeroCategory key={tier.name} name={tier.name} tags={description} heroes={tier.heroes} colorScheme={tier.variant}/>});

  return (
    <VStack direction="column" alignItems='stretch'>
      {tierRows}
    </VStack>
  )
}

export default UsageDashboardTierList;
