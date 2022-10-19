import { Attribute, getImageIcon } from './characteristics';

const DEFAULT_SIZE  = '1.25rem';

export const Strength:Attribute = {
  id: 'STRENGTH',
  name: 'Strength',
  iconURL: (size=DEFAULT_SIZE) => getImageIcon('characteristics/attribute-strength.png', size),
};
export const Intelligence:Attribute = {
  id: 'INTELLIGENCE',
  name: 'Intelligence',
  iconURL: (size=DEFAULT_SIZE) => getImageIcon('characteristics/attribute-intelligence.png', size),
};
export const Agility:Attribute = {
  id: 'AGILITY',
  name: 'Agility',
  iconURL: (size=DEFAULT_SIZE) => getImageIcon('characteristics/attribute-agility.png', size),
};

export const Attributes: Array<Attribute> = [
  Strength,
  Intelligence,
  Agility,
];
