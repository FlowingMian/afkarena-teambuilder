
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
import { Ratings } from '../../model/characteristics/ratings';
import { Signatures } from '../../model/characteristics/signatures';
import { Artifacts } from '../../model/characteristics/artifacts';

type HeroFiltersSelectorProps = {
  onChange:(value: HeroFilters) => void;
  displaySignature?:boolean;
  displayFurniture?:boolean;
  displayArtifact?:boolean;
};

function HeroHeroFiltersSelector({onChange, displaySignature=true, displayFurniture=true, displayArtifact=true}: HeroFiltersSelectorProps):JSX.Element {
  
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
    signatures: Signatures.map(c => c.id),
    furniture3Ratings: Ratings.map(c => c.id),
    furniture9Ratings: Ratings.map(c => c.id),
    artifacts: Artifacts.map(c => c.id),
  });

  function onCharacteristicChange(characteristic:string, values:Array<string>) {
    const newSelection = {
      ...selection,
      [characteristic]: values, 
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
              <CharacteristicCheckboxGroup selection={selection.factionIds} characterictics={Factions} onChange={(v) => onCharacteristicChange('factionIds', v)}/>
              <Box>
                <Heading {...headingStyle}>Factions</Heading>
                <CharacteristicTable characterictics={Factions}/>
              </Box>
            </WrapItem>

            <WrapItem {...itemStyle}>
              <CharacteristicCheckboxGroup selection={selection.classIds} characterictics={Classes} onChange={(v) => onCharacteristicChange('classIds', v)}/>
              <Box>
                <Heading {...headingStyle}>Classes</Heading>
                <CharacteristicTable characterictics={Classes}/>
              </Box>
            </WrapItem>

            <WrapItem {...itemStyle}>
              <CharacteristicCheckboxGroup selection={selection.attributeIds} characterictics={Attributes} onChange={(v) => onCharacteristicChange('attributeIds', v)}/>
              <Box>
                <Heading {...headingStyle}>Attributes</Heading>
                <CharacteristicTable characterictics={Attributes}/>
              </Box>
            </WrapItem>

            <WrapItem {...itemStyle}>
              <CharacteristicCheckboxGroup selection={selection.collectionStatuses} characterictics={CollectionStatuses} onChange={(v) => onCharacteristicChange('collectionStatuses', v)}/>
              <Box>
                <Heading {...headingStyle}>Collection</Heading>
                <CharacteristicTable characterictics={CollectionStatuses}/>
              </Box>
            </WrapItem>

            {displaySignature && <WrapItem {...itemStyle}>
              <CharacteristicCheckboxGroup selection={selection.signatures} characterictics={Signatures} onChange={(v) => onCharacteristicChange('signatures', v)}/>
              <Box>
                <Heading {...headingStyle}>Signature</Heading>
                <CharacteristicTable characterictics={Signatures} displayName={false}/>
              </Box>
            </WrapItem>}

            {displayFurniture && <WrapItem {...itemStyle}>
              <CharacteristicCheckboxGroup selection={selection.furniture3Ratings} characterictics={Ratings} onChange={(v) => onCharacteristicChange('furniture3Ratings', v)}/>
              <Box>
                <Heading {...headingStyle}>Furniture 3</Heading>
                <CharacteristicTable characterictics={Ratings} displayName={false}/>
              </Box>
            </WrapItem>}

            {displayFurniture && <WrapItem {...itemStyle}>
              <CharacteristicCheckboxGroup selection={selection.furniture9Ratings} characterictics={Ratings} onChange={(v) => onCharacteristicChange('furniture9Ratings', v)}/>
              <Box>
                <Heading {...headingStyle}>Furniture 9</Heading>
                <CharacteristicTable characterictics={Ratings} displayName={false}/>
              </Box>
            </WrapItem>}

            {displayArtifact && <WrapItem {...itemStyle} width='18.4rem' >
              <CharacteristicCheckboxGroup selection={selection.artifacts} characterictics={Artifacts} onChange={(v) => onCharacteristicChange('artifacts', v)}/>
              <Box>
                <Heading {...headingStyle}>Artifacts</Heading>
                <CharacteristicTable characterictics={Artifacts}/>
              </Box>
            </WrapItem>}

          </Wrap>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}

export default HeroHeroFiltersSelector;
