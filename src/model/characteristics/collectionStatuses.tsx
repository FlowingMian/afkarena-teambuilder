import React from 'react';
import { CheckIcon, CloseIcon } from '@chakra-ui/icons';
import { CollectionStatus } from './characteristics';

export const Owned:CollectionStatus = {
  id: 'OWNED',
  name: 'Owned',
  iconURL: <CheckIcon color='green.500'/>,
};
export const NotOwned:CollectionStatus = {
  id: 'NOT_OWNED',
  name: 'Not Owned',
  iconURL: <CloseIcon color='red.500'/>,
};

export const CollectionStatuses: Array<CollectionStatus> = [
  Owned,
  NotOwned,
];
