import React from 'react';
import { useEffect, useState } from 'react';
import { Accordion, VStack, Button } from '@chakra-ui/react';
import { Composition, HeroRequirement } from '../../model/compositions';
import CompositionBuilder from './CompositionBuilder';
import HeroList from '../Hero/HeroList';
import heroes from '../../data/heroes';
import { State } from '../../model/common';
import generateCustomComposition from '../../model/customComposition';
import { AddIcon } from '@chakra-ui/icons';

type MultifightDashboardResultsProps = {
    compositions: Array<Composition>;
};

function MultifightDashboardResults({ compositions }: MultifightDashboardResultsProps):JSX.Element {
  const [selectedHeroesByComposition, setSelectedHeroesByComposition] = useState<Map<string, Array<HeroRequirement>>>(new Map());
  const [heroStates, setHeroStates] = useState<Map<string,State>>(new Map());
  const [customCompositions, setCustomCompositions] = useState<Array<Composition>>([]);

  useEffect(() => {
    updateSelectedHeroesByComposition(new Map(compositions.map(c => [c.id, c.coreHeroes.heroes])));
    setCustomCompositions([]);
  }, [compositions]);

  function onChange(compositionId:string, heroes:Array<HeroRequirement>) {
    updateSelectedHeroesByComposition(new Map(selectedHeroesByComposition.set(compositionId, heroes)));
  }

  function updateSelectedHeroesByComposition(selection:Map<string, Array<HeroRequirement>>) {
    setSelectedHeroesByComposition(selection);
    setHeroStates(new Map(Array.from(selection.values()).flatMap(hs => hs.map((h): [string, State] => {
      return [h.id, State.SELECTED];
    }))));
  }

  function addCustomComposition(){
    setCustomCompositions([...customCompositions, generateCustomComposition()]);
  }

  const heroSelection = new Map(Array.from(selectedHeroesByComposition.entries()).flatMap(
    ([cId, hIds]) => hIds.map(hId => [hId, cId])
  ));

  const compositionBuilders = [...compositions, ...customCompositions].map(c => 
    <CompositionBuilder key={c.id} composition={c} heroSelection={heroSelection} onChange={(v) => onChange(c.id, v)}/>
  );
  return (
    <VStack>
      <Accordion width="100%" allowToggle={true} allowMultiple={true}>
        {compositionBuilders}
      </Accordion>
      <Button variant='outline' size="xs" leftIcon={<AddIcon/>} onClick={addCustomComposition}>Add a Custom composition</Button>
      <HeroList heroes={heroes} heroStates={heroStates}/>
    </VStack>
  );
}

export default MultifightDashboardResults;