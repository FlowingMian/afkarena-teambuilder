import { Attribute } from "../../model/characteristics";

export const Strength:Attribute = {
    id: 'STRENGTH',
    name: 'Strength',
    iconURL: 'attribute/strength.webp'
};
export const Intelligence:Attribute = {
    id: 'INTELLIGENCE',
    name: 'Intelligence',
    iconURL: 'attribute/intelligence.webp'
};
export const Agility:Attribute = {
    id: 'AGILITY',
    name: 'Agility',
    iconURL: 'attribute/agility.webp'
};

export const Attributes: Array<Attribute> = [
    Strength,
    Intelligence,
    Agility,
];
