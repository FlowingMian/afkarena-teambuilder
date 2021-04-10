import { Hero } from '../../model/heroes';
import * as Faction from '../../model/characteristics/factions';
import * as Attribute from '../../model/characteristics/attributes';
import * as Class from '../../model/characteristics/classes';
import * as Signature from '../../model/characteristics/signatures';
import * as Rating from '../../model/characteristics/ratings';
import * as Artifact from '../../model/characteristics/artifacts';
import { staticDomain } from '../../model/common';

export const Athalia: Hero = {
  id: 'ATHALIA',
  name: 'Athalia',
  nickname: [],
  faction: Faction.Celestial,
  attribute: Attribute.Agility,
  class: Class.Ranger,
  portraitURL: staticDomain+'celestial/athalia.webp',
  signature: Signature._20,
  furniture: {
    F3: Rating.Good,
    F9: Rating.Average,
  },
  artifacts: [Artifact.Longbow, Artifact.Eye],
};

export const ElijahLailah: Hero = {
  id: 'ELIJAHLAILAH',
  name: 'Twins',
  nickname: ['Elijah', 'Lailah'],
  faction: Faction.Celestial,
  attribute: Attribute.Intelligence,
  class: Class.Support,
  portraitURL: staticDomain+'celestial/elijahlailah.webp',
  signature: Signature._20,
  furniture: {
    F3: Rating.TopTier,
    F9: Rating.Weak,
  },
  artifacts: [Artifact.Tidebearer, Artifact.Call],
};

export const Orthos: Hero = {
  id: 'ORTHOS',
  name: 'Orthos',
  nickname: [],
  faction: Faction.Celestial,
  attribute: Attribute.Strength,
  class: Class.Tank,
  portraitURL: staticDomain+'celestial/orthos.webp',
  signature: Signature._30,
  furniture: {
    F3: Rating.TopTier,
    F9: Rating.Good,
  },
  artifacts: [Artifact.Waistband],
};

export const Talene: Hero = {
  id: 'TALENE',
  name: 'Talene',
  nickname: [],
  faction: Faction.Celestial,
  attribute: Attribute.Agility,
  class: Class.Support,
  portraitURL: staticDomain+'celestial/talene.webp',
  signature: Signature._30,
  furniture: {
    F3: Rating.Strong,
    F9: Rating.Strong,
  },
  artifacts: [Artifact.Blade],
};

export const Wukong: Hero = {
  id: 'WUKONG',
  name: 'WuKong',
  nickname: [],
  faction: Faction.Celestial,
  attribute: Attribute.Strength,
  class: Class.Warrior,
  portraitURL: staticDomain+'celestial/wukong.webp',
  signature: Signature._20,
  furniture: {
    F3: Rating.Strong,
    F9: Rating.Strong,
  },
  artifacts: [Artifact.Chaos],
};

export const Flora: Hero = {
  id: 'FLORA',
  name: 'Flora',
  nickname: [],
  faction: Faction.Celestial,
  attribute: Attribute.Intelligence,
  class: Class.Mage,
  portraitURL: staticDomain+'celestial/flora.webp',
  signature: Signature._20,
  furniture: {
    F3: Rating.Good,
    F9: Rating.Average,
  },
  artifacts: [Artifact.Eye],
};

export const Zaphrael: Hero = {
  id: 'ZAPHRAEL',
  name: 'Zaphrael',
  nickname: [],
  faction: Faction.Celestial,
  attribute: Attribute.Intelligence,
  class: Class.Mage,
  portraitURL: staticDomain+'celestial/zaphrael.webp',
  signature: Signature._30,
  furniture: {
    F3: Rating.Good,
    F9: Rating.TopTier,
  },
  artifacts: [Artifact.Windbinder],
};

export const Alna: Hero = {
  id: 'ALNA',
  name: 'Alna',
  nickname: [],
  faction: Faction.Celestial,
  attribute: Attribute.Agility,
  class: Class.Warrior,
  portraitURL: staticDomain+'celestial/alna.webp',
  signature: Signature._30,
  furniture: {
    F3: Rating.Strong,
    F9: Rating.TopTier,
  },
  artifacts: [Artifact.Chaos],
};

const heroes: Array<Hero> = [
  Athalia,
  ElijahLailah,
  Orthos,
  Talene,
  Wukong,
  Flora,
  Zaphrael,
  Alna
].sort((a, b) => a.name.localeCompare(b.name));
export default heroes;
