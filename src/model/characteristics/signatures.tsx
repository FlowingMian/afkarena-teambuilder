/* eslint-disable react/display-name */
import React from 'react';
import { Tag, TagLabel } from '@chakra-ui/tag';
import { getImageIcon, Signature } from './characteristics';

const DEFAULT_SIZE  = 'sm';

export const _0:Signature = {
  id: '0',
  name: '0',
  iconURL: (size=DEFAULT_SIZE) => <Tag size={size} colorScheme='purple' variant='outline'>{getImageIcon('signature/00.png', '1.25rem')}<TagLabel>0</TagLabel></Tag>
};
export const _5:Signature = {
  id: '5',
  name: '5',
  iconURL: (size=DEFAULT_SIZE) => <Tag size={size} colorScheme='purple' variant='outline'>{getImageIcon('signature/00.png', '1.25rem')}<TagLabel>5</TagLabel></Tag>
};
export const _10:Signature = {
  id: '10',
  name: '10',
  iconURL: (size=DEFAULT_SIZE) => <Tag size={size} colorScheme='purple' variant='outline'>{getImageIcon('signature/100.png', '1.25rem')}<TagLabel>10</TagLabel></Tag>
};
export const _15:Signature = {
  id: '15',
  name: '15',
  iconURL: (size=DEFAULT_SIZE) => <Tag size={size} colorScheme='yellow' variant='outline'>{getImageIcon('signature/100.png', '1.25rem')}<TagLabel>15</TagLabel></Tag>
};
export const _20:Signature = {
  id: '20',
  name: '20',
  iconURL: (size=DEFAULT_SIZE) => <Tag size={size} colorScheme='yellow' variant='outline'>{getImageIcon('signature/200.png', '1.25rem')}<TagLabel>20</TagLabel></Tag>
};
export const _25:Signature = {
  id: '25',
  name: '25',
  iconURL: (size=DEFAULT_SIZE) => <Tag size={size} colorScheme='red' variant='outline'>{getImageIcon('signature/200.png', '1.25rem')}<TagLabel>25</TagLabel></Tag>
};
export const _30:Signature = {
  id: '30',
  name: '30',
  iconURL: (size=DEFAULT_SIZE) => <Tag size={size} colorScheme='red' variant='outline'>{getImageIcon('signature/300.png', '1.25rem')}<TagLabel>30</TagLabel></Tag>
};
export const Unknown:Signature = {
  id: 'UNKNOWN',
  name: 'Unknown',
  iconURL: (size=DEFAULT_SIZE) => <Tag size={size} colorScheme='gray' variant='subtle'>Unknown</Tag>
};

export const Signatures:Array<Signature> = [
  _0,
  _5,
  _10,
  _15,
  _20,
  _25,
  _30,
  Unknown
];
