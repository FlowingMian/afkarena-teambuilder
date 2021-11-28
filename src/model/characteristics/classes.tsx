import { Class, getImageIcon } from './characteristics';

const DEFAULT_SIZE  = '1.25rem';

export const Warrior:Class = {
  id: 'WARRIOR',
  name: 'Warrior',
  iconURL: (size=DEFAULT_SIZE) => getImageIcon('class/warrior.png', size)
};
export const Tank:Class = {
  id: 'TANK',
  name: 'Tank',
  iconURL: (size=DEFAULT_SIZE) => getImageIcon('class/tank.png', size),
};
export const Ranger:Class = {
  id: 'RANGER',
  name: 'Ranger',
  iconURL: (size=DEFAULT_SIZE) => getImageIcon('class/ranger.png', size),
};
export const Mage:Class = {
  id: 'MAGE',
  name: 'Mage',
  iconURL: (size=DEFAULT_SIZE) => getImageIcon('class/mage.png', size),
};
export const Support:Class = {
  id: 'SUPPORT',
  name: 'Support',
  iconURL: (size=DEFAULT_SIZE) => getImageIcon('class/support.png', size),
};

export const Classes: Array<Class> = [
  Warrior,
  Tank,
  Ranger,
  Mage,
  Support
];
