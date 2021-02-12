import { Box, Button, Progress, Fade, useDisclosure, Wrap, WrapItem } from '@chakra-ui/react';
import { useState } from 'react';
import { Composition } from '../../model/compositions';
import { Hero } from '../../model/heroes';
import { HeroUsageResult, UsageResult } from './model';
import { BoxControlsStyle, BoxResultsStyle } from '../../theme/styles';
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

  const { isOpen, onOpen, onClose } = useDisclosure()

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
    onClose();

    if (usageResult === undefined) {
      setUsageResult(new UsageResult(0, []));
    }

    setTimeout(() => {
      const heroUsagesResults = new Map(heroes.map((h): [Hero, HeroUsageResult] => [h, new HeroUsageResult(h)]));

      const comps = selectedCompositions
        .filter((composition) => composition.selected);

      comps.forEach((composition) => {
          composition.coreHeroes.heroes.forEach((hr) => {
            const heroUsageResult = heroUsagesResults.get(hr.hero) as HeroUsageResult;
            heroUsageResult.coreCompositions.push(composition);
          });
          composition.flexHeroes.forEach((cc) => {
            cc.heroes.forEach((hr) => {
              const heroUsageResult = heroUsagesResults.get(hr.hero) as HeroUsageResult;
              heroUsageResult.flexCompositions.set(composition, cc.role);
            });
          });
        });

      setUsageResult(new UsageResult(
        comps.length,
        Array.from(heroUsagesResults.values())
          .sort((ur1, ur2) => 
            ur2.coreCompositions.length + ur2.flexCompositions.size - ur1.coreCompositions.length - ur1.flexCompositions.size ||
            ur2.coreCompositions.length - ur1.coreCompositions.length ||
            ur2.flexCompositions.size - ur1.flexCompositions.size
          )
        ));
      onOpen();
    }, 500 );
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
        <Fade in={!isOpen && usageResult !== undefined} unmountOnExit>
          <Progress isIndeterminate/>
        </Fade>
        <Fade in={isOpen}>
          <AnalysisByUsageResults usageResult={usageResult} />
        </Fade>
      </Box>
    </div>
  );
}

export default AnalysisByUsage;
