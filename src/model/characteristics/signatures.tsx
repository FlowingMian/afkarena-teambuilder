import React from 'react';
import { Tag } from '@chakra-ui/tag';
import { Rating } from './characteristics';

export const _5:Rating = {
  id: '5',
  name: '5',
  iconURL: <Tag size='sm' colorScheme='purple' variant='solid'>5</Tag>
};
export const _10:Rating = {
  id: '10',
  name: '10',
  iconURL: <Tag size='sm' colorScheme='purple' variant='solid'>10</Tag>
};
export const _15:Rating = {
  id: '15',
  name: '15',
  iconURL: <Tag size='sm' colorScheme='yellow' variant='solid'>15</Tag>
};
export const _20:Rating = {
  id: '20',
  name: '20',
  iconURL: <Tag size='sm' colorScheme='yellow' variant='solid'>20</Tag>
};
export const _25:Rating = {
  id: '25',
  name: '25',
  iconURL: <Tag size='sm' colorScheme='red' variant='solid'>25</Tag>
};
export const _30:Rating = {
  id: '30',
  name: '30',
  iconURL: <Tag size='sm' colorScheme='red' variant='solid'>30</Tag>
};
export const UNKNOWN:Rating = {
  id: 'UNKNOWN',
  name: 'Unknown',
  iconURL: <Tag size='sm' colorScheme='gray' variant='subtle'>Unknown</Tag>
};

export const Signatures:Array<Rating> = [
  _5,
  _10,
  _15,
  _20,
  _25,
  _30,
  UNKNOWN
];
