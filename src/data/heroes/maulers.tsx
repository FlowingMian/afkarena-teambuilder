import { Hero } from "../../model/heroes";
import * as Faction from '../characteristics/factions';
import * as Attribute from '../characteristics/attributes';
import * as Class from '../characteristics/classes';

export const Brutus: Hero = {
  id: "BRUTUS",
  name: "Brutus",
  nickname: [],
  faction: Faction.Mauler,
  attribute: Attribute.Strength,
  class: Class.Tank,
  portraitURL: 'mauler/brutus.webp'
};

export const Khasos: Hero = {
  id: "KHASOS",
  name: "Khasos",
  nickname: [],
  faction: Faction.Mauler,
  attribute: Attribute.Strength,
  class: Class.Warrior,
  portraitURL: 'mauler/khasos.webp'
};

export const Vurk: Hero = {
  id: "VURK",
  name: "Vurk",
  nickname: [],
  faction: Faction.Mauler,
  attribute: Attribute.Agility,
  class: Class.Ranger,
  portraitURL: 'mauler/vurk.webp'
};

export const Numisu: Hero = {
  id: "NUMISU",
  name: "Numisu",
  nickname: [],
  faction: Faction.Mauler,
  attribute: Attribute.Intelligence,
  class: Class.Support,
  portraitURL: 'mauler/numisu.webp'
};

export const Skreg: Hero = {
  id: "SKREG",
  name: "Skreg",
  nickname: [],
  faction: Faction.Mauler,
  attribute: Attribute.Strength,
  class: Class.Tank,
  portraitURL: 'mauler/skreg.webp'
};

export const Warek: Hero = {
  id: "WAREK",
  name: "Warek",
  nickname: [],
  faction: Faction.Mauler,
  attribute: Attribute.Strength,
  class: Class.Warrior,
  portraitURL: 'mauler/warek.webp'
};

export const Antandra: Hero = {
  id: "ANTANDRA",
  name: "Antandra",
  nickname: [],
  faction: Faction.Mauler,
  attribute: Attribute.Agility,
  class: Class.Warrior,
  portraitURL: 'mauler/antandra.webp'
};

export const Safiya: Hero = {
  id: "SAFIYA",
  name: "Safiya",
  nickname: [],
  faction: Faction.Mauler,
  attribute: Attribute.Intelligence,
  class: Class.Mage,
  portraitURL: 'mauler/safiya.webp'
};

export const Satrana: Hero = {
  id: "SATRANA",
  name: "Satrana",
  nickname: [],
  faction: Faction.Mauler,
  attribute: Attribute.Intelligence,
  class: Class.Mage,
  portraitURL: 'mauler/satrana.webp'
};

export const Tidus: Hero = {
  id: "TIDUS",
  name: "Tidus",
  nickname: [],
  faction: Faction.Mauler,
  attribute: Attribute.Strength,
  class: Class.Ranger,
  portraitURL: 'mauler/tidus.webp'
};

export const Drez: Hero = {
  id: "DREZ",
  name: "Drez",
  nickname: [],
  faction: Faction.Mauler,
  attribute: Attribute.Agility,
  class: Class.Ranger,
  portraitURL: 'mauler/drez.webp'
};

export const Skriath: Hero = {
  id: "SKRIATH",
  name: "Skriath",
  nickname: [],
  faction: Faction.Mauler,
  attribute: Attribute.Intelligence,
  class: Class.Mage,
  portraitURL: 'mauler/skriath.webp'
};

export const Anoki: Hero = {
  id: "ANOKI",
  name: "Anoki",
  nickname: [],
  faction: Faction.Mauler,
  attribute: Attribute.Strength,
  class: Class.Tank,
  portraitURL: 'mauler/anoki.webp'
};

export const Kren: Hero = {
  id: "KREN",
  name: "Kren",
  nickname: [],
  faction: Faction.Mauler,
  attribute: Attribute.Agility,
  class: Class.Ranger,
  portraitURL: 'mauler/kren.webp'
};

const heroes: Array<Hero> = [
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
  Kren
];
export default heroes;
