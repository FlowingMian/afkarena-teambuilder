import { Hero } from '../../model/heroes';
import * as Faction from '../../model/characteristics/factions';
import * as Attribute from '../../model/characteristics/attributes';
import * as Class from '../../model/characteristics/classes';
import * as Signature from '../../model/characteristics/signatures';
import * as Rating from '../../model/characteristics/ratings';
import { staticDomain } from '../../model/common';

export const Arthur: Hero = {
  id: 'ARTHUR',
  name: 'Arthur',
  nickname: [],
  faction: Faction.Dimensional,
  attribute: Attribute.Strength,
  class: Class.Tank,
  portraitURL: staticDomain+'dimensional/arthur.webp',
  signature: Signature._30,
  furniture: {
    F3: Rating.GOOD,
    F9: Rating.VERY_WEAK,
  },
};

export const Ukyo: Hero = {
  id: 'UKYO',
  name: 'Ukyo',
  nickname: [],
  faction: Faction.Dimensional,
  attribute: Attribute.Agility,
  class: Class.Warrior,
  portraitURL: staticDomain+'dimensional/ukyo.webp',
  signature: Signature._30,
  furniture: {
    F3: Rating.WEAK,
    F9: Rating.WEAK,
  },
};

export const Nakoruru: Hero = {
  id: 'NAKORURU',
  name: 'Nakoruru',
  nickname: [],
  faction: Faction.Dimensional,
  attribute: Attribute.Agility,
  class: Class.Ranger,
  portraitURL: staticDomain+'dimensional/nakoruru.webp',
  signature: Signature._20,
  furniture: {
    F3: Rating.AVERAGE,
    F9: Rating.AVERAGE,
  },
};

export const Ezio: Hero = {
  id: 'EZIO',
  name: 'Ezio',
  nickname: [],
  faction: Faction.Dimensional,
  attribute: Attribute.Agility,
  class: Class.Ranger,
  portraitURL: staticDomain+'dimensional/ezio.webp',
  signature: Signature._20,
  furniture: {
    F3: Rating.AVERAGE,
    F9: Rating.STRONG,
  },
};

export const Albedo: Hero = {
  id: 'ALBEBO',
  name: 'Albedo',
  nickname: [],
  faction: Faction.Dimensional,
  attribute: Attribute.Strength,
  class: Class.Tank,
  portraitURL: staticDomain+'dimensional/albedo.webp',
  signature: Signature._30,
  furniture: {
    F3: Rating.GOOD,
    F9: Rating.WEAK,
  },
};

export const Ainz: Hero = {
  id: 'AINZ',
  name: 'Ainz',
  nickname: ['Ainz Ooal Gown'],
  faction: Faction.Dimensional,
  attribute: Attribute.Intelligence,
  class: Class.Mage,
  portraitURL: staticDomain+'dimensional/ainz.webp',
  signature: Signature._30,
  furniture: {
    F3: Rating.STRONG,
    F9: Rating.TOP_TIER,
  },
};

export const QUEEN: Hero = {
  id: 'QUEEN',
  name: 'QUEEN',
  nickname: [],
  faction: Faction.Dimensional,
  attribute: Attribute.Strength,
  class: Class.Warrior,
  portraitURL: staticDomain+'dimensional/queen.webp',
  signature: Signature._20,
  furniture: {
    F3: Rating.STRONG,
    F9: Rating.AVERAGE,
  },
};

export const JOKER: Hero = {
  id: 'JOKER',
  name: 'JOKER',
  nickname: [],
  faction: Faction.Dimensional,
  attribute: Attribute.Agility,
  class: Class.Ranger,
  portraitURL: staticDomain+'dimensional/joker.webp',
  signature: Signature._20,
  furniture: {
    F3: Rating.GOOD,
    F9: Rating.AVERAGE,
  },
};

const heroes: Array<Hero> = [
  Arthur,
  Ukyo,
  Nakoruru,
  Ezio,
  Albedo,
  Ainz,
  QUEEN,
  JOKER
];
export default heroes;
