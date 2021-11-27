import { Faction, getImageIcon } from './characteristics';

const DEFAULT_SIZE  = '1.25rem';

export const Lightbearer:Faction = {
  id: 'LIGTHBEARER',
  name: 'Lightbearer',
  iconURL: (size=DEFAULT_SIZE) => getImageIcon('faction/lightbearers.png', size),
};
export const Mauler:Faction = {
  id: 'MAULER',
  name: 'Mauler',
  iconURL: (size=DEFAULT_SIZE) => getImageIcon('faction/maulers.png', size),
};
export const Wilder:Faction = {
  id: 'WILDER',
  name: 'Wilder',
  iconURL: (size=DEFAULT_SIZE) => getImageIcon('faction/wilders.png', size),
};
export const Graveborn:Faction = {
  id: 'GRAVEBORN',
  name: 'Graveborn',
  iconURL: (size=DEFAULT_SIZE) => getImageIcon('faction/graveborns.png', size),
};
export const Celestial:Faction = {
  id: 'CELESTIAL',
  name: 'Celestial',
  iconURL: (size=DEFAULT_SIZE) => getImageIcon('faction/celestials.png', size),
};
export const Hypogean:Faction = {
  id: 'HYPOGEAN',
  name: 'Hypogean',
  iconURL: (size=DEFAULT_SIZE) => getImageIcon('faction/hypogeans.png', size),
};
export const Dimensional:Faction = {
  id: 'DIMENSIONAL',
  name: 'Dimensional',
  iconURL: (size=DEFAULT_SIZE) => getImageIcon('faction/dimensionals.png', size),
};

export const Factions: Array<Faction> = [
  Lightbearer,
  Mauler,
  Wilder,
  Graveborn,
  Celestial,
  Hypogean,
  Dimensional
];
