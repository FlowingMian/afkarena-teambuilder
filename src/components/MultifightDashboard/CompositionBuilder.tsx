import React from 'react';
import { AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Divider, Heading, HStack, Switch, Tag, useDisclosure, VStack } from '@chakra-ui/react';
import { generateOpenSpot, Hero, isOpenSpot } from '../../model/heroes';
import { State } from '../../model/common';
import { Composition, HeroRequirement } from '../../model/compositions';
import HeroCategory from '../Hero/HeroCategory';
import HeroList from '../Hero/HeroList';
import { Fragment } from 'react';
import heroes from '../../data/heroes';
import { isCustomComposition } from '../../model/customComposition';
import LinkPopover from '../Common/LinkPopover';

type CompositionBuilderProps = {
  composition: Composition;
  heroSelection: Map<Hero|HeroRequirement, string>;
  onChange:(value: Array<HeroRequirement>) => void;
};

function CompositionBuilder({ composition, heroSelection, onChange }: CompositionBuilderProps):JSX.Element {

  const { isOpen, onOpen, onClose } = useDisclosure();
  
  const selectedHeroes = Array.from(heroSelection.entries())
    .filter(([,cId]) => cId === composition.id)
    .map(([h]) => h);
  while (selectedHeroes.length < 5) {
    selectedHeroes.push(generateOpenSpot());
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

    const t = selectedHeroes
      .filter(h => !isOpenSpot(h))
      .filter(h => h !== hero);
    if (!selectedHeroes.includes(hero) && t.length < 5) {
      t.push(hero);
    }
    onChange(t);
  }
  
  const heroStates = new Map(Array.from(heroSelection, ([h, cId]) => {
    return [h.id, cId === composition.id ? State.SELECTED : cId === 'DISABLED' ? State.DISABLED : State.LOCKED];
  }));
  
  const compositionHeroes:Array<HeroRequirement> = [];
  const heroCategories = [...isCustomComposition(composition.id) ? [] : [composition.coreHeroes], ...composition.flexHeroes]
    .map(cr => {
      compositionHeroes.push(...cr.heroes);
      return <Fragment key={'f_'+cr.role.id}>
        <Divider key={'d_'+cr.role.id}/>
        <HeroCategory key={'h_'+cr.role.id} name={cr.role.name} heroes={cr.heroes} heroStates={heroStates} onClick={onHeroClick}/>
      </Fragment>;
    });

  if (!isCustomComposition(composition.id)) {
    const remainingHeroes = isOpen ? heroes.filter(h => !compositionHeroes.find(ch => h.id === ch.id)) : [];
    heroCategories.push(
      <Fragment key={'f_REMAINING'}>
        <Divider key={'d_REMAINING'}/>
        <HeroCategory key={'h_REMAINING'} name="Others" 
          adornment={<Switch isChecked={isOpen} onChange={isOpen ? onClose : onOpen}/>} 
          heroes={remainingHeroes} heroStates={heroStates} onClick={onHeroClick}/>
      </Fragment>
    );
  }

  const tags = composition.tags.map(t => <Tag key={t} size="sm">{t}</Tag>);
  return (
    <AccordionItem key={composition.id}>
      <h2>
        <AccordionButton>
          <VStack flex="1" alignItems='start'>
            <HStack>
              <Heading size="xs">{composition.name}</Heading>
              {tags}
              <LinkPopover links={composition.links}/>
            </HStack>
            <HeroList heroes={selectedHeroes} onClick={onHeroClick}/>
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
