import { Attribute } from "../../model/characteristics";

export const Strength:Attribute = {
    id: 'STRENGTH',
    name: 'Strength'
};
export const Intelligence:Attribute = {
    id: 'INTELLIGENCE',
    name: 'Intelligence'
};
export const Agility:Attribute = {
    id: 'AGILITY',
    name: '  Agility'
};

export const Attributes: Array<Attribute> = [
    Strength,
    Intelligence,
    Agility,
];
