import { Hero } from "../../model/heroes";
import * as Faction from '../characteristics/factions';
import * as Attribute from '../characteristics/attributes';
import * as Class from '../characteristics/classes';

export const Nakoruru: Hero = {
  id: "NAKORURU",
  name: "Nakoruru",
  nickname: [],
  faction: Faction.Dimensional,
  attribute: Attribute.Agility,
  class: Class.Ranger
};

export const Arthur: Hero = {
  id: "ARTHUR",
  name: "Arthur",
  nickname: [],
  faction: Faction.Dimensional,
  attribute: Attribute.Strength,
  class: Class.Tank
};

export const Ukyo: Hero = {
  id: "UKYO",
  name: "Ukyo",
  nickname: [],
  faction: Faction.Dimensional,
  attribute: Attribute.Agility,
  class: Class.Warrior
};

export const Ezio: Hero = {
  id: "EZIO",
  name: "Ezio",
  nickname: [],
  faction: Faction.Dimensional,
  attribute: Attribute.Agility,
  class: Class.Ranger
};

export const Albedo: Hero = {
  id: "ALBEBO",
  name: "Albedo",
  nickname: [],
  faction: Faction.Dimensional,
  attribute: Attribute.Strength,
  class: Class.Tank
};

export const Ainz: Hero = {
  id: "AINZ",
  name: "Ainz Ooal Gown",
  nickname: ["Ainz"],
  faction: Faction.Dimensional,
  attribute: Attribute.Intelligence,
  class: Class.Mage
};

export const QUEEN: Hero = {
  id: "QUEEN",
  name: "QUEEN",
  nickname: [],
  faction: Faction.Dimensional,
  attribute: Attribute.Strength,
  class: Class.Warrior
};

export const JOKER: Hero = {
  id: "JOKER",
  name: "JOKER",
  nickname: [],
  faction: Faction.Dimensional,
  attribute: Attribute.Agility,
  class: Class.Ranger
};

const heroes: Array<Hero> = [
  Nakoruru,
  Arthur,
  Ukyo,
  Ezio,
  Albedo,
  Ainz,
  QUEEN,
  JOKER
];
export default heroes;
