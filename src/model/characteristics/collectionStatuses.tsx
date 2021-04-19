/* eslint-disable react/display-name */
import React from 'react';
import { CollectionStatus } from './characteristics';
import { FiUserCheck, FiUserX } from 'react-icons/fi';
import Icon from '@chakra-ui/icon';

export const Owned:CollectionStatus = {
  id: 'OWNED',
  name: 'Owned',
  iconURL: () =>  <Icon as={FiUserCheck} color='green.500'/>,
};
export const NotOwned:CollectionStatus = {
  id: 'NOT_OWNED',
  name: 'Not Owned',
  iconURL: () => <Icon as={FiUserX} color='red.500'/>,
};

export const CollectionStatuses: Array<CollectionStatus> = [
  Owned,
  NotOwned,
];
