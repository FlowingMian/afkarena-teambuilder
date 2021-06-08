import { Hero } from '../../model/heroes';
import * as Faction from '../../model/characteristics/factions';
import * as Attribute from '../../model/characteristics/attributes';
import * as Class from '../../model/characteristics/classes';
import * as Signature from '../../model/characteristics/signatures';
import * as Rating from '../../model/characteristics/ratings';
import * as Artifact from '../../model/characteristics/artifacts';
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
    F3: Rating.Good,
    F9: Rating.VeryWeak,
  },
  artifacts: [Artifact.Barricade],
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
    F3: Rating.Weak,
    F9: Rating.Weak,
  },
  artifacts: [Artifact.Chaos, Artifact.Eye],
};

export const Nakoruru: Hero = {
  id: 'NAKORURU',
  name: 'Nakoruru',
  nickname: [],
  faction: Faction.Dimensional,
  attribute: Attribute.Agility,
  class: Class.Ranger,
  portraitURL: staticDomain+'dimensional/nakoruru.webp',
  signature: Signature._30,
  furniture: {
    F3: Rating.Average,
    F9: Rating.Average,
  },
  artifacts: [Artifact.Eye],
};

export const Ezio: Hero = {
  id: 'EZIO',
  name: 'Ezio',
  nickname: [],
  faction: Faction.Dimensional,
  attribute: Attribute.Agility,
  class: Class.Ranger,
  portraitURL: staticDomain+'dimensional/ezio.webp',
  signature: Signature._25,
  furniture: {
    F3: Rating.Average,
    F9: Rating.Strong,
  },
  artifacts: [Artifact.Call, Artifact.Shroud],
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
    F3: Rating.Good,
    F9: Rating.Weak,
  },
  artifacts: [Artifact.Waistband, Artifact.Barricade],
};

export const Ainz: Hero = {
  id: 'AINZ',
  name: 'Ainz Ooal Gown',
  nickname: [],
  faction: Faction.Dimensional,
  attribute: Attribute.Intelligence,
  class: Class.Mage,
  portraitURL: staticDomain+'dimensional/ainz.webp',
  signature: Signature._30,
  furniture: {
    F3: Rating.Strong,
    F9: Rating.TopTier,
  },
  artifacts: [Artifact.Windbinder],
};

export const QUEEN: Hero = {
  id: 'QUEEN',
  name: 'QUEEN',
  nickname: [],
  faction: Faction.Dimensional,
  attribute: Attribute.Strength,
  class: Class.Warrior,
  portraitURL: staticDomain+'dimensional/queen.webp',
  signature: Signature._1,
  furniture: {
    F3: Rating.Strong,
    F9: Rating.Average,
  },
  artifacts: [Artifact.Eye],
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
    F3: Rating.Good,
    F9: Rating.Average,
  },
  artifacts: [Artifact.Shroud],
};

export const PrinceOfPersia: Hero = {
  id: 'PRINCE_OF_PERSIA',
  name: 'Prince Of Persia',
  nickname: ['PoP'],
  faction: Faction.Dimensional,
  attribute: Attribute.Agility,
  class: Class.Ranger,
  portraitURL: staticDomain+'dimensional/pop.webp',
  signature: Signature._20,
  furniture: {
    F3: Rating.Unknown,
    F9: Rating.Unknown,
  },
  artifacts: [Artifact.Longbow, Artifact.Eye],
};

const heroes: Array<Hero> = [
  Arthur,
  Ukyo,
  Nakoruru,
  Ezio,
  Albedo,
  Ainz,
  QUEEN,
  JOKER,
  PrinceOfPersia,
].sort((a, b) => a.name.localeCompare(b.name));
export default heroes;
