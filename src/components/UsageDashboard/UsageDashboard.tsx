import { Box, Button, Wrap, WrapItem } from '@chakra-ui/react';
import { useState } from 'react';
import { HeroUsageDashboardResult, UsageDashboardResult } from './model';
import { BoxControlsStyle, BoxResultsStyle } from '../../theme/styles';
import CompositionSelector, { SelectedComposition } from '../Composition/CompositionSelector';
import UsageDashboardResults from './UsageDashboardResults';
import compositions from '../../data/compositions';
import heroes from '../../data/heroes';

function UsageDashboard() {
  const [usageResult, setUsageResult] = useState<UsageDashboardResult>();
  
  const defaultSelection = compositions.map((c) => ({ ...c, selected: true } as SelectedComposition));
  const [selectedCompositions, setSelectedCompositions] = useState<Array<SelectedComposition>>(defaultSelection);

  function setCompositionSelection(compositionId:string, value:boolean) {
    setSelectedCompositions(selectedCompositions.map((c) => {
      if (c.id === compositionId) {
        return {
          ...c,
          selected: value
        }
      }
      return c;
    }));
  }

  function resetSelection() {
    setSelectedCompositions(compositions.map((c) => ({ ...c, selected: true } as SelectedComposition)));
  }


  function calculateHeroUsage() {
    const heroUsagesResults = new Map(heroes.map((h): [string, HeroUsageDashboardResult] => [h.id, new HeroUsageDashboardResult(h)]));

    const comps = selectedCompositions
      .filter((composition) => composition.selected);

    comps.forEach((composition) => {
        composition.coreHeroes.heroes.forEach((hr) => {
          const heroUsageResult = heroUsagesResults.get(hr.hero.id) as HeroUsageDashboardResult;
          heroUsageResult.coreCompositions.push(composition);
        });
        composition.flexHeroes.forEach((cc) => {
          cc.heroes.forEach((hr) => {
            const heroUsageResult = heroUsagesResults.get(hr.hero.id) as HeroUsageDashboardResult;
            heroUsageResult.flexCompositions.set(composition, cc.role);
          });
        });
      });

    setUsageResult(new UsageDashboardResult(
      comps.length,
      Array.from(heroUsagesResults.values())
        .sort((ur1, ur2) => 
          // Sort by number of usage > core > flex
          ur2.coreCompositions.length + ur2.flexCompositions.size - ur1.coreCompositions.length - ur1.flexCompositions.size ||
          ur2.coreCompositions.length - ur1.coreCompositions.length ||
          ur2.flexCompositions.size - ur1.flexCompositions.size
        )
      ));
  }

  return (
    <div>
      <Box {...BoxControlsStyle}>
        <CompositionSelector compositions={selectedCompositions} onChange={setCompositionSelection} key={selectedCompositions.filter((composition) => composition.selected).length}/>
        <Wrap mt='4'>
          <WrapItem><Button variant='solid' onClick={calculateHeroUsage}>Calculate hero usage</Button></WrapItem>
          <WrapItem><Button variant='outline' onClick={resetSelection}>Reset selection</Button></WrapItem>
        </Wrap>
      </Box>
      <Box {...BoxResultsStyle}>
        {usageResult && <UsageDashboardResults usageResult={usageResult} />}
      </Box>
    </div>
  );
}

export default UsageDashboard;
