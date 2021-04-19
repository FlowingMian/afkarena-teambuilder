import React from 'react';
import HeroCategory from '../Hero/HeroCategory';
import { UsageDashboardResult, Tier } from './model';
import { VStack } from '@chakra-ui/react';
import { heatGradient } from '../../theme/colors';
import { HeroFilters, acceptHero } from '../HeroFilters/HeroFilters';
import { Profile } from '../../model/profile';

type UsageDashboardTierListProps = {
  profile:Profile;
  usageResult: UsageDashboardResult;
  filters?:HeroFilters;
};

function UsageDashboardTierList({ profile, usageResult, filters }: UsageDashboardTierListProps):JSX.Element {
  
  const globalFlex:Tier = new Tier('Global Flex', heatGradient[900]);
  const coreOrFlex:Tier = new Tier('Core or Flex', heatGradient[700]);
  const coreOrNiche:Tier = new Tier('Core or Niche', heatGradient[600]);
  const flex:Tier = new Tier('Flex', heatGradient[500]);
  const niche:Tier = new Tier('Niche', heatGradient[400]);
  const neverUsed:Tier = new Tier('Never used', heatGradient[100]);
  
  usageResult.heroUsageResults
    .filter(ur => !filters || acceptHero(filters, profile, ur.hero))
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
      tier.heroes.push(ur.hero);
    });

  const tierRows = [globalFlex, coreOrFlex, coreOrNiche, flex, niche, neverUsed]
    .map(tier => {
      return <HeroCategory key={tier.name} name={tier.name} heroes={tier.heroes} colorScheme={tier.variant}/>;});

  return (
    <VStack direction="column" alignItems='stretch'>
      {tierRows}
    </VStack>
  );
}

export default UsageDashboardTierList;
