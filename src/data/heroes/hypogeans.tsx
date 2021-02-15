import { Hero } from "../../model/heroes";
import * as Faction from '../characteristics/factions';
import * as Attribute from '../characteristics/attributes';
import * as Class from '../characteristics/classes';

export const Ezizh: Hero = {
  id: "EZIZH",
  name: "Ezizh",
  nickname: [],
  faction: Faction.Hypogean,
  attribute: Attribute.Strength,
  class: Class.Support
};

export const Mehira: Hero = {
  id: "MEHIRA",
  name: "Mehira",
  nickname: [],
  faction: Faction.Hypogean,
  attribute: Attribute.Intelligence,
  class: Class.Mage
};

export const Zolrath: Hero = {
  id: "ZOLRATH",
  name: "Zolrath",
  nickname: [],
  faction: Faction.Hypogean,
  attribute: Attribute.Agility,
  class: Class.Warrior
};

export const Khazard: Hero = {
  id: "KAZHARD",
  name: "Khazard",
  nickname: [],
  faction: Faction.Hypogean,
  attribute: Attribute.Intelligence,
  class: Class.Mage
};

export const Mezoth: Hero = {
  id: "MEZOTH",
  name: "Mezoth",
  nickname: [],
  faction: Faction.Hypogean,
  attribute: Attribute.Strength,
  class: Class.Tank
};

export const Lucretia: Hero = {
  id: "LUCRETIA",
  name: "Lucretia",
  nickname: [],
  faction: Faction.Hypogean,
  attribute: Attribute.Agility,
  class: Class.Ranger
};

export const Mortas: Hero = {
  id: "MORTAS",
  name: "Mortas",
  nickname: [],
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
