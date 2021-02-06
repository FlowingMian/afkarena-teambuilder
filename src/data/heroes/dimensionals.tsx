import { Attribute, Class, Faction, Hero } from './model';

export const Nakoruru: Hero = {
    name: 'Nakoruru',
    faction: Faction.Dimensional,
    attribute: Attribute.Agility,
    class: Class.Ranger
};

export const Arthur: Hero = {
    name: 'Arthur',
    faction: Faction.Dimensional,
    attribute: Attribute.Strength,
    class: Class.Tank
};

export const Ukyo: Hero = {
    name: 'Ukyo',
    faction: Faction.Dimensional,
    attribute: Attribute.Agility,
    class: Class.Warrior
};

export const Ezio: Hero = {
    name: 'Arthur',
    faction: Faction.Dimensional,
    attribute: Attribute.Agility,
    class: Class.Ranger
};

export const Albedo: Hero = {
    name: 'Albedo',
    faction: Faction.Dimensional,
    attribute: Attribute.Strength,
    class: Class.Tank
};

export const Ainz: Hero = {
    name: 'Ainz Ooal Gown',
    faction: Faction.Dimensional,
    attribute: Attribute.Intelligence,
    class: Class.Mage
};

export const QUEEN: Hero = {
    name: 'QUEEN',
    faction: Faction.Dimensional,
    attribute: Attribute.Strength,
    class: Class.Warrior
};

export const JOKER: Hero = {
    name: 'JOKER',
    faction: Faction.Dimensional,
    attribute: Attribute.Agility,
    class: Class.Ranger
};


const heroes:Array<Hero> = [
    Nakoruru, 
    Arthur, 
    Ukyo, 
    Ezio,
    Albedo, 
    Ainz, 
    QUEEN,
    JOKER
];
export default heroes;