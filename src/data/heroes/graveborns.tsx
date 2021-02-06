import { Attribute, Class, Faction, Hero } from './model';

export const Grezhul: Hero = {
    name: 'Grezhul',
    faction: Faction.Graveborn,
    attribute: Attribute.Strength,
    class: Class.Tank
};

export const Shemira: Hero = {
    name: 'Shemira',
    faction: Faction.Graveborn,
    attribute: Attribute.Intelligence,
    class: Class.Mage
};

export const Thoran: Hero = {
    name: 'Thoran',
    faction: Faction.Graveborn,
    attribute: Attribute.Strength,
    class: Class.Tank
};

export const Isabella: Hero = {
    name: 'Isabella',
    faction: Faction.Graveborn,
    attribute: Attribute.Intelligence,
    class: Class.Mage
};

export const Nara: Hero = {
    name: 'Nara',
    faction: Faction.Graveborn,
    attribute: Attribute.Strength,
    class: Class.Warrior
};

export const Ferael: Hero = {
    name: 'Ferael',
    faction: Faction.Graveborn,
    attribute: Attribute.Agility,
    class: Class.Ranger
};

export const Baden: Hero = {
    name: 'Baden',
    faction: Faction.Graveborn,
    attribute: Attribute.Agility,
    class: Class.Warrior
};

export const Kelthur: Hero = {
    name: 'Kelthur',
    faction: Faction.Graveborn,
    attribute: Attribute.Agility,
    class: Class.Ranger
};

export const Silas: Hero = {
    name: 'Silas',
    faction: Faction.Graveborn,
    attribute: Attribute.Intelligence,
    class: Class.Support
};

export const Oden: Hero = {
    name: 'Oden',
    faction: Faction.Graveborn,
    attribute: Attribute.Intelligence,
    class: Class.Mage
};

export const Izold: Hero = {
    name: 'Izold',
    faction: Faction.Graveborn,
    attribute: Attribute.Strength,
    class: Class.Warrior
};

export const Torne: Hero = {
    name: 'Torne',
    faction: Faction.Graveborn,
    attribute: Attribute.Strength,
    class: Class.Tank
};

export const Daimon: Hero = {
    name: 'Daimon',
    faction: Faction.Graveborn,
    attribute: Attribute.Strength,
    class: Class.Tank
};

export const Theowyn: Hero = {
    name: 'Theowyn',
    faction: Faction.Graveborn,
    attribute: Attribute.Agility,
    class: Class.Ranger
};

const heroes:Array<Hero> = [
    Grezhul, 
    Shemira, 
    Thoran, 
    Isabella, 
    Nara,
    Ferael, 
    Baden, 
    Kelthur, 
    Silas,
    Oden, 
    Izold, 
    Torne, 
    Daimon, 
    Theowyn
];
export default heroes;