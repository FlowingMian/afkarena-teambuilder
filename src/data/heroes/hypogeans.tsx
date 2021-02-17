import { Hero } from "../../model/heroes";
import * as Faction from '../characteristics/factions';
import * as Attribute from '../characteristics/attributes';
import * as Class from '../characteristics/classes';
import { staticDomain } from "../static";

export const Ezizh: Hero = {
  id: "EZIZH",
  name: "Ezizh",
  nickname: [],
  faction: Faction.Hypogean,
  attribute: Attribute.Strength,
  class: Class.Support,
  portraitURL: staticDomain+'hypogean/ezizh.webp'
};

export const Mehira: Hero = {
  id: "MEHIRA",
  name: "Mehira",
  nickname: [],
  faction: Faction.Hypogean,
  attribute: Attribute.Intelligence,
  class: Class.Mage,
  portraitURL: staticDomain+'hypogean/mehira.webp'
};

export const Zolrath: Hero = {
  id: "ZOLRATH",
  name: "Zolrath",
  nickname: [],
  faction: Faction.Hypogean,
  attribute: Attribute.Agility,
  class: Class.Warrior,
  portraitURL: staticDomain+'hypogean/zolrath.webp'
};

export const Khazard: Hero = {
  id: "KHAZARD",
  name: "khazard",
  nickname: [],
  faction: Faction.Hypogean,
  attribute: Attribute.Intelligence,
  class: Class.Mage,
  portraitURL: staticDomain+'hypogean/khazard.webp'
};

export const Mezoth: Hero = {
  id: "MEZOTH",
  name: "Mezoth",
  nickname: [],
  faction: Faction.Hypogean,
  attribute: Attribute.Strength,
  class: Class.Tank,
  portraitURL: staticDomain+'hypogean/mezoth.webp'
};

export const Lucretia: Hero = {
  id: "LUCRETIA",
  name: "Lucretia",
  nickname: [],
  faction: Faction.Hypogean,
  attribute: Attribute.Agility,
  class: Class.Ranger,
  portraitURL: staticDomain+'hypogean/lucretia.webp'
};

export const Mortas: Hero = {
  id: "MORTAS",
  name: "Mortas",
  nickname: [],
  faction: Faction.Hypogean,
  attribute: Attribute.Agility,
  class: Class.Support,
  portraitURL: staticDomain+'hypogean/mortas.webp'
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
