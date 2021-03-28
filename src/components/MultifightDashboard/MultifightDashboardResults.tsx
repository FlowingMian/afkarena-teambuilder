import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { Accordion, VStack, Button, HStack, Switch, FormLabel } from '@chakra-ui/react';
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
  const [heroSelection, setHeroSelection] = useState<Map<HeroRequirement|Hero,string>>(new Map());
  const [disableNotOwned, setDisableNotOwned] = useState<boolean>(false);
  const [hasChanged, setHasChanged] = useState<boolean>(false);

  useEffect(() => {
    calculateHeroStates(disableNotOwned);
    calculateHeroSelection(disableNotOwned);
    setHasChanged(true);
  }, [compositionHeroes]);

  function onChangeDisableNotOwned() {
    const newValue = !disableNotOwned;
    calculateHeroStates(newValue);
    calculateHeroSelection(newValue);
    setDisableNotOwned(newValue);
  }

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
    calculateHeroStates(disableNotOwned);
    calculateHeroSelection(disableNotOwned);
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
        return hrs.map(hId => [hId, cId] as [Hero|HeroRequirement, string]);
      });
    if (disableNotOwned) {
      heroSelectionEntries = heroSelectionEntries.concat(disabledHeroes.map(h => [h, 'DISABLED'] as [Hero|HeroRequirement, string]));
    } 
    setHeroSelection(new Map(heroSelectionEntries));
  }

  const selectedCompositions = compositions.filter(c => Object.keys(compositionHeroes).includes(c.id));
  const customCompositions = Object.keys(compositionHeroes)
    .filter(c => isCustomComposition(c))
    .map(c => generateCustomComposition(c));

  const compositionBuilders = [...selectedCompositions, ...customCompositions].map(c => 
    <CompositionBuilder key={c.id} composition={c} heroSelection={heroSelection} onChange={(v) => onChange(c.id, v)}/>
  );
  
  return (
    <VStack>
      <HStack>
        <Switch id="disabled-not-owned" isChecked={disableNotOwned} onChange={onChangeDisableNotOwned}/>
        <FormLabel htmlFor="disabled-not-owned" mb="0">
          Disable heroes not owned
        </FormLabel>
        <Button colorScheme='red' onClick={onSave} disabled={!hasChanged}>Save</Button>
      </HStack>

      <Accordion width="100%" allowToggle={true} allowMultiple={true}>
        {compositionBuilders}
      </Accordion>
      
      <Button variant='outline' size="xs" leftIcon={<AddIcon/>} onClick={addCustomComposition}>Add a Custom composition</Button>
      <HeroList heroes={heroes} heroStates={heroStates}/>
    </VStack>
  );
}

export default MultifightDashboardResults;