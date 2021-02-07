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
  id: string;
  name: string;
  faction: Faction;
  attribute: Attribute;
  class: Class;
  portraitURL?: string
}
