
import React, { useEffect } from 'react';
import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Box, Heading, IconButton, Wrap, WrapItem, useDisclosure, useBreakpointValue } from '@chakra-ui/react';
import { useState } from 'react';
import { FiFilter } from 'react-icons/fi';
import CharacteristicCheckboxGroup from '../Characteristic/CharacteristicCheckboxGroup';
import CharacteristicTable from '../Characteristic/CharacteristicTable';
import { Factions } from '../../model/characteristics/factions';
import { Classes } from '../../model/characteristics/classes';
import { Attributes } from '../../model/characteristics/attributes';
import { CollectionStatuses } from '../../model/characteristics/collectionStatuses';
import { defaultFilter, HeroFilters } from './HeroFilters';
import { Signatures } from '../../model/characteristics/signatures';
import { Artifacts } from '../../model/characteristics/artifacts';
import { sendSelectContent } from '../../useTracking';
import { Furnitures } from '../../model/characteristics/furnitures';
import { Engravings } from '../../model/characteristics/engravings';

type HeroFiltersSelectorProps = {
  onChange:(value: HeroFilters) => void;
};

function HeroHeroFiltersSelector({onChange}: HeroFiltersSelectorProps):JSX.Element {
  
  const useDrawer = useBreakpointValue({ base: true, lg: false });

  const { isOpen, onOpen, onClose } = useDisclosure();

  const itemStyle = {
    padding: '0.5rem 0.2rem',
    width: '100%',
    borderTop: '1px solid grey'
  };
  const headingStyle = {
    size: 'sm',
    mb: '0.6rem',
    ml: '0.1rem',
  };

  const [selection, setSelection] = useState<HeroFilters>(defaultFilter);

  function onCharacteristicChange(characteristic:string, values:Array<string>) {
    const newSelection = {
      ...selection,
      [characteristic]: values, 
    };
    setSelection(newSelection);
    sendSelectContent('filter', [characteristic]);
    onChange(newSelection);
  }

  const content = (
    <Wrap align='stretch'>

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

      <WrapItem {...itemStyle}>
        <CharacteristicCheckboxGroup selection={selection.signatures} characterictics={Signatures} onChange={(v) => onCharacteristicChange('signatures', v)}/>
        <Box>
          <Heading {...headingStyle}>Signature</Heading>
          <CharacteristicTable characterictics={Signatures} displayName={false}/>
        </Box>
      </WrapItem>

      <WrapItem {...itemStyle}>
        <CharacteristicCheckboxGroup selection={selection.furnitures} characterictics={Furnitures} onChange={(v) => onCharacteristicChange('furnitures', v)}/>
        <Box>
          <Heading {...headingStyle}>Furniture</Heading>
          <CharacteristicTable characterictics={Furnitures} displayName={false}/>
        </Box>
      </WrapItem>

      <WrapItem {...itemStyle}>
        <CharacteristicCheckboxGroup selection={selection.engravings} characterictics={Engravings} onChange={(v) => onCharacteristicChange('engravings', v)}/>
        <Box>
          <Heading {...headingStyle}>Engraving</Heading>
          <CharacteristicTable characterictics={Engravings} displayName={false}/>
        </Box>
      </WrapItem>

      <WrapItem {...itemStyle}>
        <CharacteristicCheckboxGroup selection={selection.artifacts} characterictics={Artifacts} onChange={(v) => onCharacteristicChange('artifacts', v)}/>
        <Box>
          <Heading {...headingStyle}>Artifacts</Heading>
          <CharacteristicTable characterictics={Artifacts}/>
        </Box>
      </WrapItem>
    </Wrap>
  );
  
  return useDrawer ? (<>
    <IconButton icon={<FiFilter/>} aria-label='Filter' onClick={onOpen}/>

    <Drawer
      isOpen={isOpen}
      placement="left"
      size="xs"
      onClose={onClose}
    >
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Filter heroes</DrawerHeader>
          <DrawerBody p={1}>
            {content}
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  </>
  ) : content;
}

export default HeroHeroFiltersSelector;
