import { Hero } from '../../model/heroes';
import * as Faction from '../characteristics/factions';
import * as Attribute from '../characteristics/attributes';
import * as Class from '../characteristics/classes';
import { staticDomain } from '../static';

export const Nakoruru: Hero = {
  id: 'NAKORURU',
  name: 'Nakoruru',
  nickname: [],
  faction: Faction.Dimensional,
  attribute: Attribute.Agility,
  class: Class.Ranger,
  portraitURL: staticDomain+'dimensional/nakoruru.webp'
};

export const Arthur: Hero = {
  id: 'ARTHUR',
  name: 'Arthur',
  nickname: [],
  faction: Faction.Dimensional,
  attribute: Attribute.Strength,
  class: Class.Tank,
  portraitURL: staticDomain+'dimensional/arthur.webp'
};

export const Ukyo: Hero = {
  id: 'UKYO',
  name: 'Ukyo',
  nickname: [],
  faction: Faction.Dimensional,
  attribute: Attribute.Agility,
  class: Class.Warrior,
  portraitURL: staticDomain+'dimensional/ukyo.webp'
};

export const Ezio: Hero = {
  id: 'EZIO',
  name: 'Ezio',
  nickname: [],
  faction: Faction.Dimensional,
  attribute: Attribute.Agility,
  class: Class.Ranger,
  portraitURL: staticDomain+'dimensional/ezio.webp'
};

export const Albedo: Hero = {
  id: 'ALBEBO',
  name: 'Albedo',
  nickname: [],
  faction: Faction.Dimensional,
  attribute: Attribute.Strength,
  class: Class.Tank,
  portraitURL: staticDomain+'dimensional/albedo.webp'
};

export const Ainz: Hero = {
  id: 'AINZ',
  name: 'Ainz',
  nickname: ['Ainz Ooal Gown'],
  faction: Faction.Dimensional,
  attribute: Attribute.Intelligence,
  class: Class.Mage,
  portraitURL: staticDomain+'dimensional/ainz.webp'
};

export const QUEEN: Hero = {
  id: 'QUEEN',
  name: 'QUEEN',
  nickname: [],
  faction: Faction.Dimensional,
  attribute: Attribute.Strength,
  class: Class.Warrior,
  portraitURL: staticDomain+'dimensional/queen.webp'
};

export const JOKER: Hero = {
  id: 'JOKER',
  name: 'JOKER',
  nickname: [],
  faction: Faction.Dimensional,
  attribute: Attribute.Agility,
  class: Class.Ranger,
  portraitURL: staticDomain+'dimensional/joker.webp'
};

const heroes: Array<Hero> = [
  Nakoruru,
  Arthur,
  Ukyo,
  Ezio,
  Albedo,
  Ainz,
  QUEEN,
  JOKER
];
export default heroes;
