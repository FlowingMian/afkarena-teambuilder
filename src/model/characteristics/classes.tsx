import { Class, getImageIcon } from './characteristics';

export const Warrior:Class = {
  id: 'WARRIOR',
  name: 'Warrior',
  iconURL: getImageIcon('class/warrior.webp')
};
export const Tank:Class = {
  id: 'TANK',
  name: 'Tank',
  iconURL: getImageIcon('class/tank.webp'),
};
export const Ranger:Class = {
  id: 'RANGER',
  name: 'Ranger',
  iconURL: getImageIcon('class/ranger.webp'),
};
export const Mage:Class = {
  id: 'MAGE',
  name: 'Mage',
  iconURL: getImageIcon('class/mage.webp'),
};
export const Support:Class = {
  id: 'SUPPORT',
  name: 'Support',
  iconURL: getImageIcon('class/support.webp'),
};

export const Classes: Array<Class> = [
  Warrior,
  Tank,
  Ranger,
  Mage,
  Support
];
