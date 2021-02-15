
import { Box, Heading, HStack, Spacer } from '@chakra-ui/react'
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

  return <HStack alignItems='start'>

    <CharacteristicCheckboxGroup selection={selection.factionIds} characterictics={Factions} onChange={onFactionChange}/>
    <Box>
      <Heading size="md" mb='0.6rem'>Factions</Heading>
      <CharacteristicTable characterictics={Factions}/>
    </Box>

    <Spacer />

    <CharacteristicCheckboxGroup selection={selection.classIds} characterictics={Classes} onChange={onClassChange}/>
    <Box>
      <Heading size="md" mb='0.6rem'>Classes</Heading>
      <CharacteristicTable characterictics={Classes}/>
    </Box>

    <Spacer />

    <CharacteristicCheckboxGroup selection={selection.attributeIds} characterictics={Attributes} onChange={onAttributeChange}/>
    <Box>
      <Heading size="md" mb='0.6rem'>Attributes</Heading>
      <CharacteristicTable characterictics={Attributes}/>
    </Box>

  </HStack>
}

export default HeroCharactericticsSelector;
