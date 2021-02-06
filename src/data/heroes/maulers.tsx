import { Attribute, Class, Faction, Hero } from './model';

export const Brutus: Hero = {
    name: 'Brutus',
    faction: Faction.Mauler,
    attribute: Attribute.Strength,
    class: Class.Tank
};

export const Khasos: Hero = {
    name: 'Khasos',
    faction: Faction.Mauler,
    attribute: Attribute.Strength,
    class: Class.Warrior
};

export const Vurk: Hero = {
    name: 'Vurk',
    faction: Faction.Mauler,
    attribute: Attribute.Agility,
    class: Class.Ranger
};

export const Numisu: Hero = {
    name: 'Numisu',
    faction: Faction.Mauler,
    attribute: Attribute.Intelligence,
    class: Class.Support
};

export const Skreg: Hero = {
    name: 'Skreg',
    faction: Faction.Mauler,
    attribute: Attribute.Strength,
    class: Class.Tank
};

export const Warek: Hero = {
    name: 'Warek',
    faction: Faction.Mauler,
    attribute: Attribute.Strength,
    class: Class.Warrior
};

export const Antandra: Hero = {
    name: 'Antandra',
    faction: Faction.Mauler,
    attribute: Attribute.Agility,
    class: Class.Warrior
};

export const Safiya: Hero = {
    name: 'Safiya',
    faction: Faction.Mauler,
    attribute: Attribute.Intelligence,
    class: Class.Mage
};

export const Satrana: Hero = {
    name: 'Satrana',
    faction: Faction.Mauler,
    attribute: Attribute.Intelligence,
    class: Class.Mage
};

export const Tidus: Hero = {
    name: 'Tidus',
    faction: Faction.Mauler,
    attribute: Attribute.Strength,
    class: Class.Ranger
};

export const Drez: Hero = {
    name: 'Drez',
    faction: Faction.Mauler,
    attribute: Attribute.Agility,
    class: Class.Ranger
};

export const Skriath: Hero = {
    name: 'Skriath',
    faction: Faction.Mauler,
    attribute: Attribute.Intelligence,
    class: Class.Mage
};

export const Anoki: Hero = {
    name: 'Anoki',
    faction: Faction.Mauler,
    attribute: Attribute.Strength,
    class: Class.Tank
};

export const Kren: Hero = {
    name: 'Kren',
    faction: Faction.Mauler,
    attribute: Attribute.Agility,
    class: Class.Ranger
};

const heroes:Array<Hero> = [
    Brutus, 
    Khasos, 
    Vurk, 
    Numisu, 
    Skreg, 
    Warek, 
    Antandra, 
    Safiya, 
    Satrana, 
    Tidus, 
    Drez, 
    Skriath, 
    Anoki, 
    Kren];
export default heroes;