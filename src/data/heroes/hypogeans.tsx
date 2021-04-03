import { Hero } from '../../model/heroes';
import * as Faction from '../../model/characteristics/factions';
import * as Attribute from '../../model/characteristics/attributes';
import * as Class from '../../model/characteristics/classes';
import * as Signature from '../../model/characteristics/signatures';
import * as Rating from '../../model/characteristics/ratings';
import { staticDomain } from '../../model/common';

export const Ezizh: Hero = {
  id: 'EZIZH',
  name: 'Ezizh',
  nickname: [],
  faction: Faction.Hypogean,
  attribute: Attribute.Strength,
  class: Class.Support,
  portraitURL: staticDomain+'hypogean/ezizh.webp',
  signature: Signature._20,
  furniture: {
    F3: Rating.GOOD,
    F9: Rating.TOP_TIER,
  },
};

export const Mehira: Hero = {
  id: 'MEHIRA',
  name: 'Mehira',
  nickname: [],
  faction: Faction.Hypogean,
  attribute: Attribute.Intelligence,
  class: Class.Mage,
  portraitURL: staticDomain+'hypogean/mehira.webp',
  signature: Signature._30,
  furniture: {
    F3: Rating.STRONG,
    F9: Rating.GOOD,
  },
};

export const Zolrath: Hero = {
  id: 'ZOLRATH',
  name: 'Zolrath',
  nickname: [],
  faction: Faction.Hypogean,
  attribute: Attribute.Agility,
  class: Class.Warrior,
  portraitURL: staticDomain+'hypogean/zolrath.webp',
  signature: Signature._30,
  furniture: {
    F3: Rating.TOP_TIER,
    F9: Rating.GOOD,
  },
};

export const Khazard: Hero = {
  id: 'KHAZARD',
  name: 'khazard',
  nickname: [],
  faction: Faction.Hypogean,
  attribute: Attribute.Intelligence,
  class: Class.Mage,
  portraitURL: staticDomain+'hypogean/khazard.webp',
  signature: Signature._30,
  furniture: {
    F3: Rating.STRONG,
    F9: Rating.WEAK,
  },
};

export const Mezoth: Hero = {
  id: 'MEZOTH',
  name: 'Mezoth',
  nickname: [],
  faction: Faction.Hypogean,
  attribute: Attribute.Strength,
  class: Class.Tank,
  portraitURL: staticDomain+'hypogean/mezoth.webp',
  signature: Signature._20,
  furniture: {
    F3: Rating.STRONG,
    F9: Rating.STRONG,
  },
};

export const Lucretia: Hero = {
  id: 'LUCRETIA',
  name: 'Lucretia',
  nickname: [],
  faction: Faction.Hypogean,
  attribute: Attribute.Agility,
  class: Class.Ranger,
  portraitURL: staticDomain+'hypogean/lucretia.webp',
  signature: Signature._30,
  furniture: {
    F3: Rating.STRONG,
    F9: Rating.STRONG,
  },
};

export const Mortas: Hero = {
  id: 'MORTAS',
  name: 'Mortas',
  nickname: [],
  faction: Faction.Hypogean,
  attribute: Attribute.Agility,
  class: Class.Support,
  portraitURL: staticDomain+'hypogean/mortas.webp',
  signature: Signature._20,
  furniture: {
    F3: Rating.VERY_WEAK,
    F9: Rating.VERY_WEAK,
  },
};

const heroes: Array<Hero> = [
  Ezizh,
  Mehira,
  Zolrath,
  Khazard,
  Mezoth,
  Lucretia,
  Mortas
];
export default heroes;
