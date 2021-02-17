import { Tr, Td, Text } from "@chakra-ui/react"
import { HeroUsageDashboardResult } from "./model";
import { Role } from "../../model/characteristics";
import HeroBox from "../Hero/HeroBox";
import CharacteristicTable from "../Characteristic/CharacteristicTable";
import CompositionBoxListModal from "../Composition/CompositionBoxListModal";

type UsageDashboardTableRowProps = {
  heroUsageResult: HeroUsageDashboardResult;
  compositionCount: number
};

function UsageDashboardTableRow({ heroUsageResult, compositionCount }: UsageDashboardTableRowProps) {
  const baseNumberStyle = {
    fontSize:"lg",
    fontWeight:"semibold"
  }
  function getUsageNumberColor(heroUsageResult:HeroUsageDashboardResult):Object {
    if (heroUsageResult.isGlobalUsage(compositionCount)) {
      return {...baseNumberStyle, color: 'green.500'};
    }
    if (heroUsageResult.isNicheUsage(compositionCount)) {
      return {...baseNumberStyle, color: 'red.500'};
    }
    return {...baseNumberStyle, color: 'yellow.500'};
  }
  function getFlexNumberColor(heroUsageResult:HeroUsageDashboardResult):Object {
    if (heroUsageResult.isGlobalFlex(compositionCount)) {
      return {...baseNumberStyle, color: 'green.500'};
    }
    if (heroUsageResult.isNicheFlex(compositionCount)) {
      return {...baseNumberStyle, color: 'red.500'};
    }
    return {...baseNumberStyle, color: 'yellow.500'};
  }
  function getCoreNumberColor(heroUsageResult:HeroUsageDashboardResult):Object {
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

  const roles = new Map<Role, number>();
  heroUsageResult.flexCompositions.forEach((r, c) => {
    roles.set(r, roles.has(r) ? roles.get(r) as number + 1 : 1);
  });

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
      <Td>
        <CharacteristicTable characterictics={roles} />
      </Td>
    </Tr>

}

export default UsageDashboardTableRow;
