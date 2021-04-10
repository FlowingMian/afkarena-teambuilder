/* eslint-disable react/display-name */
import React from 'react';
import { Tag } from '@chakra-ui/tag';
import { Rating } from './characteristics';

const DEFAULT_SIZE  = 'sm';

export const TopTier:Rating = {
  id: 'TOP_TIER',
  name: 'Top tier',
  iconURL: (size=DEFAULT_SIZE) => <Tag size={size} colorScheme='green' variant='solid'>Top tier</Tag>
};
export const Strong:Rating = {
  id: 'STRONG',
  name: 'Strong',
  iconURL: (size=DEFAULT_SIZE) => <Tag size={size} colorScheme='green' variant='subtle'>Strong</Tag>
};
export const Good:Rating = {
  id: 'GOOD',
  name: 'Good',
  iconURL: (size=DEFAULT_SIZE) => <Tag size={size} colorScheme='green' variant='outline'>Good</Tag>
};
export const Average:Rating = {
  id: 'AVERAGE',
  name: 'Average',
  iconURL: (size=DEFAULT_SIZE) => <Tag size={size} colorScheme='yellow' variant='subtle'>Average</Tag>
};
export const Weak:Rating = {
  id: 'WEAK',
  name: 'Weak',
  iconURL: (size=DEFAULT_SIZE) => <Tag size={size} colorScheme='red' variant='subtle'>Weak</Tag>
};
export const VeryWeak:Rating = {
  id: 'VERY_WEAK',
  name: 'Very weak',
  iconURL: (size=DEFAULT_SIZE) => <Tag size={size} colorScheme='red' variant='solid'>Very Weak</Tag>
};
export const Unknown:Rating = {
  id: 'UNKNOWN',
  name: 'Unknown',
  iconURL: (size=DEFAULT_SIZE) => <Tag size={size} colorScheme='gray' variant='subtle'>Unknown</Tag>
};

export const Ratings:Array<Rating> = [
  TopTier,
  Strong,
  Good,
  Average,
  Weak,
  VeryWeak,
  Unknown
];
