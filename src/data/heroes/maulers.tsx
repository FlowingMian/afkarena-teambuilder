import { Hero } from '../../model/heroes';
import * as Faction from '../../model/characteristics/factions';
import * as Attribute from '../../model/characteristics/attributes';
import * as Class from '../../model/characteristics/classes';
import * as Signature from '../../model/characteristics/signatures';
import * as Rating from '../../model/characteristics/ratings';
import { staticDomain } from '../../model/common';

export const Brutus: Hero = {
  id: 'BRUTUS',
  name: 'Brutus',
  nickname: [],
  faction: Faction.Mauler,
  attribute: Attribute.Strength,
  class: Class.Tank,
  portraitURL: staticDomain+'mauler/brutus.webp',
  signature: Signature._20,
  furniture: {
    F3: Rating.GOOD,
    F9: Rating.WEAK,
  },
};

export const Khasos: Hero = {
  id: 'KHASOS',
  name: 'Khasos',
  nickname: [],
  faction: Faction.Mauler,
  attribute: Attribute.Strength,
  class: Class.Warrior,
  portraitURL: staticDomain+'mauler/khasos.webp',
  signature: Signature._30,
  furniture: {
    F3: Rating.AVERAGE,
    F9: Rating.VERY_WEAK,
  },
};

export const Vurk: Hero = {
  id: 'VURK',
  name: 'Vurk',
  nickname: [],
  faction: Faction.Mauler,
  attribute: Attribute.Agility,
  class: Class.Ranger,
  portraitURL: staticDomain+'mauler/vurk.webp',
  signature: Signature._30,
  furniture: {
    F3: Rating.STRONG,
    F9: Rating.AVERAGE,
  },
};

export const Numisu: Hero = {
  id: 'NUMISU',
  name: 'Numisu',
  nickname: [],
  faction: Faction.Mauler,
  attribute: Attribute.Intelligence,
  class: Class.Support,
  portraitURL: staticDomain+'mauler/numisu.webp',
  signature: Signature._15,
  furniture: {
    F3: Rating.AVERAGE,
    F9: Rating.GOOD,
  },
};

export const Skreg: Hero = {
  id: 'SKREG',
  name: 'Skreg',
  nickname: [],
  faction: Faction.Mauler,
  attribute: Attribute.Strength,
  class: Class.Tank,
  portraitURL: staticDomain+'mauler/skreg.webp',
  signature: Signature._20,
  furniture: {
    F3: Rating.TOP_TIER,
    F9: Rating.TOP_TIER,
  },
};

export const Warek: Hero = {
  id: 'WAREK',
  name: 'Warek',
  nickname: [],
  faction: Faction.Mauler,
  attribute: Attribute.Strength,
  class: Class.Warrior,
  portraitURL: staticDomain+'mauler/warek.webp',
  signature: Signature._10,
  furniture: {
    F3: Rating.WEAK,
    F9: Rating.VERY_WEAK,
  },
};

export const Antandra: Hero = {
  id: 'ANTANDRA',
  name: 'Antandra',
  nickname: [],
  faction: Faction.Mauler,
  attribute: Attribute.Agility,
  class: Class.Warrior,
  portraitURL: staticDomain+'mauler/antandra.webp',
  signature: Signature._30,
  furniture: {
    F3: Rating.GOOD,
    F9: Rating.STRONG,
  },
};

export const Safiya: Hero = {
  id: 'SAFIYA',
  name: 'Safiya',
  nickname: [],
  faction: Faction.Mauler,
  attribute: Attribute.Intelligence,
  class: Class.Mage,
  portraitURL: staticDomain+'mauler/safiya.webp',
  signature: Signature._20,
  furniture: {
    F3: Rating.VERY_WEAK,
    F9: Rating.WEAK,
  },
};

export const Satrana: Hero = {
  id: 'SATRANA',
  name: 'Satrana',
  nickname: [],
  faction: Faction.Mauler,
  attribute: Attribute.Intelligence,
  class: Class.Mage,
  portraitURL: staticDomain+'mauler/satrana.webp',
  signature: Signature._30,
  furniture: {
    F3: Rating.STRONG,
    F9: Rating.STRONG,
  },
};

export const Tidus: Hero = {
  id: 'TIDUS',
  name: 'Tidus',
  nickname: [],
  faction: Faction.Mauler,
  attribute: Attribute.Agility,
  class: Class.Ranger,
  portraitURL: staticDomain+'mauler/tidus.webp',
  signature: Signature._30,
  furniture: {
    F3: Rating.STRONG,
    F9: Rating.AVERAGE,
  },
};

export const Drez: Hero = {
  id: 'DREZ',
  name: 'Drez',
  nickname: [],
  faction: Faction.Mauler,
  attribute: Attribute.Agility,
  class: Class.Ranger,
  portraitURL: staticDomain+'mauler/drez.webp',
  signature: Signature._20,
  furniture: {
    F3: Rating.STRONG,
    F9: Rating.STRONG,
  },
};

export const Skriath: Hero = {
  id: 'SKRIATH',
  name: 'Skriath',
  nickname: [],
  faction: Faction.Mauler,
  attribute: Attribute.Intelligence,
  class: Class.Mage,
  portraitURL: staticDomain+'mauler/skriath.webp',
  signature: Signature._10,
  furniture: {
    F3: Rating.TOP_TIER,
    F9: Rating.WEAK,
  },
};

export const Anoki: Hero = {
  id: 'ANOKI',
  name: 'Anoki',
  nickname: [],
  faction: Faction.Mauler,
  attribute: Attribute.Strength,
  class: Class.Tank,
  portraitURL: staticDomain+'mauler/anoki.webp',
  signature: Signature._20,
  furniture: {
    F3: Rating.WEAK,
    F9: Rating.WEAK,
  },
};

export const Kren: Hero = {
  id: 'KREN',
  name: 'Kren',
  nickname: [],
  faction: Faction.Mauler,
  attribute: Attribute.Agility,
  class: Class.Ranger,
  portraitURL: staticDomain+'mauler/kren.webp',
  signature: Signature._30,
  furniture: {
    F3: Rating.AVERAGE,
    F9: Rating.GOOD,
  },
};

const heroes: Array<Hero> = [
  Brutus,
  Khasos,
  Vurk,
  Numisu,
  Skreg,
  Warek,
  Antandra,
  Safiya,
  Satrana,
  Tidus,
  Drez,
  Skriath,
  Anoki,
  Kren
];
export default heroes;
