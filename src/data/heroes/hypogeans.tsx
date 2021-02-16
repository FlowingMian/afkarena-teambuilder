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
  class: Class.Support,
  portraitURL: 'hypogean/ezizh.webp'
};

export const Mehira: Hero = {
  id: "MEHIRA",
  name: "Mehira",
  nickname: [],
  faction: Faction.Hypogean,
  attribute: Attribute.Intelligence,
  class: Class.Mage,
  portraitURL: 'hypogean/mehira.webp'
};

export const Zolrath: Hero = {
  id: "ZOLRATH",
  name: "Zolrath",
  nickname: [],
  faction: Faction.Hypogean,
  attribute: Attribute.Agility,
  class: Class.Warrior,
  portraitURL: 'hypogean/zolrath.webp'
};

export const Khazard: Hero = {
  id: "KHAZARD",
  name: "khazard",
  nickname: [],
  faction: Faction.Hypogean,
  attribute: Attribute.Intelligence,
  class: Class.Mage,
  portraitURL: 'hypogean/khazard.webp'
};

export const Mezoth: Hero = {
  id: "MEZOTH",
  name: "Mezoth",
  nickname: [],
  faction: Faction.Hypogean,
  attribute: Attribute.Strength,
  class: Class.Tank,
  portraitURL: 'hypogean/mezoth.webp'
};

export const Lucretia: Hero = {
  id: "LUCRETIA",
  name: "Lucretia",
  nickname: [],
  faction: Faction.Hypogean,
  attribute: Attribute.Agility,
  class: Class.Ranger,
  portraitURL: 'hypogean/lucretia.webp'
};

export const Mortas: Hero = {
  id: "MORTAS",
  name: "Mortas",
  nickname: [],
  faction: Faction.Hypogean,
  attribute: Attribute.Agility,
  class: Class.Support,
  portraitURL: 'hypogean/mortas.webp'
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
