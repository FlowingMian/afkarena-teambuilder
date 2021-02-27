import { AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Divider, Heading, HStack, Tag, VStack } from "@chakra-ui/react";
import { generateOpenSpot, isOpenSpot } from "../../model/heroes";
import { State } from "../../model/common";
import { Composition, HeroRequirement } from "../../model/compositions";
import HeroCategory from "../Hero/HeroCategory";
import HeroList from "../Hero/HeroList";
import { Fragment } from "react";

type CompositionBuilderProps = {
  composition: Composition;
  heroSelection: Map<HeroRequirement, string>;
  onChange:(value: Array<HeroRequirement>) => void;
};

function CompositionBuilder({ composition, heroSelection, onChange }: CompositionBuilderProps) {

  const coreHeroes = composition.coreHeroes.heroes;
  const flexHeroes = Array.from(heroSelection.entries())
    .filter(([h, cId]) => cId === composition.id)
    .filter(([h, cId]) => !coreHeroes.includes(h))
    .map(([h, cId]) => h);
  while (flexHeroes.length < 5 - composition.coreHeroes.heroes.length) {
    flexHeroes.push(generateOpenSpot())
  }

  function onHeroClick(e:React.MouseEvent, hero:HeroRequirement) {
    // Allow clicking through open spot to toggle Accordion
    if (isOpenSpot(hero)) {
      return;
    }

    e.preventDefault();

    // Do nothing if managed by another composition
    if (Array.from(heroSelection.entries()).find(([h, c]) => h.id === hero.id && c !== composition.id)) {
      return;
    }

    const t:Array<HeroRequirement> = [...coreHeroes];
    let done = false;
    for (let i = 0; i < flexHeroes.length; i++) {
      const h = flexHeroes[i];
      if (h === hero) { // Remove already selected hero
        done = true;
      }
      else if (!done && isOpenSpot(h)) { // Replace first open spot
        t.push(hero);
        done = true;
      }
      else if (!isOpenSpot(h)){ // Keep other selected hero
        t.push(h);
      }
    }
    onChange(t);
  }

  
  const heroStates = new Map(Array.from(heroSelection, ([h, cId]) => [h.id, cId === composition.id ? State.SELECTED : State.LOCKED]));
  const heroCategories = composition.flexHeroes
    .map(cr => {
      return <Fragment key={"f_"+cr.role.id}>
        <Divider key={"d_"+cr.role.id}/>
        <HeroCategory key={"h_"+cr.role.id} name={cr.role.name} heroes={cr.heroes} heroStates={heroStates} onClick={onHeroClick}/>
      </Fragment>
    });
  
  const tags = composition.tags.map(t => <Tag key={t} size="sm">{t}</Tag>);
  return (
      <AccordionItem key={composition.id}>
        <h2>
          <AccordionButton>
            <VStack flex="1" alignItems='start'>
              <HStack>
                <Heading size="xs">{composition.name}</Heading>
                {tags}
              </HStack>
              <HeroList heroes={[...coreHeroes, ...flexHeroes]} onClick={onHeroClick}/>
            </VStack>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel p={1}>
          {heroCategories}
        </AccordionPanel>
      </AccordionItem>
  );
}

export default CompositionBuilder;
