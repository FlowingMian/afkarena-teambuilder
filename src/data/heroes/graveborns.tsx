import { Hero } from "../../model/heroes";
import * as Faction from '../characteristics/factions';
import * as Attribute from '../characteristics/attributes';
import * as Class from '../characteristics/classes';
export const Grezhul: Hero = {
  id: "GREZHUL",
  name: "Grezhul",
  nickname: [],
  faction: Faction.Graveborn,
  attribute: Attribute.Strength,
  class: Class.Tank,
  portraitURL: 'graveborn/grezhul.webp'
};

export const Shemira: Hero = {
  id: "SHEMIRA",
  name: "Shemira",
  nickname: [],
  faction: Faction.Graveborn,
  attribute: Attribute.Intelligence,
  class: Class.Mage,
  portraitURL: 'graveborn/shemira.webp'
};

export const Thoran: Hero = {
  id: "THORAN",
  name: "Thoran",
  nickname: [],
  faction: Faction.Graveborn,
  attribute: Attribute.Strength,
  class: Class.Tank,
  portraitURL: 'graveborn/thoran.webp'
};

export const Isabella: Hero = {
  id: "ISABELLA",
  name: "Isabella",
  nickname: [],
  faction: Faction.Graveborn,
  attribute: Attribute.Intelligence,
  class: Class.Mage,
  portraitURL: 'graveborn/isabella.webp'
};

export const Nara: Hero = {
  id: "NARA",
  name: "Nara",
  nickname: [],
  faction: Faction.Graveborn,
  attribute: Attribute.Strength,
  class: Class.Warrior,
  portraitURL: 'graveborn/nara.webp'
};

export const Ferael: Hero = {
  id: "FERAEL",
  name: "Ferael",
  nickname: [],
  faction: Faction.Graveborn,
  attribute: Attribute.Agility,
  class: Class.Ranger,
  portraitURL: 'graveborn/ferael.webp'
};

export const Baden: Hero = {
  id: "BADEN",
  name: "Baden",
  nickname: [],
  faction: Faction.Graveborn,
  attribute: Attribute.Agility,
  class: Class.Warrior,
  portraitURL: 'graveborn/baden.webp'
};

export const Kelthur: Hero = {
  id: "KELTHUR",
  name: "Kelthur",
  nickname: [],
  faction: Faction.Graveborn,
  attribute: Attribute.Agility,
  class: Class.Ranger,
  portraitURL: 'graveborn/kelthur.webp'
};

export const Silas: Hero = {
  id: "SILAS",
  name: "Silas",
  nickname: [],
  faction: Faction.Graveborn,
  attribute: Attribute.Intelligence,
  class: Class.Support,
  portraitURL: 'graveborn/silas.webp'
};

export const Oden: Hero = {
  id: "ODEN",
  name: "Oden",
  nickname: [],
  faction: Faction.Graveborn,
  attribute: Attribute.Intelligence,
  class: Class.Mage,
  portraitURL: 'graveborn/oden.webp'
};

export const Izold: Hero = {
  id: "IZOLD",
  name: "Izold",
  nickname: [],
  faction: Faction.Graveborn,
  attribute: Attribute.Strength,
  class: Class.Warrior,
  portraitURL: 'graveborn/izold.webp'
};

export const Torne: Hero = {
  id: "TORNE",
  name: "Torne",
  nickname: [],
  faction: Faction.Graveborn,
  attribute: Attribute.Strength,
  class: Class.Tank,
  portraitURL: 'graveborn/torne.webp'
};

export const Daimon: Hero = {
  id: "DAIMON",
  name: "Daimon",
  nickname: [],
  faction: Faction.Graveborn,
  attribute: Attribute.Strength,
  class: Class.Tank,
  portraitURL: 'graveborn/daimon.webp'
};

export const Theowyn: Hero = {
  id: "THEOWYN",
  name: "Theowyn",
  nickname: [],
  faction: Faction.Graveborn,
  attribute: Attribute.Agility,
  class: Class.Ranger,
  portraitURL: 'graveborn/theowyn.webp'
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
