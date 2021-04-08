import { Hero } from '../../model/heroes';
import * as Faction from '../../model/characteristics/factions';
import * as Attribute from '../../model/characteristics/attributes';
import * as Class from '../../model/characteristics/classes';
import * as Signature from '../../model/characteristics/signatures';
import * as Rating from '../../model/characteristics/ratings';
import * as Artifact from '../../model/characteristics/artifacts';
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
    F3: Rating.Good,
    F9: Rating.TopTier,
  },
  artifacts: [Artifact.Tidebearer],
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
    F3: Rating.Strong,
    F9: Rating.Good,
  },
  artifacts: [Artifact.Windbinder],
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
    F3: Rating.TopTier,
    F9: Rating.Good,
  },
  artifacts: [Artifact.Carnage, Artifact.Chaos],
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
    F3: Rating.Strong,
    F9: Rating.Weak,
  },
  artifacts: [Artifact.Windbinder],
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
    F3: Rating.Strong,
    F9: Rating.Strong,
  },
  artifacts: [Artifact.Waistband],
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
    F3: Rating.Strong,
    F9: Rating.Strong,
  },
  artifacts: [Artifact.Longbow, Artifact.Eye],
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
    F3: Rating.VeryWeak,
    F9: Rating.VeryWeak,
  },
  artifacts: [Artifact.Tidebearer],
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
