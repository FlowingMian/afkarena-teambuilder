import { Hero } from "../../model/heroes";
import * as Faction from '../characteristics/factions';
import * as Attribute from '../characteristics/attributes';
import * as Class from '../characteristics/classes';

export const Estrilda: Hero = {
  id: "ESTRILDA",
  name: "Estrilda",
  faction: Faction.Lightbearer,
  attribute: Attribute.Strength,
  class: Class.Warrior
};

export const Belinda: Hero = {
  id: "BELINDA",
  name: "Belinda",
  faction: Faction.Lightbearer,
  attribute: Attribute.Intelligence,
  class: Class.Mage
};

export const Raine: Hero = {
  id: "RAINE",
  name: "Raine",
  faction: Faction.Lightbearer,
  attribute: Attribute.Agility,
  class: Class.Support
};

export const Fawkes: Hero = {
  id: "FAWKES",
  name: "Fawkes",
  faction: Faction.Lightbearer,
  attribute: Attribute.Agility,
  class: Class.Ranger
};

export const Lucius: Hero = {
  id: "LUCIUS",
  name: "Lucius",
  faction: Faction.Lightbearer,
  attribute: Attribute.Strength,
  class: Class.Tank
};

export const Thane: Hero = {
  id: "THANE",
  name: "Thane",
  faction: Faction.Lightbearer,
  attribute: Attribute.Agility,
  class: Class.Ranger
};

export const Hendrik: Hero = {
  id: "HENDRIK",
  name: "Hendrik",
  faction: Faction.Lightbearer,
  attribute: Attribute.Strength,
  class: Class.Tank
};

export const Rowan: Hero = {
  id: "ROWAN",
  name: "Rowan",
  faction: Faction.Lightbearer,
  attribute: Attribute.Intelligence,
  class: Class.Support
};

export const Gwyneth: Hero = {
  id: "GWYNETH",
  name: "Gwyneth",
  faction: Faction.Lightbearer,
  attribute: Attribute.Strength,
  class: Class.Ranger
};

export const Rosaline: Hero = {
  id: "ROSALINE",
  name: "Rosaline",
  faction: Faction.Lightbearer,
  attribute: Attribute.Intelligence,
  class: Class.Support
};

export const Cecilia: Hero = {
  id: "CECILIA",
  name: "Cecilia",
  faction: Faction.Lightbearer,
  attribute: Attribute.Agility,
  class: Class.Ranger
};

export const Rigby: Hero = {
  id: "RIGBY",
  name: "Rigby",
  faction: Faction.Lightbearer,
  attribute: Attribute.Strength,
  class: Class.Warrior
};

export const Oscar: Hero = {
  id: "Oscar",
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
