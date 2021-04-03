import React from 'react';
import { HStack, Text, Tooltip } from '@chakra-ui/react';
import { Characterictic } from '../../model/characteristics/characteristics';

type CharactericticBoxProps = {
  characterictic: Characterictic;
  displayName?: boolean;
};

function CharactericticBox({ characterictic, displayName = false }: CharactericticBoxProps):JSX.Element {
  return (
    <HStack spacing="0.25rem">
      {characterictic.iconURL && <Tooltip label={characterictic.name} aria-label={characterictic.name}>
        {characterictic.iconURL}
      </Tooltip>}
      {displayName && <Text fontSize='xs'>{characterictic.name}</Text>}
    </HStack>
  );
}

export default CharactericticBox;