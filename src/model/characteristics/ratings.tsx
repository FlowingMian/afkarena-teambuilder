import React from 'react';
import { Tag } from '@chakra-ui/tag';
import { Rating } from './characteristics';

export const TOP_TIER:Rating = {
  id: 'TOP_TIER',
  name: 'Top tier',
  iconURL: <Tag size='sm' colorScheme='green' variant='solid'>Top tier</Tag>
};
export const STRONG:Rating = {
  id: 'STRONG',
  name: 'Strong',
  iconURL: <Tag size='sm' colorScheme='green' variant='subtle'>Strong</Tag>
};
export const GOOD:Rating = {
  id: 'GOOD',
  name: 'Good',
  iconURL: <Tag size='sm' colorScheme='green' variant='outline'>Good</Tag>
};
export const AVERAGE:Rating = {
  id: 'AVERAGE',
  name: 'Average',
  iconURL: <Tag size='sm' colorScheme='yellow' variant='subtle'>Average</Tag>
};
export const WEAK:Rating = {
  id: 'WEAK',
  name: 'Weak',
  iconURL: <Tag size='sm' colorScheme='red' variant='subtle'>Weak</Tag>
};
export const VERY_WEAK:Rating = {
  id: 'VERY_WEAK',
  name: 'Very weak',
  iconURL: <Tag size='sm' colorScheme='red' variant='solid'>Very Weak</Tag>
};

export const Ratings:Array<Rating> = [
  TOP_TIER,
  STRONG,
  GOOD,
  AVERAGE,
  WEAK,
  VERY_WEAK
];
