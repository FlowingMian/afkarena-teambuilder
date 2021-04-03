import { Faction, getImageIcon } from './characteristics';

export const Lightbearer:Faction = {
  id: 'LIGTHBEARER',
  name: 'Lightbearer',
  iconURL: getImageIcon('faction/lightbearer.webp'),
};
export const Mauler:Faction = {
  id: 'MAULER',
  name: 'Mauler',
  iconURL: getImageIcon('faction/mauler.webp'),
};
export const Wilder:Faction = {
  id: 'WILDER',
  name: 'Wilder',
  iconURL: getImageIcon('faction/wilder.webp'),
};
export const Graveborn:Faction = {
  id: 'GRAVEBORN',
  name: 'Graveborn',
  iconURL: getImageIcon('faction/graveborn.webp'),
};
export const Celestial:Faction = {
  id: 'CELESTIAL',
  name: 'Celestial',
  iconURL: getImageIcon('faction/celestial.webp'),
};
export const Hypogean:Faction = {
  id: 'HYPOGEAN',
  name: 'Hypogean',
  iconURL: getImageIcon('faction/hypogean.webp'),
};
export const Dimensional:Faction = {
  id: 'DIMENSIONAL',
  name: 'Dimensional',
  iconURL: getImageIcon('faction/dimensional.webp'),
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
