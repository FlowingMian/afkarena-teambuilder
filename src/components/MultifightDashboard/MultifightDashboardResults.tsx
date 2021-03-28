import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { Accordion, VStack, Button } from '@chakra-ui/react';
import { HeroRequirement } from '../../model/compositions';
import CompositionBuilder from './CompositionBuilder';
import HeroList from '../Hero/HeroList';
import heroes from '../../data/heroes';
import { State } from '../../model/common';
import generateCustomComposition, { isCustomComposition } from '../../model/customComposition';
import { AddIcon } from '@chakra-ui/icons';
import { ProfileContext } from '../Profile/ProfileContext';
import { Hero } from '../../model/heroes';
import { Profile, CompositionHeroes } from '../../model/profile';
import compositions from '../../data/compositions';

type MultifightDashboardResultsProps = {
  profile:Profile;
  compositionHeroes: CompositionHeroes;
  onCompositionHeroesChange: (value:CompositionHeroes) => void
};

function MultifightDashboardResults({ profile, compositionHeroes, onCompositionHeroesChange }: MultifightDashboardResultsProps):JSX.Element {
  const {updateProfile} = useContext(ProfileContext);

  const [heroStates, setHeroStates] = useState<Map<string,State>>(new Map());
  const [hasChanged, setHasChanged] = useState<boolean>(false);

  useEffect(calculateHeroStates, [compositionHeroes]);

  function onSave() {
    updateProfile({
      ...profile,
      compositions: compositionHeroes
    });
    setHasChanged(false);
  }

  function onChange(compositionId:string, heroes:Array<HeroRequirement>) {
    updateSelectedHeroesByComposition({
      ...compositionHeroes,
      [compositionId]: heroes
    });
  }

  function addCustomComposition(){
    const customComposition = generateCustomComposition();
    updateSelectedHeroesByComposition({
      ...compositionHeroes,
      [customComposition.id]: []
    });
  }
  
  function updateSelectedHeroesByComposition(selection:CompositionHeroes) {
    onCompositionHeroesChange(selection);
    setHasChanged(true);
    calculateHeroStates();
  }

  const disabledHeroes = heroes
    .filter(h => !profile.heroCollection.includes(h.id));

  function calculateHeroStates() {
    const selectedMap = Object.entries(compositionHeroes)
      .flatMap(([, hrs]) => 
        hrs.map((hr): [string, State] => {
          return [hr.id, State.SELECTED];
        })
      );

    setHeroStates(new Map(
      disabledHeroes.map(h => [h.id, State.DISABLED] as [string, State])
        .concat(selectedMap)
    ));
  }

  const heroSelection = new Map(
    disabledHeroes.map(h => [h, 'DISABLED'] as [Hero|HeroRequirement, string])
      .concat(
        Object.entries(compositionHeroes)
          .flatMap(([cId, hIds]) => {
            return hIds.map(hId => [hId, cId] as [Hero|HeroRequirement, string]);
          })
      ));

  const selectedCompositions = compositions.filter(c => Object.keys(compositionHeroes).includes(c.id));
  const customCompositions = Object.keys(compositionHeroes)
    .filter(c => isCustomComposition(c))
    .map(c => generateCustomComposition(c));

  const compositionBuilders = [...selectedCompositions, ...customCompositions].map(c => 
    <CompositionBuilder key={c.id} composition={c} heroSelection={heroSelection} onChange={(v) => onChange(c.id, v)}/>
  );
  
  return (
    <VStack>
      <Button colorScheme='red' onClick={onSave} disabled={!hasChanged}>Save Compositions</Button>
      <Accordion width="100%" allowToggle={true} allowMultiple={true}>
        {compositionBuilders}
      </Accordion>
      <Button variant='outline' size="xs" leftIcon={<AddIcon/>} onClick={addCustomComposition}>Add a Custom composition</Button>
      <HeroList heroes={heroes} heroStates={heroStates}/>
    </VStack>
  );
}

export default MultifightDashboardResults;