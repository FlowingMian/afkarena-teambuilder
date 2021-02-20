
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Heading, HStack } from '@chakra-ui/react'
import { useState } from 'react';
import { Attributes } from '../../data/characteristics/attributes';
import { Classes } from '../../data/characteristics/classes';
import { Factions } from '../../data/characteristics/factions';
import { Hero } from '../../model/heroes';
import CharacteristicCheckboxGroup from './CharacteristicCheckboxGroup';
import CharacteristicTable from './CharacteristicTable';

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
        && this.attributeIds.includes(hero.attribute.id)
  }
}

type CharactericticsSelectorProps = {
  onChange:(value: HeroCharactericticsSelection) => void;
};

function HeroCharactericticsSelector({onChange}: CharactericticsSelectorProps) {

  const [selection, setSelection] = useState<HeroCharactericticsSelection>(new HeroCharactericticsSelection(
    Factions.map(c => c.id),
    Classes.map(c => c.id),
    Attributes.map(c => c.id)
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
          <CharacteristicCheckboxGroup selection={selection.factionIds} characterictics={Factions} onChange={onFactionChange}/>
          <Box>
            <Heading size="sm" mb='0.6rem'>Factions</Heading>
            <CharacteristicTable characterictics={Factions} displayName={false}/>
          </Box>

          <Box width='0.5rem'/>

          <CharacteristicCheckboxGroup selection={selection.classIds} characterictics={Classes} onChange={onClassChange}/>
          <Box>
            <Heading size="sm" mb='0.6rem'>Classes</Heading>
            <CharacteristicTable characterictics={Classes} displayName={false}/>
          </Box>

          <Box width='0.5rem'/>

          <CharacteristicCheckboxGroup selection={selection.attributeIds} characterictics={Attributes} onChange={onAttributeChange}/>
          <Box>
            <Heading size="sm" mb='0.6rem'>Attributes</Heading>
            <CharacteristicTable characterictics={Attributes} displayName={false}/>
          </Box>
        </HStack>
      </AccordionPanel>
    </AccordionItem>
    </Accordion>
  )
}

export default HeroCharactericticsSelector;
