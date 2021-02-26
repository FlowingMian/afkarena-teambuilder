import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, Divider, HStack, Tag } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { generateOpenSlot, isOpenSlot } from "../../data/heroes";
import { State } from "../../model/common";
import { Composition } from "../../model/compositions";
import { Hero } from "../../model/heroes";
import colors from "../../theme/colors";
import HeroCategory from "../Hero/HeroCategory";
import HeroList from "../Hero/HeroList";
type CompositionBuilderProps = {
  composition: Composition;
  heroStates: Map<string, State>;
  onChange:(value: Array<string>) => void;
};

function CompositionBuilder({ composition, heroStates, onChange }: CompositionBuilderProps) {
  useEffect(() => {
    updateFlexHeroes(getDefaultFlexHeroes());
  }, [composition]);

  const coreHeroes = composition.coreHeroes.heroes.map(hr => hr.hero);
  const [flexHeroes, setFlexHeroes] = useState<Array<Hero>>(getDefaultFlexHeroes());

  function getDefaultFlexHeroes() {
      const defaultFlex = [];
      while (defaultFlex.length < 5 - composition.coreHeroes.heroes.length) {
        defaultFlex.push(generateOpenSlot())
      }
      return defaultFlex;
  }

  function updateFlexHeroes(flexHeroes:Array<Hero>) {
    setFlexHeroes(flexHeroes);
    onChange([...coreHeroes, ...flexHeroes].map(h => h.id));
  }

  function onHeroClick(hero:Hero) {
    // Do nothing if not available
    if (!flexHeroes.includes(hero) && heroStates.get(hero.id) ) {
      return;
    }

    const t = [];
    let done = false;
    for (let i = 0; i < flexHeroes.length; i++) {
      const h = flexHeroes[i];
      if (h.id === hero.id) { // Remove already selected hero
        done = true;
      }
      else if (!done && isOpenSlot(h)) { // Replace first open slot
        t.push(hero);
        done = true;
      }
      else { // Keep other selected hero
        t.push(h);
      }
    }
    // if removed, fill open slots
    while (t.length < 5 - composition.coreHeroes.heroes.length) {
      console.log('fill');
      t.push(generateOpenSlot())
    }
    updateFlexHeroes(t);
  }

  const heroCategories = composition.flexHeroes
    .map(cr => <>
      <Divider/>
      <HeroCategory key={cr.role.id} name={cr.role.name} heroes={cr.heroes.map(hr => hr.hero)} heroStates={heroStates} onClick={onHeroClick}/>
      </>
    );
  
  const tags = composition.tags.map(t => <Tag key={t} size="sm">{t}</Tag>);
  return (
      <AccordionItem>
        <h2>
          <AccordionButton>
            <HStack>
              <Box width="18rem">
                <HeroCategory name={composition.name} tags={tags} heroes={coreHeroes} colorScheme={colors.gold[500]}/>
              </Box>
              <Box width="13rem">
                <HeroList heroes={flexHeroes}/>
              </Box>
            </HStack>
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          {heroCategories}
        </AccordionPanel>
      </AccordionItem>
  );
}

export default CompositionBuilder;
