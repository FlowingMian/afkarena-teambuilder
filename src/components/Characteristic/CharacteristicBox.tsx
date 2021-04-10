import React from 'react';
import { HStack, Text, Tooltip } from '@chakra-ui/react';
import { Characterictic } from '../../model/characteristics/characteristics';

type CharactericticBoxProps = {
  characterictic: Characterictic;
  size?: string;
  displayName?: boolean;
};

function CharactericticBox({ characterictic, size, displayName = false }: CharactericticBoxProps):JSX.Element {
  return (
    <HStack spacing="0.25rem">
      {characterictic.iconURL && <Tooltip label={characterictic.name} aria-label={characterictic.name}>
        {characterictic.iconURL(size)}
      </Tooltip>}
      {displayName && <Text fontSize='xs'>{characterictic.name}</Text>}
    </HStack>
  );
}

export default CharactericticBox;