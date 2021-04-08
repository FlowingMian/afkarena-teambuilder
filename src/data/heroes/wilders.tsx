import { Hero } from '../../model/heroes';
import * as Faction from '../../model/characteristics/factions';
import * as Attribute from '../../model/characteristics/attributes';
import * as Class from '../../model/characteristics/classes';
import * as Signature from '../../model/characteristics/signatures';
import * as Rating from '../../model/characteristics/ratings';
import * as Artifact from '../../model/characteristics/artifacts';
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
    F3: Rating.Weak,
    F9: Rating.Good,
  },
  artifacts: [Artifact.Tidebearer],
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
    F3: Rating.Good,
    F9: Rating.Good,
  },
  artifacts: [Artifact.Grace],
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
    F3: Rating.Good,
    F9: Rating.TopTier,
  },
  artifacts: [Artifact.Longbow],
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
    F3: Rating.TopTier,
    F9: Rating.Strong,
  },
  artifacts: [Artifact.Eye, Artifact.Call],
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
    F3: Rating.VeryWeak,
    F9: Rating.Weak,
  },
  artifacts: [Artifact.Drape, Artifact.Waistband],
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
    F3: Rating.Weak,
    F9: Rating.Strong,
  },
  artifacts: [Artifact.Chalice],
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
    F3: Rating.Strong,
    F9: Rating.Good,
  },
  artifacts: [Artifact.Longbow, Artifact.Shroud],
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
    F3: Rating.Good,
    F9: Rating.Average,
  },
  artifacts: [Artifact.Waistband],
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
    F3: Rating.VeryWeak,
    F9: Rating.Average,
  },
  artifacts: [Artifact.Windbinder],
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
    F3: Rating.Good,
    F9: Rating.Average,
  },
  artifacts: [Artifact.Chaos],
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
    F3: Rating.Good,
    F9: Rating.Weak,
  },
  artifacts: [Artifact.Windbinder],
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
    F3: Rating.Good,
    F9: Rating.Good,
  },
  artifacts: [Artifact.Warden],
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
    F3: Rating.Weak,
    F9: Rating.Good,
  },
  artifacts: [Artifact.Longbow, Artifact.Eye],
};

export const Raku: Hero = {
  id: 'RAKU',
  name: 'Raku',
  nickname: [],
  faction: Faction.Wilder,
  attribute: Attribute.Agility,
  class: Class.Ranger,
  portraitURL: staticDomain+'wilder/raku.png',
  signature: Signature.UNKNOWN,
  furniture: {
    F3: Rating.Unknown,
    F9: Rating.Unknown,
  },
  artifacts: [Artifact.Longbow],
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
  Respen,
  Raku
];
export default heroes;
