import { Attribute, Class, Faction, Hero } from "./model";

export const Estrilda: Hero = {
  name: "Estrilda",
  faction: Faction.Lightbearer,
  attribute: Attribute.Strength,
  class: Class.Warrior
};

export const Belinda: Hero = {
  name: "Belinda",
  faction: Faction.Lightbearer,
  attribute: Attribute.Intelligence,
  class: Class.Mage
};

export const Raine: Hero = {
  name: "Raine",
  faction: Faction.Lightbearer,
  attribute: Attribute.Agility,
  class: Class.Support
};

export const Fawkes: Hero = {
  name: "Fawkes",
  faction: Faction.Lightbearer,
  attribute: Attribute.Agility,
  class: Class.Ranger
};

export const Lucius: Hero = {
  name: "Lucius",
  faction: Faction.Lightbearer,
  attribute: Attribute.Strength,
  class: Class.Tank
};

export const Thane: Hero = {
  name: "Thane",
  faction: Faction.Lightbearer,
  attribute: Attribute.Agility,
  class: Class.Ranger
};

export const Hendrik: Hero = {
  name: "Hendrik",
  faction: Faction.Lightbearer,
  attribute: Attribute.Strength,
  class: Class.Tank
};

export const Rowan: Hero = {
  name: "Rowan",
  faction: Faction.Lightbearer,
  attribute: Attribute.Intelligence,
  class: Class.Support
};

export const Gwyneth: Hero = {
  name: "Gwyneth",
  faction: Faction.Lightbearer,
  attribute: Attribute.Strength,
  class: Class.Ranger
};

export const Rosaline: Hero = {
  name: "Rosaline",
  faction: Faction.Lightbearer,
  attribute: Attribute.Intelligence,
  class: Class.Support
};

export const Cecilia: Hero = {
  name: "Cecilia",
  faction: Faction.Lightbearer,
  attribute: Attribute.Agility,
  class: Class.Ranger
};

export const Rigby: Hero = {
  name: "Rigby",
  faction: Faction.Lightbearer,
  attribute: Attribute.Strength,
  class: Class.Warrior
};

export const Oscar: Hero = {
  name: "Oscar",
  faction: Faction.Lightbearer,
  attribute: Attribute.Agility,
  class: Class.Ranger
};

const heroes: Array<Hero> = [
  Estrilda,
  Belinda,
  Raine,
  Fawkes,
  Lucius,
  Thane,
  Hendrik,
  Rowan,
  Gwyneth,
  Rosaline,
  Cecilia,
  Rigby,
  Oscar
];
export default heroes;
