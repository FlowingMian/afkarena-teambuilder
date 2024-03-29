/* eslint-disable react/display-name */
import React from 'react';
import { Tag, TagLabel } from '@chakra-ui/tag';
import { Furniture, getImageIcon } from './characteristics';

const DEFAULT_SIZE  = 'sm';

export const _0:Furniture = {
  id: '0',
  name: '0',
  iconURL: (size=DEFAULT_SIZE) => <Tag size={size} colorScheme='gray' variant='solid'>{getImageIcon('furniture/X0.png', '1.25rem')}<TagLabel>0</TagLabel></Tag>
};
export const _3:Furniture = {
  id: '3',
  name: '3',
  iconURL: (size=DEFAULT_SIZE) => <Tag size={size} colorScheme='yellow' variant='solid'>{getImageIcon('furniture/X3.png', '1.25rem')}<TagLabel>3</TagLabel></Tag>
};
export const _9:Furniture = {
  id: '9',
  name: '9',
  iconURL: (size=DEFAULT_SIZE) => <Tag size={size} colorScheme='red' variant='solid'>{getImageIcon('furniture/X9.png', '1.25rem')}<TagLabel>9</TagLabel></Tag>
};
export const Unknown:Furniture = {
  id: 'UNKNOWN',
  name: 'Unknown',
  iconURL: (size='sm') => <Tag size={size} colorScheme='gray' variant='subtle'>Unknown</Tag>
};

export const Furnitures:Array<Furniture> = [
  _0,
  _3,
  _9,
  Unknown
];
