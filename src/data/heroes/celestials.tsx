import { Attribute, Class, Faction, Hero } from "../../model/heroes";

export const Athalia: Hero = {
  id: "ATHALIA",
  name: "Athalia",
  faction: Faction.Celestial,
  attribute: Attribute.Agility,
  class: Class.Ranger
};

export const ElijahLailah: Hero = {
  id: "ELIJAHLAILAH",
  name: "Elijah & Lailah",
  faction: Faction.Celestial,
  attribute: Attribute.Intelligence,
  class: Class.Support
};

export const Orthos: Hero = {
  id: "ORTHOS",
  name: "Orthos",
  faction: Faction.Celestial,
  attribute: Attribute.Strength,
  class: Class.Tank
};

export const Talene: Hero = {
  id: "TALENE",
  name: "Talene",
  faction: Faction.Celestial,
  attribute: Attribute.Agility,
  class: Class.Support
};

export const Wukong: Hero = {
  id: "WUKONG",
  name: "Wu Kong",
  faction: Faction.Celestial,
  attribute: Attribute.Strength,
  class: Class.Warrior
};

export const Flora: Hero = {
  id: "FLORA",
  name: "Flora",
  faction: Faction.Celestial,
  attribute: Attribute.Intelligence,
  class: Class.Mage
};

export const Zaphrael: Hero = {
  id: "ZAPHRAEL",
  name: "Zaphrael",
  faction: Faction.Celestial,
  attribute: Attribute.Intelligence,
  class: Class.Mage
};

export const Alna: Hero = {
  id: "ALNA",
  name: "Alna",
  faction: Faction.Celestial,
  attribute: Attribute.Agility,
  class: Class.Warrior
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
