import { CollectionStatus } from './characteristics';
import { staticDomain } from '../common';

export const Owned:CollectionStatus = {
  id: 'OWNED',
  name: 'Owned',
  iconURL: staticDomain+'collectionStatus/owned.png'
};
export const NotOwned:CollectionStatus = {
  id: 'NOT_OWNED',
  name: 'Not Owned',
  iconURL: staticDomain+'collectionStatus/notOwned.png'
};

export const CollectionStatuses: Array<CollectionStatus> = [
  Owned,
  NotOwned,
];
