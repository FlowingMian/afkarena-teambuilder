import { Attribute, Class, Faction, Hero } from "./model";

export const Ezizh: Hero = {
  name: "Ezizh",
  faction: Faction.Hypogean,
  attribute: Attribute.Strength,
  class: Class.Support
};

export const Mehira: Hero = {
  name: "Mehira",
  faction: Faction.Hypogean,
  attribute: Attribute.Intelligence,
  class: Class.Mage
};

export const Zolrath: Hero = {
  name: "Zolrath",
  faction: Faction.Hypogean,
  attribute: Attribute.Agility,
  class: Class.Warrior
};

export const Khazard: Hero = {
  name: "Khazard",
  faction: Faction.Hypogean,
  attribute: Attribute.Intelligence,
  class: Class.Mage
};

export const Mezoth: Hero = {
  name: "Mezoth",
  faction: Faction.Hypogean,
  attribute: Attribute.Strength,
  class: Class.Tank
};

export const Lucretia: Hero = {
  name: "Lucretia",
  faction: Faction.Hypogean,
  attribute: Attribute.Agility,
  class: Class.Ranger
};

export const Mortas: Hero = {
  name: "Mortas",
  faction: Faction.Hypogean,
  attribute: Attribute.Agility,
  class: Class.Support
};

const heroes: Array<Hero> = [
  Ezizh,
  Mehira,
  Zolrath,
  Khazard,
  Mezoth,
  Lucretia,
  Mortas
];
export default heroes;
