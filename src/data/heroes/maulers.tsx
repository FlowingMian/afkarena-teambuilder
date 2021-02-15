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
  class: Class.Tank
};

export const Khasos: Hero = {
  id: "KHASOS",
  name: "Khasos",
  nickname: [],
  faction: Faction.Mauler,
  attribute: Attribute.Strength,
  class: Class.Warrior
};

export const Vurk: Hero = {
  id: "VURK",
  name: "Vurk",
  nickname: [],
  faction: Faction.Mauler,
  attribute: Attribute.Agility,
  class: Class.Ranger
};

export const Numisu: Hero = {
  id: "NUMISU",
  name: "Numisu",
  nickname: [],
  faction: Faction.Mauler,
  attribute: Attribute.Intelligence,
  class: Class.Support
};

export const Skreg: Hero = {
  id: "SKREG",
  name: "Skreg",
  nickname: [],
  faction: Faction.Mauler,
  attribute: Attribute.Strength,
  class: Class.Tank
};

export const Warek: Hero = {
  id: "WAREK",
  name: "Warek",
  nickname: [],
  faction: Faction.Mauler,
  attribute: Attribute.Strength,
  class: Class.Warrior
};

export const Antandra: Hero = {
  id: "ANTANDRA",
  name: "Antandra",
  nickname: [],
  faction: Faction.Mauler,
  attribute: Attribute.Agility,
  class: Class.Warrior
};

export const Safiya: Hero = {
  id: "SAFIYA",
  name: "Safiya",
  nickname: [],
  faction: Faction.Mauler,
  attribute: Attribute.Intelligence,
  class: Class.Mage
};

export const Satrana: Hero = {
  id: "SATRANA",
  name: "Satrana",
  nickname: [],
  faction: Faction.Mauler,
  attribute: Attribute.Intelligence,
  class: Class.Mage
};

export const Tidus: Hero = {
  id: "TIDUS",
  name: "Tidus",
  nickname: [],
  faction: Faction.Mauler,
  attribute: Attribute.Strength,
  class: Class.Ranger
};

export const Drez: Hero = {
  id: "DREZ",
  name: "Drez",
  nickname: [],
  faction: Faction.Mauler,
  attribute: Attribute.Agility,
  class: Class.Ranger
};

export const Skriath: Hero = {
  id: "SKRIATH",
  name: "Skriath",
  nickname: [],
  faction: Faction.Mauler,
  attribute: Attribute.Intelligence,
  class: Class.Mage
};

export const Anoki: Hero = {
  id: "ANOKI",
  name: "Anoki",
  nickname: [],
  faction: Faction.Mauler,
  attribute: Attribute.Strength,
  class: Class.Tank
};

export const Kren: Hero = {
  id: "KREN",
  name: "Kren",
  nickname: [],
  faction: Faction.Mauler,
  attribute: Attribute.Agility,
  class: Class.Ranger
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
