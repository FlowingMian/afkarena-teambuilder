import React from 'react';
import { Tr, Td, Text } from '@chakra-ui/react';
import { HeroUsageDashboardResult } from './model';
import HeroBox from '../Hero/HeroBox';
import CompositionBoxListModal from '../Composition/CompositionBoxListModal';

type UsageDashboardTableRowProps = {
  heroUsageResult: HeroUsageDashboardResult;
  compositionCount: number
};

function UsageDashboardTableRow({ heroUsageResult, compositionCount }: UsageDashboardTableRowProps):JSX.Element {
  const baseNumberStyle = {
    fontSize:'sm',
    fontWeight:'semibold'
  };
  function getUsageNumberColor(heroUsageResult:HeroUsageDashboardResult):Record<string, unknown> {
    if (heroUsageResult.isGlobalUsage(compositionCount)) {
      return {...baseNumberStyle, color: 'green.500'};
    }
    if (heroUsageResult.isNicheUsage(compositionCount)) {
      return {...baseNumberStyle, color: 'red.500'};
    }
    return {...baseNumberStyle, color: 'yellow.500'};
  }
  function getFlexNumberColor(heroUsageResult:HeroUsageDashboardResult):Record<string, unknown> {
    if (heroUsageResult.isGlobalFlex(compositionCount)) {
      return {...baseNumberStyle, color: 'green.500'};
    }
    if (heroUsageResult.isNicheFlex(compositionCount)) {
      return {...baseNumberStyle, color: 'red.500'};
    }
    return {...baseNumberStyle, color: 'yellow.500'};
  }
  function getCoreNumberColor(heroUsageResult:HeroUsageDashboardResult):Record<string, unknown> {
    if (heroUsageResult.isCore()) {
      return {...baseNumberStyle,color: 'green.500'};
    }
    return {...baseNumberStyle,color: 'red.500'};
  }

  const usageCount = heroUsageResult.coreCompositions.length + heroUsageResult.flexCompositions.size;
  const usagePercent = Math.round(usageCount * 100 / compositionCount);
  const coreCount = heroUsageResult.coreCompositions.length;
  const corePercent = Math.round(coreCount * 100 / compositionCount);
  const flexCount = heroUsageResult.flexCompositions.size;
  const flexPercent = Math.round(flexCount * 100 / compositionCount);

  const coreLabel = <Text {...getCoreNumberColor(heroUsageResult)}>
    {coreCount} ({corePercent}%)
  </Text>;

  const flexLabel = <Text {...getFlexNumberColor(heroUsageResult)}>
    {flexCount} ({flexPercent}%)
  </Text>;

  return <Tr key={heroUsageResult.hero.id}>
    <Td><HeroBox hero={heroUsageResult.hero} /></Td>
    <Td><Text {...getUsageNumberColor(heroUsageResult)}>
      {usageCount} ({usagePercent}%)
    </Text></Td>
    <Td>
      <CompositionBoxListModal compositions={heroUsageResult.coreCompositions} buttonLabel={coreLabel}/>
    </Td>
    <Td>
      <CompositionBoxListModal compositions={heroUsageResult.flexCompositions} buttonLabel={flexLabel}/>
    </Td>
  </Tr>;

}

export default UsageDashboardTableRow;
