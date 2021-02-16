import { Hero } from "../../model/heroes";
import * as Faction from '../characteristics/factions';
import * as Attribute from '../characteristics/attributes';
import * as Class from '../characteristics/classes';

export const Athalia: Hero = {
  id: "ATHALIA",
  name: "Athalia",
  nickname: [],
  faction: Faction.Celestial,
  attribute: Attribute.Agility,
  class: Class.Ranger,
  portraitURL: 'celestial/athalia.webp'
};

export const ElijahLailah: Hero = {
  id: "ELIJAHLAILAH",
  name: "Elijah & Lailah",
  nickname: ["Twins"],
  faction: Faction.Celestial,
  attribute: Attribute.Intelligence,
  class: Class.Support,
  portraitURL: 'celestial/elijahlailah.webp'
};

export const Orthos: Hero = {
  id: "ORTHOS",
  name: "Orthos",
  nickname: [],
  faction: Faction.Celestial,
  attribute: Attribute.Strength,
  class: Class.Tank,
  portraitURL: 'celestial/orthos.webp'
};

export const Talene: Hero = {
  id: "TALENE",
  name: "Talene",
  nickname: [],
  faction: Faction.Celestial,
  attribute: Attribute.Agility,
  class: Class.Support,
  portraitURL: 'celestial/talene.webp'
};

export const Wukong: Hero = {
  id: "WUKONG",
  name: "Wu Kong",
  nickname: [],
  faction: Faction.Celestial,
  attribute: Attribute.Strength,
  class: Class.Warrior,
  portraitURL: 'celestial/wukong.webp'
};

export const Flora: Hero = {
  id: "FLORA",
  name: "Flora",
  nickname: [],
  faction: Faction.Celestial,
  attribute: Attribute.Intelligence,
  class: Class.Mage,
  portraitURL: 'celestial/flora.webp'
};

export const Zaphrael: Hero = {
  id: "ZAPHRAEL",
  name: "Zaphrael",
  nickname: [],
  faction: Faction.Celestial,
  attribute: Attribute.Intelligence,
  class: Class.Mage,
  portraitURL: 'celestial/zaphrael.webp'
};

export const Alna: Hero = {
  id: "ALNA",
  name: "Alna",
  nickname: [],
  faction: Faction.Celestial,
  attribute: Attribute.Agility,
  class: Class.Warrior,
  portraitURL: 'celestial/alna.webp'
};

const heroes: Array<Hero> = [
  Athalia,
  ElijahLailah,
  Orthos,
  Talene,
  Wukong,
  Flora,
  Zaphrael,
  Alna
];
export default heroes;
