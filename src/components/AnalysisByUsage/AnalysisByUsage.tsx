import { Box, Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"
import { Composition } from "../../model/compositions";
import { Hero } from "../../model/heroes";
import { UsageResult } from "./model/UsageResult";
import { HeroUsageResult } from "./model/HeroUsageResult";
import AnalysisByUsageTierList from "./AnalysisByUsageTierList";
import AnalysisByUsageTable from "./AnalysisByUsageTable";
import { BoxCardProps } from "../style";
import CompositionSelector from "../Composition/CompositionSelector";
import { useState } from "react";

type AnalysisByUsageProps = {
  heroes: Array<Hero>;
  compositions: Array<Composition>;
};

function AnalysisByUsage({heroes, compositions}: AnalysisByUsageProps) {
  const selectedCompositions = compositions.map(c => ({...c, selected: true}));

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

  function setCompositionSelection(compositionId:string, value:boolean) {
    const composition = selectedCompositions.find(c => c.id === compositionId) as Composition & {selected:boolean}
    composition.selected = value;
  }

  return (
    <Box {...BoxCardProps}>
      <CompositionSelector compositions={selectedCompositions} onChange={setCompositionSelection}/>
      <Tabs>
        <TabList>
          <Tab>Tier List</Tab>
          <Tab>Table</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
          < AnalysisByUsageTierList usageResult={usageResult} />
          </TabPanel>
          <TabPanel>
          <AnalysisByUsageTable usageResult={usageResult} />
          </TabPanel>
      </TabPanels>
    </Tabs>
  </Box>
  );
}

export default AnalysisByUsage;
