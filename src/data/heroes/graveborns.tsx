import { Hero } from "../../model/heroes";
import * as Faction from '../characteristics/factions';
import * as Attribute from '../characteristics/attributes';
import * as Class from '../characteristics/classes';
export const Grezhul: Hero = {
  id: "GREZHUL",
  name: "Grezhul",
  faction: Faction.Graveborn,
  attribute: Attribute.Strength,
  class: Class.Tank
};

export const Shemira: Hero = {
  id: "SHEMIRA",
  name: "Shemira",
  faction: Faction.Graveborn,
  attribute: Attribute.Intelligence,
  class: Class.Mage
};

export const Thoran: Hero = {
  id: "THORAN",
  name: "Thoran",
  faction: Faction.Graveborn,
  attribute: Attribute.Strength,
  class: Class.Tank
};

export const Isabella: Hero = {
  id: "ISABELLA",
  name: "Isabella",
  faction: Faction.Graveborn,
  attribute: Attribute.Intelligence,
  class: Class.Mage
};

export const Nara: Hero = {
  id: "NARA",
  name: "Nara",
  faction: Faction.Graveborn,
  attribute: Attribute.Strength,
  class: Class.Warrior
};

export const Ferael: Hero = {
  id: "FERAEL",
  name: "Ferael",
  faction: Faction.Graveborn,
  attribute: Attribute.Agility,
  class: Class.Ranger
};

export const Baden: Hero = {
  id: "BADEN",
  name: "Baden",
  faction: Faction.Graveborn,
  attribute: Attribute.Agility,
  class: Class.Warrior
};

export const Kelthur: Hero = {
  id: "KELTHUR",
  name: "Kelthur",
  faction: Faction.Graveborn,
  attribute: Attribute.Agility,
  class: Class.Ranger
};

export const Silas: Hero = {
  id: "SILAS",
  name: "Silas",
  faction: Faction.Graveborn,
  attribute: Attribute.Intelligence,
  class: Class.Support
};

export const Oden: Hero = {
  id: "ODEN",
  name: "Oden",
  faction: Faction.Graveborn,
  attribute: Attribute.Intelligence,
  class: Class.Mage
};

export const Izold: Hero = {
  id: "IZOLD",
  name: "Izold",
  faction: Faction.Graveborn,
  attribute: Attribute.Strength,
  class: Class.Warrior
};

export const Torne: Hero = {
  id: "TORNE",
  name: "Torne",
  faction: Faction.Graveborn,
  attribute: Attribute.Strength,
  class: Class.Tank
};

export const Daimon: Hero = {
  id: "DAIMON",
  name: "Daimon",
  faction: Faction.Graveborn,
  attribute: Attribute.Strength,
  class: Class.Tank
};

export const Theowyn: Hero = {
  id: "THEOWYN",
  name: "Theowyn",
  faction: Faction.Graveborn,
  attribute: Attribute.Agility,
  class: Class.Ranger
};

const heroes: Array<Hero> = [
  Grezhul,
  Shemira,
  Thoran,
  Isabella,
  Nara,
  Ferael,
  Baden,
  Kelthur,
  Silas,
  Oden,
  Izold,
  Torne,
  Daimon,
  Theowyn
];
export default heroes;
