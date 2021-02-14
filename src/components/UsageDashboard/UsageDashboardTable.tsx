import { Table, Thead, Th, Tbody, Tr, Td, Heading, Box, Flex, 
  Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Text } from "@chakra-ui/react"
import { ViewIcon } from '@chakra-ui/icons'
import { HeroUsageDashboardResult, UsageDashboardResult } from "./model";
import { Role } from "../../model/characteristics";
import HeroBox from "../Hero/HeroBox";
import CompositionBox from "../Composition/CompositionBox";
import CharacteristicTable from "../Characteristic/CharacteristicTable";
import { HeroCharactericticsSelection } from "../Characteristic/HeroCharactericticsSelector";

type UsageDashboardTableProps = {
  usageResult: UsageDashboardResult;
  filters?:HeroCharactericticsSelection;
};

function UsageDashboardTable({ usageResult, filters }: UsageDashboardTableProps) {

  const baseNumberStyle = {
    fontSize:"lg",
    fontWeight:"semibold",
    align:"center" 
  }
  function getUsageNumberColor(heroUsageResult:HeroUsageDashboardResult):Object {
    if (heroUsageResult.isGlobalUsage(usageResult.compositionCount)) {
      return {...baseNumberStyle, color: 'green.500'};
    }
    if (heroUsageResult.isNicheUsage(usageResult.compositionCount)) {
      return {...baseNumberStyle, color: 'red.500'};
    }
    return {...baseNumberStyle, color: 'yellow.500'};
  }
  function getFlexNumberColor(heroUsageResult:HeroUsageDashboardResult):Object {
    if (heroUsageResult.isGlobalFlex(usageResult.compositionCount)) {
      return {...baseNumberStyle, color: 'green.500'};
    }
    if (heroUsageResult.isNicheFlex(usageResult.compositionCount)) {
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

  const rows = usageResult.heroUsageResults
    .filter(ur => !filters || filters.accept(ur.hero))
    .map(ur => {

      const usageCount = ur.coreCompositions.length + ur.flexCompositions.size;
      const usagePercent = Math.round(usageCount * 100 / usageResult.compositionCount);
      const coreCount = ur.coreCompositions.length;
      const corePercent = Math.round(coreCount * 100 / usageResult.compositionCount);
      const flexCount = ur.flexCompositions.size;
      const flexPercent = Math.round(flexCount * 100 / usageResult.compositionCount);

      const coreCompositionBoxes = ur.coreCompositions.map((c) => 
        <Box mb="0.5rem">
          <CompositionBox key={c.id} composition={c}/>
        </Box>
      );

      const roles = new Map<Role, number>();
      const flexCompositionBoxes:Array<React.ReactNode> = [];

      ur.flexCompositions.forEach((r, c) => {
        roles.set(r, roles.has(r) ? roles.get(r) as number + 1 : 1);
        flexCompositionBoxes.push(
          <Flex key={c.id} direction='row' alignItems='center' mb="0.5rem">
            <CompositionBox composition={c} />
            <Heading size="xs" minWidth="8rem">
              as {r.name}
            </Heading>
          </Flex>
        );
      });

      return <Tr key={ur.hero.id}>
        <Td><HeroBox hero={ur.hero} /></Td>
        <Td><Text {...getUsageNumberColor(ur)}>
            {usageCount} ({usagePercent}%)
        </Text></Td>
        <Td><Text {...getCoreNumberColor(ur)}>
          {coreCount} ({corePercent}%)
        </Text></Td>
        <Td>
          {coreCompositionBoxes}
        </Td>
        <Td><Text {...getFlexNumberColor(ur)}>
          {flexCount} ({flexPercent}%)
        </Text></Td>
        <Td>
          <CharacteristicTable characterictics={roles} />
        </Td>
        <Td>
          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Text flex="1" textAlign="left" color='blue.500'>
                    See compositions <ViewIcon/>
                  </Text>
                  <AccordionIcon/>
                </AccordionButton>
              </h2>
              <AccordionPanel>
                {flexCompositionBoxes}
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Td>
      </Tr>
    });

  return (
    <Table size="sm" variant="striped">
      <Thead>
        <Tr>
          <Th width='4rem'>Hero</Th>
          <Th width='8rem'>Usage</Th>
          <Th width='8rem'>Core</Th>
          <Th>Core compositions</Th>
          <Th width='8rem'>Flex</Th>
          <Th width='8rem'>Flex roles</Th>
          <Th minWidth="488px"></Th>
        </Tr>
      </Thead>
      <Tbody>
        {rows}
      </Tbody>
    </Table>
  )
}

export default UsageDashboardTable;
