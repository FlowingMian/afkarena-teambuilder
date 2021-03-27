import { Faction } from './characteristics';
import { staticDomain } from '../common';

export const Lightbearer:Faction = {
  id: 'LIGTHBEARER',
  name: 'Lightbearer',
  iconURL: staticDomain+'faction/lightbearer.webp'
};
export const Mauler:Faction = {
  id: 'MAULER',
  name: 'Mauler',
  iconURL: staticDomain+'faction/mauler.webp'
};
export const Wilder:Faction = {
  id: 'WILDER',
  name: 'Wilder',
  iconURL: staticDomain+'faction/wilder.webp'
};
export const Graveborn:Faction = {
  id: 'GRAVEBORN',
  name: 'Graveborn',
  iconURL: staticDomain+'faction/graveborn.webp'
};
export const Celestial:Faction = {
  id: 'CELESTIAL',
  name: 'Celestial',
  iconURL: staticDomain+'faction/celestial.webp'
};
export const Hypogean:Faction = {
  id: 'HYPOGEAN',
  name: 'Hypogean',
  iconURL: staticDomain+'faction/hypogean.webp'
};
export const Dimensional:Faction = {
  id: 'DIMENSIONAL',
  name: 'Dimensional',
  iconURL: staticDomain+'faction/dimensional.webp'
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
