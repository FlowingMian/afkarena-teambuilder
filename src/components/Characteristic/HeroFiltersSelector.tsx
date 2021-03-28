
import React from 'react';
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Heading, Wrap, WrapItem } from '@chakra-ui/react';
import { useState } from 'react';
import CharacteristicCheckboxGroup from './CharacteristicCheckboxGroup';
import CharacteristicTable from './CharacteristicTable';
import { Factions } from '../../model/characteristics/factions';
import { Classes } from '../../model/characteristics/classes';
import { Attributes } from '../../model/characteristics/attributes';
import { CollectionStatuses } from '../../model/characteristics/collectionStatuses';
import { HeroFilters } from './HeroFilters';

type HeroFiltersSelectorProps = {
  onChange:(value: HeroFilters) => void;
};

function HeroHeroFiltersSelector({onChange}: HeroFiltersSelectorProps):JSX.Element {
  
  const itemStyle = {
    padding: '0.2rem',
    width: '9.2rem', 
    border: '1px solid grey'
  };
  const headingStyle = {
    size: 'sm',
    mb: '0.6rem',
    ml: '0.1rem',
  };

  const [selection, setSelection] = useState<HeroFilters>({
    factionIds: Factions.map(c => c.id),
    classIds: Classes.map(c => c.id),
    attributeIds: Attributes.map(c => c.id),
    collectionStatuses: CollectionStatuses.map(c => c.id),
  });

  function onFactionChange(factionIds:Array<string>) {
    const newSelection = {
      ...selection,
      factionIds, 
    };
    setSelection(newSelection);
    onChange(newSelection);
  }

  function onClassChange(classIds:Array<string>) {
    const newSelection = {
      ...selection,
      classIds, 
    };
    setSelection(newSelection);
    onChange(newSelection);
  }

  function onAttributeChange(attributeIds:Array<string>) {
    const newSelection = {
      ...selection,
      attributeIds, 
    };
    setSelection(newSelection);
    onChange(newSelection);
  }

  function onCollectionStatusChange(collectionStatuses:Array<string>) {
    const newSelection = {
      ...selection,
      collectionStatuses, 
    };
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
          <Wrap alignItems='start'>

            <WrapItem {...itemStyle}>
              <CharacteristicCheckboxGroup selection={selection.factionIds} characterictics={Factions} onChange={onFactionChange}/>
              <Box>
                <Heading {...headingStyle}>Factions</Heading>
                <CharacteristicTable characterictics={Factions}/>
              </Box>
            </WrapItem>

            <WrapItem {...itemStyle}>
              <CharacteristicCheckboxGroup selection={selection.classIds} characterictics={Classes} onChange={onClassChange}/>
              <Box>
                <Heading {...headingStyle}>Classes</Heading>
                <CharacteristicTable characterictics={Classes}/>
              </Box>
            </WrapItem>

            <WrapItem {...itemStyle}>
              <CharacteristicCheckboxGroup selection={selection.attributeIds} characterictics={Attributes} onChange={onAttributeChange}/>
              <Box>
                <Heading {...headingStyle}>Attributes</Heading>
                <CharacteristicTable characterictics={Attributes}/>
              </Box>
            </WrapItem>

            <WrapItem {...itemStyle}>
              <CharacteristicCheckboxGroup selection={selection.collectionStatuses} characterictics={CollectionStatuses} onChange={onCollectionStatusChange}/>
              <Box>
                <Heading {...headingStyle}>Collection</Heading>
                <CharacteristicTable characterictics={CollectionStatuses}/>
              </Box>
            </WrapItem>

          </Wrap>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}

export default HeroHeroFiltersSelector;
