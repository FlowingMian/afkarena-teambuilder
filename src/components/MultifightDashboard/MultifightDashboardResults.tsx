import { useEffect, useState } from "react";
import { Accordion, VStack } from "@chakra-ui/react"
import { Composition } from "../../model/compositions";
import CompositionBuilder from "./CompositionBuilder";
import HeroList from "../Hero/HeroList";
import heroes from "../../data/heroes";
import { State } from "../../model/common";

type MultifightDashboardResultsProps = {
    compositions: Array<Composition>;
};

function MultifightDashboardResults({ compositions }: MultifightDashboardResultsProps) {
  const [selectedHeroesByComposition, setSelectedHeroesByComposition] = useState<Map<string, Array<string>>>(new Map());
  const [heroStates, setHeroStates] = useState<Map<string,State>>(new Map());

  useEffect(() => {
    const t = new Map(selectedHeroesByComposition);
    Array.from(selectedHeroesByComposition.keys())
      .filter(k => !compositions.map(c=> c.id).includes(k))
      .forEach(k => t.delete(k));
    updateSelectedHeroesByComposition(t);
  }, [compositions]);

  function onChange(compositionId:string, heroIds:Array<string>) {
    updateSelectedHeroesByComposition(new Map(selectedHeroesByComposition.set(compositionId, heroIds)));
  }

  function updateSelectedHeroesByComposition(selection:Map<string, Array<string>>) {
    setSelectedHeroesByComposition(selection);
    const selectedIds = Array.from(selection.values()).flatMap(c => [...c]);
    setHeroStates(new Map(selectedIds.map((h): [string, State] => {
      return [h, State.SELECTED]
    })));
  }

  const compositionBuilders = compositions.map(c => <CompositionBuilder key={c.id} composition={c} heroStates={heroStates} onChange={(v) => onChange(c.id, v)}/>)
  return (
      <VStack>
        <Accordion allowToggle={true} allowMultiple={true}>
          {compositionBuilders}
        </Accordion>
        <HeroList heroes={heroes} heroStates={heroStates}/>
      </VStack>
  );
}

export default MultifightDashboardResults;