import { Attribute, Class, Faction, Hero } from './model';

export const Nemora: Hero = {
    name: 'Nemora',
    faction: Faction.Wilder,
    attribute: Attribute.Intelligence,
    class: Class.Support
};

export const Kaz: Hero = {
    name: 'Kaz',
    faction: Faction.Wilder,
    attribute: Attribute.Agility,
    class: Class.Ranger
};

export const Lyca: Hero = {
    name: 'Lyca',
    faction: Faction.Wilder,
    attribute: Attribute.Agility,
    class: Class.Ranger
};

export const Tasi: Hero = {
    name: 'Tasi',
    faction: Faction.Wilder,
    attribute: Attribute.Intelligence,
    class: Class.Support
};

export const Ulmus: Hero = {
    name: 'Ulmus',
    faction: Faction.Wilder,
    attribute: Attribute.Strength,
    class: Class.Tank
};

export const Seirus: Hero = {
    name: 'Seirus',
    faction: Faction.Wilder,
    attribute: Attribute.Strength,
    class: Class.Warrior
};

export const Eironn: Hero = {
    name: 'Eironn',
    faction: Faction.Wilder,
    attribute: Attribute.Agility,
    class: Class.Ranger
};

export const Gorvo: Hero = {
    name: 'Gorvo',
    faction: Faction.Wilder,
    attribute: Attribute.Strength,
    class: Class.Tank
};

export const Lorsan: Hero = {
    name: 'Lorsan',
    faction: Faction.Wilder,
    attribute: Attribute.Intelligence,
    class: Class.Mage
};

export const Saurus: Hero = {
    name: 'Saurus',
    faction: Faction.Wilder,
    attribute: Attribute.Strength,
    class: Class.Warrior
};

export const Solise: Hero = {
    name: 'Solise',
    faction: Faction.Wilder,
    attribute: Attribute.Intelligence,
    class: Class.Mage
};

export const Pippa: Hero = {
    name: 'Pippa',
    faction: Faction.Wilder,
    attribute: Attribute.Intelligence,
    class: Class.Mage
};

const heroes:Array<Hero> = [
    Nemora, 
    Kaz, 
    Lyca, 
    Tasi,
    Ulmus, 
    Seirus, 
    Eironn, 
    Gorvo, 
    Lorsan, 
    Saurus, 
    Solise, 
    Pippa
];
export default heroes;