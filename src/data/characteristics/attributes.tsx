import { Attribute } from "../../model/characteristics";
import { staticDomain } from "../static";

export const Strength:Attribute = {
    id: 'STRENGTH',
    name: 'Strength',
    iconURL: staticDomain+'attribute/strength.webp'
};
export const Intelligence:Attribute = {
    id: 'INTELLIGENCE',
    name: 'Intelligence',
    iconURL: staticDomain+'attribute/intelligence.webp'
};
export const Agility:Attribute = {
    id: 'AGILITY',
    name: 'Agility',
    iconURL: staticDomain+'attribute/agility.webp'
};

export const Attributes: Array<Attribute> = [
    Strength,
    Intelligence,
    Agility,
];
