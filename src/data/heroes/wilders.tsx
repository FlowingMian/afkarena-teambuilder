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
  class: Class.Support,
  portraitURL: 'wilder/nemora.webp'
};

export const Kaz: Hero = {
  id: "KAZ",
  name: "Kaz",
  nickname: [],
  faction: Faction.Wilder,
  attribute: Attribute.Agility,
  class: Class.Ranger,
  portraitURL: 'wilder/kaz.webp'
};

export const Lyca: Hero = {
  id: "LYCA",
  name: "Lyca",
  nickname: [],
  faction: Faction.Wilder,
  attribute: Attribute.Agility,
  class: Class.Ranger,
  portraitURL: 'wilder/lyca.webp'
};

export const Tasi: Hero = {
  id: "TASI",
  name: "Tasi",
  nickname: [],
  faction: Faction.Wilder,
  attribute: Attribute.Intelligence,
  class: Class.Support,
  portraitURL: 'wilder/tasi.webp'
};

export const Ulmus: Hero = {
  id: "ULMUS",
  name: "Ulmus",
  nickname: [],
  faction: Faction.Wilder,
  attribute: Attribute.Strength,
  class: Class.Tank,
  portraitURL: 'wilder/ulmus.webp'
};

export const Seirus: Hero = {
  id: "SEIRUS",
  name: "Seirus",
  nickname: [],
  faction: Faction.Wilder,
  attribute: Attribute.Strength,
  class: Class.Warrior,
  portraitURL: 'wilder/seirus.webp'
};

export const Eironn: Hero = {
  id: "EIRONN",
  name: "Eironn",
  nickname: [],
  faction: Faction.Wilder,
  attribute: Attribute.Agility,
  class: Class.Ranger,
  portraitURL: 'wilder/eironn.webp'
};

export const Gorvo: Hero = {
  id: "GORVO",
  name: "Gorvo",
  nickname: [],
  faction: Faction.Wilder,
  attribute: Attribute.Strength,
  class: Class.Tank,
  portraitURL: 'wilder/gorvo.webp'
};

export const Lorsan: Hero = {
  id: "LORSAN",
  name: "Lorsan",
  nickname: [],
  faction: Faction.Wilder,
  attribute: Attribute.Intelligence,
  class: Class.Mage,
  portraitURL: 'wilder/lorsan.webp'
};

export const Saurus: Hero = {
  id: "SAURUS",
  name: "Saurus",
  nickname: [],
  faction: Faction.Wilder,
  attribute: Attribute.Strength,
  class: Class.Warrior,
  portraitURL: 'wilder/saurus.webp'
};

export const Solise: Hero = {
  id: "SOLISE",
  name: "Solise",
  nickname: [],
  faction: Faction.Wilder,
  attribute: Attribute.Intelligence,
  class: Class.Mage,
  portraitURL: 'wilder/solise.webp'
};

export const Pippa: Hero = {
  id: "PIPPA",
  name: "Pippa",
  nickname: [],
  faction: Faction.Wilder,
  attribute: Attribute.Intelligence,
  class: Class.Mage,
  portraitURL: 'wilder/pippa.webp'
};

export const Respen: Hero = {
  id: "RESPEN",
  name: "Respen",
  nickname: [],
  faction: Faction.Wilder,
  attribute: Attribute.Agility,
  class: Class.Ranger,
  portraitURL: 'wilder/respen.webp'
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
