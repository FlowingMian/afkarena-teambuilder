/* eslint-disable react/display-name */
import React from 'react';
import { Tag, TagLabel } from '@chakra-ui/tag';
import { Engraving, getImageIcon } from './characteristics';

const DEFAULT_SIZE  = 'sm';

export const _0:Engraving = {
  id: '0',
  name: '0',
  iconURL: (size=DEFAULT_SIZE) => <Tag size={size} colorScheme='gray' variant='solid'>{getImageIcon('star/none.png', '1.25rem')}<TagLabel>0</TagLabel></Tag>
};
export const _1_29:Engraving = {
  id: '1-29',
  name: '1-29',
  iconURL: (size=DEFAULT_SIZE) => <Tag size={size} colorScheme='yellow' variant='solid'>{getImageIcon('star/0.png', '1.25rem')}<TagLabel>1-29</TagLabel></Tag>
};
export const _30:Engraving = {
  id: '30',
  name: '30',
  iconURL: (size=DEFAULT_SIZE) => <Tag size={size} colorScheme='orange' variant='solid'>{getImageIcon('star/30.png', '1.25rem')}<TagLabel>30</TagLabel></Tag>
};
export const _31_59:Engraving = {
  id: '31-59',
  name: '31-59',
  iconURL: (size=DEFAULT_SIZE) => <Tag size={size} colorScheme='orange' variant='solid'>{getImageIcon('star/30.png', '1.25rem')}<TagLabel>31-59</TagLabel></Tag>
};
export const _60:Engraving = {
  id: '60',
  name: '60+',
  iconURL: (size=DEFAULT_SIZE) => <Tag size={size} colorScheme='red' variant='solid'>{getImageIcon('star/60.png', '1.25rem')}<TagLabel>60+</TagLabel></Tag>
};
export const Unknown:Engraving = {
  id: 'UNKNOWN',
  name: 'Unknown',
  iconURL: (size='sm') => <Tag size={size} colorScheme='gray' variant='subtle'>Unknown</Tag>
};

export const Engravings:Array<Engraving> = [
  _0,
  _1_29,
  _30,
  _31_59,
  _60,
  Unknown
];
