export enum Faction {
  Lightbearer,
  Mauler,
  Wilder,
  Graveborn,
  Celestial,
  Hypogean,
  Dimensional
}

export enum Attribute {
  Strength,
  Intelligence,
  Agility
}

export enum Class {
  Warrior,
  Tank,
  Ranger,
  Mage,
  Support
}

export interface Hero {
  name: string;
  faction: Faction;
  attribute: Attribute;
  class: Class;
}
