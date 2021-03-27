import { Hero } from '../../model/heroes';
import * as Faction from '../../model/characteristics/factions';
import * as Attribute from '../../model/characteristics/attributes';
import * as Class from '../../model/characteristics/classes';
import { staticDomain } from '../../model/common';

export const Estrilda: Hero = {
  id: 'ESTRILDA',
  name: 'Estrilda',
  nickname: [],
  faction: Faction.Lightbearer,
  attribute: Attribute.Strength,
  class: Class.Warrior,
  portraitURL: staticDomain+'lightbearer/estrilda.webp'
};

export const Belinda: Hero = {
  id: 'BELINDA',
  name: 'Belinda',
  nickname: [],
  faction: Faction.Lightbearer,
  attribute: Attribute.Intelligence,
  class: Class.Mage,
  portraitURL: staticDomain+'lightbearer/belinda.webp'
};

export const Raine: Hero = {
  id: 'RAINE',
  name: 'Raine',
  nickname: [],
  faction: Faction.Lightbearer,
  attribute: Attribute.Agility,
  class: Class.Support,
  portraitURL: staticDomain+'lightbearer/raine.webp'
};

export const Fawkes: Hero = {
  id: 'FAWKES',
  name: 'Fawkes',
  nickname: [],
  faction: Faction.Lightbearer,
  attribute: Attribute.Agility,
  class: Class.Ranger,
  portraitURL: staticDomain+'lightbearer/fawkes.webp'
};

export const Lucius: Hero = {
  id: 'LUCIUS',
  name: 'Lucius',
  nickname: [],
  faction: Faction.Lightbearer,
  attribute: Attribute.Strength,
  class: Class.Tank,
  portraitURL: staticDomain+'lightbearer/lucius.webp'
};

export const Thane: Hero = {
  id: 'THANE',
  name: 'Thane',
  nickname: [],
  faction: Faction.Lightbearer,
  attribute: Attribute.Agility,
  class: Class.Ranger,
  portraitURL: staticDomain+'lightbearer/thane.webp'
};

export const Hendrik: Hero = {
  id: 'HENDRIK',
  name: 'Hendrik',
  nickname: [],
  faction: Faction.Lightbearer,
  attribute: Attribute.Strength,
  class: Class.Tank,
  portraitURL: staticDomain+'lightbearer/hendrik.webp'
};

export const Rowan: Hero = {
  id: 'ROWAN',
  name: 'Rowan',
  nickname: [],
  faction: Faction.Lightbearer,
  attribute: Attribute.Intelligence,
  class: Class.Support,
  portraitURL: staticDomain+'lightbearer/rowan.webp'
};

export const Gwyneth: Hero = {
  id: 'GWYNETH',
  name: 'Gwyneth',
  nickname: [],
  faction: Faction.Lightbearer,
  attribute: Attribute.Strength,
  class: Class.Ranger,
  portraitURL: staticDomain+'lightbearer/gwyneth.webp'
};

export const Rosaline: Hero = {
  id: 'ROSALINE',
  name: 'Rosaline',
  nickname: [],
  faction: Faction.Lightbearer,
  attribute: Attribute.Intelligence,
  class: Class.Support,
  portraitURL: staticDomain+'lightbearer/rosaline.webp'
};

export const Cecilia: Hero = {
  id: 'CECILIA',
  name: 'Cecilia',
  nickname: [],
  faction: Faction.Lightbearer,
  attribute: Attribute.Agility,
  class: Class.Ranger,
  portraitURL: staticDomain+'lightbearer/cecilia.webp'
};

export const Rigby: Hero = {
  id: 'RIGBY',
  name: 'Rigby',
  nickname: [],
  faction: Faction.Lightbearer,
  attribute: Attribute.Strength,
  class: Class.Warrior,
  portraitURL: staticDomain+'lightbearer/rigby.webp'
};

export const Oscar: Hero = {
  id: 'Oscar',
  name: 'Oscar',
  nickname: [],
  faction: Faction.Lightbearer,
  attribute: Attribute.Agility,
  class: Class.Ranger,
  portraitURL: staticDomain+'lightbearer/oscar.webp'
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
