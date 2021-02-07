import { Attribute, Class, Faction, Hero } from "../../model/heroes";

export const Nemora: Hero = {
  id: "NEMORA",
  name: "Nemora",
  faction: Faction.Wilder,
  attribute: Attribute.Intelligence,
  class: Class.Support
};

export const Kaz: Hero = {
  id: "KAZ",
  name: "Kaz",
  faction: Faction.Wilder,
  attribute: Attribute.Agility,
  class: Class.Ranger
};

export const Lyca: Hero = {
  id: "LYCA",
  name: "Lyca",
  faction: Faction.Wilder,
  attribute: Attribute.Agility,
  class: Class.Ranger
};

export const Tasi: Hero = {
  id: "TASI",
  name: "Tasi",
  faction: Faction.Wilder,
  attribute: Attribute.Intelligence,
  class: Class.Support
};

export const Ulmus: Hero = {
  id: "ULMUS",
  name: "Ulmus",
  faction: Faction.Wilder,
  attribute: Attribute.Strength,
  class: Class.Tank
};

export const Seirus: Hero = {
  id: "SEIRUS",
  name: "Seirus",
  faction: Faction.Wilder,
  attribute: Attribute.Strength,
  class: Class.Warrior
};

export const Eironn: Hero = {
  id: "EIRONN",
  name: "Eironn",
  faction: Faction.Wilder,
  attribute: Attribute.Agility,
  class: Class.Ranger
};

export const Gorvo: Hero = {
  id: "GORVO",
  name: "Gorvo",
  faction: Faction.Wilder,
  attribute: Attribute.Strength,
  class: Class.Tank
};

export const Lorsan: Hero = {
  id: "LORSAN",
  name: "Lorsan",
  faction: Faction.Wilder,
  attribute: Attribute.Intelligence,
  class: Class.Mage
};

export const Saurus: Hero = {
  id: "SAURUS",
  name: "Saurus",
  faction: Faction.Wilder,
  attribute: Attribute.Strength,
  class: Class.Warrior
};

export const Solise: Hero = {
  id: "SOLISE",
  name: "Solise",
  faction: Faction.Wilder,
  attribute: Attribute.Intelligence,
  class: Class.Mage
};

export const Pippa: Hero = {
  id: "PIPPA",
  name: "Pippa",
  faction: Faction.Wilder,
  attribute: Attribute.Intelligence,
  class: Class.Mage
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
  Pippa
];
export default heroes;
