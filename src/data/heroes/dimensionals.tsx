import { Hero } from "../../model/heroes";
import * as Faction from '../characteristics/factions';
import * as Attribute from '../characteristics/attributes';
import * as Class from '../characteristics/classes';

export const Nakoruru: Hero = {
  id: "NAKORURU",
  name: "Nakoruru",
  faction: Faction.Dimensional,
  attribute: Attribute.Agility,
  class: Class.Ranger
};

export const Arthur: Hero = {
  id: "ARTHUR",
  name: "Arthur",
  faction: Faction.Dimensional,
  attribute: Attribute.Strength,
  class: Class.Tank
};

export const Ukyo: Hero = {
  id: "UKYO",
  name: "Ukyo",
  faction: Faction.Dimensional,
  attribute: Attribute.Agility,
  class: Class.Warrior
};

export const Ezio: Hero = {
  id: "EZIO",
  name: "Ezio",
  faction: Faction.Dimensional,
  attribute: Attribute.Agility,
  class: Class.Ranger
};

export const Albedo: Hero = {
  id: "ALBEBO",
  name: "Albedo",
  faction: Faction.Dimensional,
  attribute: Attribute.Strength,
  class: Class.Tank
};

export const Ainz: Hero = {
  id: "AINZ",
  name: "Ainz Ooal Gown",
  faction: Faction.Dimensional,
  attribute: Attribute.Intelligence,
  class: Class.Mage
};

export const QUEEN: Hero = {
  id: "QUEEN",
  name: "QUEEN",
  faction: Faction.Dimensional,
  attribute: Attribute.Strength,
  class: Class.Warrior
};

export const JOKER: Hero = {
  id: "JOKER",
  name: "JOKER",
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
