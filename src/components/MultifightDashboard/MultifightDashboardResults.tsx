import React, { useEffect } from 'react';
import { useState } from 'react';
import { Accordion, VStack, Button, Icon } from '@chakra-ui/react';
import CompositionBuilder from './CompositionBuilder';
import HeroList from '../Hero/HeroList';
import heroes from '../../data/heroes';
import { State } from '../../model/common';
import generateCustomComposition, { isCustomComposition } from '../../model/customComposition';
import { Hero } from '../../model/heroes';
import { Profile, CompositionHeroes } from '../../model/profile';
import compositions from '../../data/compositions';
import { FiPlus } from 'react-icons/fi';

type MultifightDashboardResultsProps = {
  profile:Profile;
  compositionHeroes: CompositionHeroes;
  disableNotOwned: boolean;
  onCompositionHeroesChange: (value:CompositionHeroes) => void
};

function MultifightDashboardResults({ profile, compositionHeroes, disableNotOwned, onCompositionHeroesChange }: MultifightDashboardResultsProps):JSX.Element {
  
  const [heroStates, setHeroStates] = useState<Map<string,State>>(new Map());
  const [heroSelection, setHeroSelection] = useState<Map<Hero,string>>(new Map());

  useEffect(() => {
    calculateHeroStates(disableNotOwned);
    calculateHeroSelection(disableNotOwned);
  }, [compositionHeroes, disableNotOwned]);

  function onChange(compositionId:string, heroes:Array<Hero>) {
    onCompositionHeroesChange({
      ...compositionHeroes,
      [compositionId]: heroes
    });
  }

  function addCustomComposition(){
    const customComposition = generateCustomComposition();
    onCompositionHeroesChange({
      ...compositionHeroes,
      [customComposition.id]: []
    });
  }

  function removeCustomComposition(compositionId:string) {
    const res = {...compositionHeroes};
    delete res[compositionId];
    onCompositionHeroesChange(res);
  }

  const disabledHeroes = heroes.filter(h => !profile.heroCollection.includes(h.id));

  function calculateHeroStates(disableNotOwned:boolean) {
    let heroStateEntries = Object.entries(compositionHeroes)
      .flatMap(([, hrs]) => 
        hrs.map((hr): [string, State] => {
          return [hr.id, State.SELECTED];
        })
      );

    if (disableNotOwned) {
      heroStateEntries = heroStateEntries.concat(disabledHeroes.map(h => [h.id, State.DISABLED] as [string, State]));
    } 
    setHeroStates(new Map(heroStateEntries));
  }

  function calculateHeroSelection(disableNotOwned:boolean) {
    let heroSelectionEntries = Object.entries(compositionHeroes)
      .flatMap(([cId, hrs]) => {
        return hrs.map(hId => [hId, cId] as [Hero, string]);
      });
    if (disableNotOwned) {
      heroSelectionEntries = heroSelectionEntries.concat(disabledHeroes.map(h => [h, 'DISABLED'] as [Hero, string]));
    } 
    setHeroSelection(new Map(heroSelectionEntries));
  }

  const selectedCompositions = compositions.filter(c => Object.keys(compositionHeroes).includes(c.id));
  const customCompositions = Object.keys(compositionHeroes)
    .filter(c => isCustomComposition(c))
    .map(c => generateCustomComposition(c));

  const compositionBuilders = [...selectedCompositions, ...customCompositions].map(c => 
    <CompositionBuilder key={c.id} composition={c} heroSelection={heroSelection} onChange={(v) => onChange(c.id, v)} onDelete={() => removeCustomComposition(c.id)}/>
  );
  
  return (
    <VStack>
      <Accordion width="100%" allowToggle={true} allowMultiple={true}>
        {compositionBuilders}
      </Accordion>
      
      <Button variant='outline' size="xs" leftIcon={<Icon as={FiPlus} />} onClick={addCustomComposition}>Add a Custom composition</Button>
      <HeroList heroes={heroes} heroStates={heroStates}/>
    </VStack>
  );
}

export default MultifightDashboardResults;