import { Attribute, getImageIcon } from './characteristics';

export const Strength:Attribute = {
  id: 'STRENGTH',
  name: 'Strength',
  iconURL: getImageIcon('attribute/strength.webp'),
};
export const Intelligence:Attribute = {
  id: 'INTELLIGENCE',
  name: 'Intelligence',
  iconURL: getImageIcon('attribute/intelligence.webp'),
};
export const Agility:Attribute = {
  id: 'AGILITY',
  name: 'Agility',
  iconURL: getImageIcon('attribute/agility.webp'),
};

export const Attributes: Array<Attribute> = [
  Strength,
  Intelligence,
  Agility,
];
