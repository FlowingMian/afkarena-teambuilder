import { Attribute, Class, Faction, Hero } from "./model";

export const Athalia: Hero = {
  name: "Athalia",
  faction: Faction.Celestial,
  attribute: Attribute.Agility,
  class: Class.Ranger
};

export const ElijahAndLailah: Hero = {
  name: "Elijah & Lailah (Twins)",
  faction: Faction.Celestial,
  attribute: Attribute.Intelligence,
  class: Class.Support
};

export const Orthos: Hero = {
  name: "Orthos",
  faction: Faction.Celestial,
  attribute: Attribute.Strength,
  class: Class.Tank
};

export const Talene: Hero = {
  name: "Talene",
  faction: Faction.Celestial,
  attribute: Attribute.Agility,
  class: Class.Support
};

export const Wukong: Hero = {
  name: "Wu Kong",
  faction: Faction.Celestial,
  attribute: Attribute.Strength,
  class: Class.Warrior
};

export const Flora: Hero = {
  name: "Flora",
  faction: Faction.Celestial,
  attribute: Attribute.Intelligence,
  class: Class.Mage
};

export const Zaphrael: Hero = {
  name: "Zaphrael",
  faction: Faction.Celestial,
  attribute: Attribute.Intelligence,
  class: Class.Mage
};

export const Alna: Hero = {
  name: "Alna",
  faction: Faction.Celestial,
  attribute: Attribute.Agility,
  class: Class.Warrior
};

const heroes: Array<Hero> = [
  Athalia,
  ElijahAndLailah,
  Orthos,
  Talene,
  Wukong,
  Flora,
  Zaphrael,
  Alna
];
export default heroes;
