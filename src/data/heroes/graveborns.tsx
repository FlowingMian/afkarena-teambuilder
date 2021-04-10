import { Hero } from '../../model/heroes';
import * as Faction from '../../model/characteristics/factions';
import * as Attribute from '../../model/characteristics/attributes';
import * as Class from '../../model/characteristics/classes';
import * as Signature from '../../model/characteristics/signatures';
import * as Rating from '../../model/characteristics/ratings';
import * as Artifact from '../../model/characteristics/artifacts';
import { staticDomain } from '../../model/common';

export const Grezhul: Hero = {
  id: 'GREZHUL',
  name: 'Grezhul',
  nickname: [],
  faction: Faction.Graveborn,
  attribute: Attribute.Strength,
  class: Class.Tank,
  portraitURL: staticDomain+'graveborn/grezhul.webp',
  signature: Signature._20,
  furniture: {
    F3: Rating.TopTier,
    F9: Rating.TopTier,
  },
  artifacts: [Artifact.Chalice],
};

export const Shemira: Hero = {
  id: 'SHEMIRA',
  name: 'Shemira',
  nickname: [],
  faction: Faction.Graveborn,
  attribute: Attribute.Intelligence,
  class: Class.Mage,
  portraitURL: staticDomain+'graveborn/shemira.webp',
  signature: Signature._30,
  furniture: {
    F3: Rating.Weak,
    F9: Rating.VeryWeak,
  },
  artifacts: [Artifact.Windbinder],
};

export const Thoran: Hero = {
  id: 'THORAN',
  name: 'Thoran',
  nickname: [],
  faction: Faction.Graveborn,
  attribute: Attribute.Strength,
  class: Class.Tank,
  portraitURL: staticDomain+'graveborn/thoran.webp',
  signature: Signature._30,
  furniture: {
    F3: Rating.Average,
    F9: Rating.Strong,
  },
  artifacts: [Artifact.Call],
};

export const Isabella: Hero = {
  id: 'ISABELLA',
  name: 'Isabella',
  nickname: [],
  faction: Faction.Graveborn,
  attribute: Attribute.Intelligence,
  class: Class.Mage,
  portraitURL: staticDomain+'graveborn/isabella.webp',
  signature: Signature._30,
  furniture: {
    F3: Rating.TopTier,
    F9: Rating.Strong,
  },
  artifacts: [Artifact.Eye],
};

export const Nara: Hero = {
  id: 'NARA',
  name: 'Nara',
  nickname: [],
  faction: Faction.Graveborn,
  attribute: Attribute.Strength,
  class: Class.Warrior,
  portraitURL: staticDomain+'graveborn/nara.webp',
  signature: Signature._15,
  furniture: {
    F3: Rating.Good,
    F9: Rating.Average,
  },
  artifacts: [Artifact.Chaos],
};

export const Ferael: Hero = {
  id: 'FERAEL',
  name: 'Ferael',
  nickname: [],
  faction: Faction.Graveborn,
  attribute: Attribute.Agility,
  class: Class.Ranger,
  portraitURL: staticDomain+'graveborn/ferael.webp',
  signature: Signature._20,
  furniture: {
    F3: Rating.Strong,
    F9: Rating.TopTier,
  },
  artifacts: [Artifact.Eye],
};

export const Baden: Hero = {
  id: 'BADEN',
  name: 'Baden',
  nickname: [],
  faction: Faction.Graveborn,
  attribute: Attribute.Agility,
  class: Class.Warrior,
  portraitURL: staticDomain+'graveborn/baden.webp',
  signature: Signature._20,
  furniture: {
    F3: Rating.VeryWeak,
    F9: Rating.Strong,
  },
  artifacts: [Artifact.Chaos],
};

export const Kelthur: Hero = {
  id: 'KELTHUR',
  name: 'Kelthur',
  nickname: [],
  faction: Faction.Graveborn,
  attribute: Attribute.Agility,
  class: Class.Ranger,
  portraitURL: staticDomain+'graveborn/kelthur.webp',
  signature: Signature._20,
  furniture: {
    F3: Rating.Average,
    F9: Rating.Good,
  },
  artifacts: [Artifact.Shroud],
};

export const Silas: Hero = {
  id: 'SILAS',
  name: 'Silas',
  nickname: [],
  faction: Faction.Graveborn,
  attribute: Attribute.Intelligence,
  class: Class.Support,
  portraitURL: staticDomain+'graveborn/silas.webp',
  signature: Signature._30,
  furniture: {
    F3: Rating.TopTier,
    F9: Rating.TopTier,
  },
  artifacts: [Artifact.Blade, Artifact.Call],
};

export const Oden: Hero = {
  id: 'ODEN',
  name: 'Oden',
  nickname: [],
  faction: Faction.Graveborn,
  attribute: Attribute.Intelligence,
  class: Class.Mage,
  portraitURL: staticDomain+'graveborn/oden.webp',
  signature: Signature._30,
  furniture: {
    F3: Rating.TopTier,
    F9: Rating.Good,
  },
  artifacts: [Artifact.Windbinder],
};

export const Izold: Hero = {
  id: 'IZOLD',
  name: 'Izold',
  nickname: [],
  faction: Faction.Graveborn,
  attribute: Attribute.Strength,
  class: Class.Warrior,
  portraitURL: staticDomain+'graveborn/izold.webp',
  signature: Signature._30,
  furniture: {
    F3: Rating.TopTier,
    F9: Rating.Average,
  },
  artifacts: [Artifact.Chaos],
};

export const Torne: Hero = {
  id: 'TORNE',
  name: 'Torne',
  nickname: [],
  faction: Faction.Graveborn,
  attribute: Attribute.Strength,
  class: Class.Tank,
  portraitURL: staticDomain+'graveborn/torne.webp',
  signature: Signature._30,
  furniture: {
    F3: Rating.Average,
    F9: Rating.Average,
  },
  artifacts: [Artifact.Waistband],
};

export const Daimon: Hero = {
  id: 'DAIMON',
  name: 'Daimon',
  nickname: [],
  faction: Faction.Graveborn,
  attribute: Attribute.Strength,
  class: Class.Tank,
  portraitURL: staticDomain+'graveborn/daimon.webp',
  signature: Signature._30,
  furniture: {
    F3: Rating.TopTier,
    F9: Rating.Weak,
  },
  artifacts: [Artifact.Call],
};

export const Theowyn: Hero = {
  id: 'THEOWYN',
  name: 'Theowyn',
  nickname: [],
  faction: Faction.Graveborn,
  attribute: Attribute.Agility,
  class: Class.Ranger,
  portraitURL: staticDomain+'graveborn/theowyn.webp',
  signature: Signature._10,
  furniture: {
    F3: Rating.Strong,
    F9: Rating.Good,
  },
  artifacts: [Artifact.Eye],
};

const heroes: Array<Hero> = [
  Grezhul,
  Shemira,
  Thoran,
  Isabella,
  Nara,
  Ferael,
  Baden,
  Kelthur,
  Silas,
  Oden,
  Izold,
  Torne,
  Daimon,
  Theowyn
].sort((a, b) => a.name.localeCompare(b.name));
export default heroes;
