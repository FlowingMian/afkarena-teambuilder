/* eslint-disable react/display-name */
import React from 'react';
import { Tag, TagLabel } from '@chakra-ui/tag';
import { Engraving, getImageIcon } from './characteristics';

const DEFAULT_SIZE  = 'sm';

export const _0:Engraving = {
  id: '0',
  name: '0',
  iconURL: (size=DEFAULT_SIZE) => <Tag size={size} colorScheme='purple' variant='outline'>{getImageIcon('Engraving/X0.png', '1.25rem')}<TagLabel>0</TagLabel></Tag>
};
export const _30:Engraving = {
  id: '5',
  name: '5',
  iconURL: (size=DEFAULT_SIZE) => <Tag size={size} colorScheme='yellow' variant='outline'>{getImageIcon('Engraving/X3.png', '1.25rem')}<TagLabel>0</TagLabel></Tag>
};
export const _60:Engraving = {
  id: '10',
  name: '10',
  iconURL: (size=DEFAULT_SIZE) => <Tag size={size} colorScheme='red' variant='outline'>{getImageIcon('Engraving/X9.png', '1.25rem')}<TagLabel>0</TagLabel></Tag>
};
export const Unknown:Engraving = {
  id: 'UNKNOWN',
  name: 'Unknown',
  iconURL: (size='sm') => <Tag size={size} colorScheme='gray' variant='subtle'>Unknown</Tag>
};

export const Engravings:Array<Engraving> = [
  _0,
  _30,
  _60,
  Unknown
];
