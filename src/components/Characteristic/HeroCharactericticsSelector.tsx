
import React, { useContext } from 'react';
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Heading, HStack } from '@chakra-ui/react';
import { useState } from 'react';
import { Hero } from '../../model/heroes';
import CharacteristicCheckboxGroup from './CharacteristicCheckboxGroup';
import CharacteristicTable from './CharacteristicTable';
import { DataContext } from '../../data/DataContext';

export class HeroCharactericticsSelection {
  factionIds:Array<string>;
  classIds:Array<string>;
  attributeIds:Array<string>;

  constructor(factionIds:Array<string>, classIds:Array<string>, attributeIds:Array<string>) {
    this.factionIds = factionIds;
    this.classIds = classIds;
    this.attributeIds = attributeIds;
  }

  accept(hero:Hero):boolean {
    return this.factionIds.includes(hero.faction.id)
        && this.classIds.includes(hero.class.id)
        && this.attributeIds.includes(hero.attribute.id);
  }
}

type CharactericticsSelectorProps = {
  onChange:(value: HeroCharactericticsSelection) => void;
};

function HeroCharactericticsSelector({onChange}: CharactericticsSelectorProps):JSX.Element {

  const {attributes, classes, factions} = useContext(DataContext);
  
  const [selection, setSelection] = useState<HeroCharactericticsSelection>(new HeroCharactericticsSelection(
    factions.map(c => c.id),
    classes.map(c => c.id),
    attributes.map(c => c.id)
  ));

  function onFactionChange(values:Array<string>) {
    const newSelection = new HeroCharactericticsSelection(values, selection.classIds, selection.attributeIds);
    setSelection(newSelection);
    onChange(newSelection);
  }

  function onClassChange(values:Array<string>) {
    const newSelection = new HeroCharactericticsSelection(selection.factionIds, values, selection.attributeIds);
    setSelection(newSelection);
    onChange(newSelection);
  }

  function onAttributeChange(values:Array<string>) {
    const newSelection = new HeroCharactericticsSelection(selection.factionIds, selection.classIds, values);
    setSelection(newSelection);
    onChange(newSelection);
  }

  return (
    <Accordion allowToggle>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
            Filter heroes
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <HStack alignItems='start'>
            <CharacteristicCheckboxGroup selection={selection.factionIds} characterictics={factions} onChange={onFactionChange}/>
            <Box>
              <Heading size="sm" mb='0.6rem'>factions</Heading>
              <CharacteristicTable characterictics={factions}/>
            </Box>

            <Box width='0.5rem'/>

            <CharacteristicCheckboxGroup selection={selection.classIds} characterictics={classes} onChange={onClassChange}/>
            <Box>
              <Heading size="sm" mb='0.6rem'>classes</Heading>
              <CharacteristicTable characterictics={classes}/>
            </Box>

            <Box width='0.5rem'/>

            <CharacteristicCheckboxGroup selection={selection.attributeIds} characterictics={attributes} onChange={onAttributeChange}/>
            <Box>
              <Heading size="sm" mb='0.6rem'>Attributes</Heading>
              <CharacteristicTable characterictics={attributes}/>
            </Box>
          </HStack>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}

export default HeroCharactericticsSelector;
