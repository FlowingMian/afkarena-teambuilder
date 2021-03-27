import { CollectionStatus } from './characteristics';

export const Owned:CollectionStatus = {
  id: 'OWNED',
  name: 'Owned',
};
export const NotOwned:CollectionStatus = {
  id: 'NOT_OWNED',
  name: 'Not Owned',
};

export const CollectionStatuses: Array<CollectionStatus> = [
  Owned,
  NotOwned,
];
