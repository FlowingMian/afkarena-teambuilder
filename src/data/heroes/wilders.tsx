import { Hero } from "../../model/heroes";
import * as Faction from '../characteristics/factions';
import * as Attribute from '../characteristics/attributes';
import * as Class from '../characteristics/classes';

export const Nemora: Hero = {
  id: "NEMORA",
  name: "Nemora",
  nickname: [],
  faction: Faction.Wilder,
  attribute: Attribute.Intelligence,
  class: Class.Support
};

export const Kaz: Hero = {
  id: "KAZ",
  name: "Kaz",
  nickname: [],
  faction: Faction.Wilder,
  attribute: Attribute.Agility,
  class: Class.Ranger
};

export const Lyca: Hero = {
  id: "LYCA",
  name: "Lyca",
  nickname: [],
  faction: Faction.Wilder,
  attribute: Attribute.Agility,
  class: Class.Ranger
};

export const Tasi: Hero = {
  id: "TASI",
  name: "Tasi",
  nickname: [],
  faction: Faction.Wilder,
  attribute: Attribute.Intelligence,
  class: Class.Support
};

export const Ulmus: Hero = {
  id: "ULMUS",
  name: "Ulmus",
  nickname: [],
  faction: Faction.Wilder,
  attribute: Attribute.Strength,
  class: Class.Tank
};

export const Seirus: Hero = {
  id: "SEIRUS",
  name: "Seirus",
  nickname: [],
  faction: Faction.Wilder,
  attribute: Attribute.Strength,
  class: Class.Warrior
};

export const Eironn: Hero = {
  id: "EIRONN",
  name: "Eironn",
  nickname: [],
  faction: Faction.Wilder,
  attribute: Attribute.Agility,
  class: Class.Ranger
};

export const Gorvo: Hero = {
  id: "GORVO",
  name: "Gorvo",
  nickname: [],
  faction: Faction.Wilder,
  attribute: Attribute.Strength,
  class: Class.Tank
};

export const Lorsan: Hero = {
  id: "LORSAN",
  name: "Lorsan",
  nickname: [],
  faction: Faction.Wilder,
  attribute: Attribute.Intelligence,
  class: Class.Mage
};

export const Saurus: Hero = {
  id: "SAURUS",
  name: "Saurus",
  nickname: [],
  faction: Faction.Wilder,
  attribute: Attribute.Strength,
  class: Class.Warrior
};

export const Solise: Hero = {
  id: "SOLISE",
  name: "Solise",
  nickname: [],
  faction: Faction.Wilder,
  attribute: Attribute.Intelligence,
  class: Class.Mage
};

export const Pippa: Hero = {
  id: "PIPPA",
  name: "Pippa",
  nickname: [],
  faction: Faction.Wilder,
  attribute: Attribute.Intelligence,
  class: Class.Mage
};

export const Respen: Hero = {
  id: "RESPEN",
  name: "Respen",
  nickname: [],
  faction: Faction.Wilder,
  attribute: Attribute.Agility,
  class: Class.Ranger
};

const heroes: Array<Hero> = [
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
  Pippa,
  Respen
];
export default heroes;
