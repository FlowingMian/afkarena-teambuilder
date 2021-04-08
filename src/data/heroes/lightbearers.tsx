import { Hero } from '../../model/heroes';
import * as Faction from '../../model/characteristics/factions';
import * as Attribute from '../../model/characteristics/attributes';
import * as Class from '../../model/characteristics/classes';
import * as Signature from '../../model/characteristics/signatures';
import * as Rating from '../../model/characteristics/ratings';
import * as Artifact from '../../model/characteristics/artifacts';
import { staticDomain } from '../../model/common';

export const Estrilda: Hero = {
  id: 'ESTRILDA',
  name: 'Estrilda',
  nickname: [],
  faction: Faction.Lightbearer,
  attribute: Attribute.Strength,
  class: Class.Warrior,
  portraitURL: staticDomain+'lightbearer/estrilda.webp',
  signature: Signature._20,
  furniture: {
    F3: Rating.Good,
    F9: Rating.Weak,
  },
  artifacts: [Artifact.Chaos],
};

export const Belinda: Hero = {
  id: 'BELINDA',
  name: 'Belinda',
  nickname: [],
  faction: Faction.Lightbearer,
  attribute: Attribute.Intelligence,
  class: Class.Mage,
  portraitURL: staticDomain+'lightbearer/belinda.webp',
  signature: Signature._20,
  furniture: {
    F3: Rating.Weak,
    F9: Rating.Weak,
  },
  artifacts: [Artifact.Windbinder],
};

export const Raine: Hero = {
  id: 'RAINE',
  name: 'Raine',
  nickname: [],
  faction: Faction.Lightbearer,
  attribute: Attribute.Agility,
  class: Class.Support,
  portraitURL: staticDomain+'lightbearer/raine.webp',
  signature: Signature._10,
  furniture: {
    F3: Rating.Strong,
    F9: Rating.VeryWeak,
  },
  artifacts: [Artifact.Call],
};

export const Fawkes: Hero = {
  id: 'FAWKES',
  name: 'Fawkes',
  nickname: [],
  faction: Faction.Lightbearer,
  attribute: Attribute.Agility,
  class: Class.Ranger,
  portraitURL: staticDomain+'lightbearer/fawkes.webp',
  signature: Signature._20,
  furniture: {
    F3: Rating.VeryWeak,
    F9: Rating.Weak,
  },
  artifacts: [Artifact.Eye],
};

export const Lucius: Hero = {
  id: 'LUCIUS',
  name: 'Lucius',
  nickname: [],
  faction: Faction.Lightbearer,
  attribute: Attribute.Strength,
  class: Class.Tank,
  portraitURL: staticDomain+'lightbearer/lucius.webp',
  signature: Signature._20,
  furniture: {
    F3: Rating.VeryWeak,
    F9: Rating.Weak,
  },
  artifacts: [Artifact.Waistband],
};

export const Thane: Hero = {
  id: 'THANE',
  name: 'Thane',
  nickname: [],
  faction: Faction.Lightbearer,
  attribute: Attribute.Agility,
  class: Class.Ranger,
  portraitURL: staticDomain+'lightbearer/thane.webp',
  signature: Signature._30,
  furniture: {
    F3: Rating.Good,
    F9: Rating.Average,
  },
  artifacts: [Artifact.Longbow, Artifact.Eye],
};

export const Hendrik: Hero = {
  id: 'HENDRIK',
  name: 'Hendrik',
  nickname: [],
  faction: Faction.Lightbearer,
  attribute: Attribute.Strength,
  class: Class.Tank,
  portraitURL: staticDomain+'lightbearer/hendrik.webp',
  signature: Signature._20,
  furniture: {
    F3: Rating.Average,
    F9: Rating.Weak,
  },
  artifacts: [Artifact.Barricade, Artifact.Waistband],
};

export const Rowan: Hero = {
  id: 'ROWAN',
  name: 'Rowan',
  nickname: [],
  faction: Faction.Lightbearer,
  attribute: Attribute.Intelligence,
  class: Class.Support,
  portraitURL: staticDomain+'lightbearer/rowan.webp',
  signature: Signature._30,
  furniture: {
    F3: Rating.Weak,
    F9: Rating.VeryWeak,
  },
  artifacts: [Artifact.Call],
};

export const Gwyneth: Hero = {
  id: 'GWYNETH',
  name: 'Gwyneth',
  nickname: [],
  faction: Faction.Lightbearer,
  attribute: Attribute.Strength,
  class: Class.Ranger,
  portraitURL: staticDomain+'lightbearer/gwyneth.webp',
  signature: Signature._25,
  furniture: {
    F3: Rating.Good,
    F9: Rating.Weak,
  },
  artifacts: [Artifact.Longbow, Artifact.Eye],
};

export const Rosaline: Hero = {
  id: 'ROSALINE',
  name: 'Rosaline',
  nickname: [],
  faction: Faction.Lightbearer,
  attribute: Attribute.Intelligence,
  class: Class.Support,
  portraitURL: staticDomain+'lightbearer/rosaline.webp',
  signature: Signature._20,
  furniture: {
    F3: Rating.Weak,
    F9: Rating.VeryWeak,
  },
  artifacts: [Artifact.Eye],
};

export const Cecilia: Hero = {
  id: 'CECILIA',
  name: 'Cecilia',
  nickname: [],
  faction: Faction.Lightbearer,
  attribute: Attribute.Agility,
  class: Class.Ranger,
  portraitURL: staticDomain+'lightbearer/cecilia.webp',
  signature: Signature._30,
  furniture: {
    F3: Rating.Average,
    F9: Rating.Strong,
  },
  artifacts: [Artifact.Shroud],
};

export const Rigby: Hero = {
  id: 'RIGBY',
  name: 'Rigby',
  nickname: [],
  faction: Faction.Lightbearer,
  attribute: Attribute.Strength,
  class: Class.Warrior,
  portraitURL: staticDomain+'lightbearer/rigby.webp',
  signature: Signature._10,
  furniture: {
    F3: Rating.Average,
    F9: Rating.Weak,
  },
  artifacts: [Artifact.Chalice],
};

export const Oscar: Hero = {
  id: 'Oscar',
  name: 'Oscar',
  nickname: [],
  faction: Faction.Lightbearer,
  attribute: Attribute.Agility,
  class: Class.Ranger,
  portraitURL: staticDomain+'lightbearer/oscar.webp',
  signature: Signature._30,
  furniture: {
    F3: Rating.Weak,
    F9: Rating.Good,
  },
  artifacts: [Artifact.Eye],
};

export const Eluard: Hero = {
  id: 'ELUARD',
  name: 'Eluard',
  nickname: [],
  faction: Faction.Lightbearer,
  attribute: Attribute.Intelligence,
  class: Class.Mage,
  portraitURL: staticDomain+'lightbearer/eluard.webp',
  signature: Signature._30,
  furniture: {
    F3: Rating.Average,
    F9: Rating.Strong,
  },
  artifacts: [Artifact.Call],
};

export const Peggy: Hero = {
  id: 'PEGGY',
  name: 'Peggy',
  nickname: [],
  faction: Faction.Lightbearer,
  attribute: Attribute.Intelligence,
  class: Class.Support,
  portraitURL: staticDomain+'lightbearer/peggy.png',
  signature: Signature.UNKNOWN,
  furniture: {
    F3: Rating.Unknown,
    F9: Rating.Unknown,
  },
  artifacts: [Artifact.Call],
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
  Oscar,
  Eluard,
  Peggy
];
export default heroes;
