import { Hero } from '../../model/heroes';
import * as Faction from '../../model/characteristics/factions';
import * as Attribute from '../../model/characteristics/attributes';
import * as Class from '../../model/characteristics/classes';
import * as Signature from '../../model/characteristics/signatures';
import * as Rating from '../../model/characteristics/ratings';
import { staticDomain } from '../../model/common';

export const Nemora: Hero = {
  id: 'NEMORA',
  name: 'Nemora',
  nickname: [],
  faction: Faction.Wilder,
  attribute: Attribute.Intelligence,
  class: Class.Support,
  portraitURL: staticDomain+'wilder/nemora.webp',
  signature: Signature._15,
  furniture: {
    F3: Rating.WEAK,
    F9: Rating.GOOD,
  },
};

export const Kaz: Hero = {
  id: 'KAZ',
  name: 'Kaz',
  nickname: [],
  faction: Faction.Wilder,
  attribute: Attribute.Agility,
  class: Class.Ranger,
  portraitURL: staticDomain+'wilder/kaz.webp',
  signature: Signature._20,
  furniture: {
    F3: Rating.GOOD,
    F9: Rating.GOOD,
  },
};

export const Lyca: Hero = {
  id: 'LYCA',
  name: 'Lyca',
  nickname: [],
  faction: Faction.Wilder,
  attribute: Attribute.Agility,
  class: Class.Ranger,
  portraitURL: staticDomain+'wilder/lyca.webp',
  signature: Signature._20,
  furniture: {
    F3: Rating.GOOD,
    F9: Rating.TOP_TIER,
  },
};

export const Tasi: Hero = {
  id: 'TASI',
  name: 'Tasi',
  nickname: [],
  faction: Faction.Wilder,
  attribute: Attribute.Intelligence,
  class: Class.Support,
  portraitURL: staticDomain+'wilder/tasi.webp',
  signature: Signature._15,
  furniture: {
    F3: Rating.TOP_TIER,
    F9: Rating.STRONG,
  },
};

export const Ulmus: Hero = {
  id: 'ULMUS',
  name: 'Ulmus',
  nickname: [],
  faction: Faction.Wilder,
  attribute: Attribute.Strength,
  class: Class.Tank,
  portraitURL: staticDomain+'wilder/ulmus.webp',
  signature: Signature._30,
  furniture: {
    F3: Rating.VERY_WEAK,
    F9: Rating.WEAK,
  },
};

export const Seirus: Hero = {
  id: 'SEIRUS',
  name: 'Seirus',
  nickname: [],
  faction: Faction.Wilder,
  attribute: Attribute.Strength,
  class: Class.Warrior,
  portraitURL: staticDomain+'wilder/seirus.webp',
  signature: Signature._10,
  furniture: {
    F3: Rating.WEAK,
    F9: Rating.STRONG,
  },
};

export const Eironn: Hero = {
  id: 'EIRONN',
  name: 'Eironn',
  nickname: [],
  faction: Faction.Wilder,
  attribute: Attribute.Agility,
  class: Class.Ranger,
  portraitURL: staticDomain+'wilder/eironn.webp',
  signature: Signature._30,
  furniture: {
    F3: Rating.STRONG,
    F9: Rating.GOOD,
  },
};

export const Gorvo: Hero = {
  id: 'GORVO',
  name: 'Gorvo',
  nickname: [],
  faction: Faction.Wilder,
  attribute: Attribute.Strength,
  class: Class.Tank,
  portraitURL: staticDomain+'wilder/gorvo.webp',
  signature: Signature._10,
  furniture: {
    F3: Rating.GOOD,
    F9: Rating.AVERAGE,
  },
};

export const Lorsan: Hero = {
  id: 'LORSAN',
  name: 'Lorsan',
  nickname: [],
  faction: Faction.Wilder,
  attribute: Attribute.Intelligence,
  class: Class.Mage,
  portraitURL: staticDomain+'wilder/lorsan.webp',
  signature: Signature._20,
  furniture: {
    F3: Rating.VERY_WEAK,
    F9: Rating.AVERAGE,
  },
};

export const Saurus: Hero = {
  id: 'SAURUS',
  name: 'Saurus',
  nickname: [],
  faction: Faction.Wilder,
  attribute: Attribute.Strength,
  class: Class.Warrior,
  portraitURL: staticDomain+'wilder/saurus.webp',
  signature: Signature._30,
  furniture: {
    F3: Rating.GOOD,
    F9: Rating.AVERAGE,
  },
};

export const Solise: Hero = {
  id: 'SOLISE',
  name: 'Solise',
  nickname: [],
  faction: Faction.Wilder,
  attribute: Attribute.Intelligence,
  class: Class.Mage,
  portraitURL: staticDomain+'wilder/solise.webp',
  signature: Signature._20,
  furniture: {
    F3: Rating.GOOD,
    F9: Rating.WEAK,
  },
};

export const Pippa: Hero = {
  id: 'PIPPA',
  name: 'Pippa',
  nickname: [],
  faction: Faction.Wilder,
  attribute: Attribute.Intelligence,
  class: Class.Mage,
  portraitURL: staticDomain+'wilder/pippa.webp',
  signature: Signature._20,
  furniture: {
    F3: Rating.GOOD,
    F9: Rating.GOOD,
  },
};

export const Respen: Hero = {
  id: 'RESPEN',
  name: 'Respen',
  nickname: [],
  faction: Faction.Wilder,
  attribute: Attribute.Agility,
  class: Class.Ranger,
  portraitURL: staticDomain+'wilder/respen.webp',
  signature: Signature._20,
  furniture: {
    F3: Rating.WEAK,
    F9: Rating.GOOD,
  },
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
  Pippa,
  Respen
];
export default heroes;
