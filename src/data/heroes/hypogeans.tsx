import { Hero } from "../../model/heroes";
import * as Faction from '../characteristics/factions';
import * as Attribute from '../characteristics/attributes';
import * as Class from '../characteristics/classes';

export const Ezizh: Hero = {
  id: "EZIZH",
  name: "Ezizh",
  faction: Faction.Hypogean,
  attribute: Attribute.Strength,
  class: Class.Support
};

export const Mehira: Hero = {
  id: "MEHIRA",
  name: "Mehira",
  faction: Faction.Hypogean,
  attribute: Attribute.Intelligence,
  class: Class.Mage
};

export const Zolrath: Hero = {
  id: "ZOLRATH",
  name: "Zolrath",
  faction: Faction.Hypogean,
  attribute: Attribute.Agility,
  class: Class.Warrior
};

export const Khazard: Hero = {
  id: "KAZHARD",
  name: "Khazard",
  faction: Faction.Hypogean,
  attribute: Attribute.Intelligence,
  class: Class.Mage
};

export const Mezoth: Hero = {
  id: "MEZOTH",
  name: "Mezoth",
  faction: Faction.Hypogean,
  attribute: Attribute.Strength,
  class: Class.Tank
};

export const Lucretia: Hero = {
  id: "LUCRETIA",
  name: "Lucretia",
  faction: Faction.Hypogean,
  attribute: Attribute.Agility,
  class: Class.Ranger
};

export const Mortas: Hero = {
  id: "MORTAS",
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
