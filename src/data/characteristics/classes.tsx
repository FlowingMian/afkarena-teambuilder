import { Class } from "../../model/characteristics";
import { staticDomain } from "../static";

export const Warrior:Class = {
    id: 'WARRIOR',
    name: 'Warrior',
    iconURL: staticDomain+'class/warrior.webp'
};
export const Tank:Class = {
    id: 'TANK',
    name: 'Tank',
    iconURL: staticDomain+'class/tank.webp'
};
export const Ranger:Class = {
    id: 'RANGER',
    name: 'Ranger',
    iconURL: staticDomain+'class/ranger.webp'
};
export const Mage:Class = {
    id: 'MAGE',
    name: 'Mage',
    iconURL: staticDomain+'class/mage.webp'
};
export const Support:Class = {
    id: 'SUPPORT',
    name: 'Support',
    iconURL: staticDomain+'class/support.webp'
};

export const Classes: Array<Class> = [
    Warrior,
    Tank,
    Ranger,
    Mage,
    Support
];
