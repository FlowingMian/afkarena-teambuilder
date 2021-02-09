import { Box, Button } from '@chakra-ui/react';
import { useState } from 'react';
import { Composition } from '../../model/compositions';
import { Hero } from '../../model/heroes';
import { HeroUsageResult, UsageResult } from './model';
import { BoxCardProps } from '../style';
import CompositionSelector, { SelectedComposition } from '../Composition/CompositionSelector';
import AnalysisByUsageResults from './AnalysisByUsageResults';

type AnalysisByUsageProps = {
  heroes: Array<Hero>;
  compositions: Array<Composition>;
};

function AnalysisByUsage({ heroes, compositions }: AnalysisByUsageProps) {
  const [usageResult, setUsageResult] = useState<UsageResult>();
  
  const defaultSelection = compositions.map((c) => ({ ...c, selected: true } as SelectedComposition));
  const [selectedCompositions, setSelectedCompositions] = useState<Array<SelectedComposition>>(defaultSelection);

  function setCompositionSelection(compositionId:string, value:boolean) {
    const composition = selectedCompositions.find((c) => c.id === compositionId) as Composition & {selected:boolean};
    composition.selected = value;
    setSelectedCompositions(selectedCompositions);
  }

  function calculateHeroUsage() {
    const heroUsagesResults = new Map(heroes.map((h): [Hero, HeroUsageResult] => [h, new HeroUsageResult(h)]));

    selectedCompositions
      .filter((composition) => composition.selected)
      .forEach((composition) => {
        composition.coreHeroes.heroes.forEach((hr) => {
          const heroUsageResult = heroUsagesResults.get(hr.hero) as HeroUsageResult;
          heroUsageResult.coreCompositions.push(composition);
        });
        composition.flexHeroes.forEach((cc) => {
          cc.heroes.forEach((hr) => {
            const heroUsageResult = heroUsagesResults.get(hr.hero) as HeroUsageResult;
            heroUsageResult.flexCompositions.push(composition);
          });
        });
      });

    setUsageResult(new UsageResult(
      selectedCompositions.length,
      Array.from(heroUsagesResults.values()).sort((ur1, ur2) => ur2.coreCompositions.length - ur1.coreCompositions.length || ur2.flexCompositions.length - ur1.flexCompositions.length),
    ));
  }

  return (
    <Box {...BoxCardProps}>
      <CompositionSelector compositions={selectedCompositions} onChange={setCompositionSelection} />
      <Button onClick={calculateHeroUsage}>Calculate hero usage</Button>
      <AnalysisByUsageResults usageResult={usageResult} />
    </Box>
  );
}

export default AnalysisByUsage;
