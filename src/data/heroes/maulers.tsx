import { Hero } from '../../model/heroes';
import * as Faction from '../../model/characteristics/factions';
import * as Attribute from '../../model/characteristics/attributes';
import * as Class from '../../model/characteristics/classes';
import * as Signature from '../../model/characteristics/signatures';
import * as Rating from '../../model/characteristics/ratings';
import * as Artifact from '../../model/characteristics/artifacts';
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
    F3: Rating.Good,
    F9: Rating.Weak,
  },
  artifacts: [Artifact.Blade, Artifact.Barricade],
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
    F3: Rating.Average,
    F9: Rating.VeryWeak,
  },
  artifacts: [Artifact.Chaos],
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
    F3: Rating.Strong,
    F9: Rating.Average,
  },
  artifacts: [Artifact.Longbow, Artifact.Eye],
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
    F3: Rating.Average,
    F9: Rating.Good,
  },
  artifacts: [Artifact.Call],
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
    F3: Rating.TopTier,
    F9: Rating.TopTier,
  },
  artifacts: [Artifact.Chalice, Artifact.Waistband],
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
    F3: Rating.Weak,
    F9: Rating.VeryWeak,
  },
  artifacts: [Artifact.Chaos],
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
    F3: Rating.Good,
    F9: Rating.Strong,
  },
  artifacts: [Artifact.Chaos],
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
    F3: Rating.VeryWeak,
    F9: Rating.Weak,
  },
  artifacts: [Artifact.Windbinder],
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
    F3: Rating.Strong,
    F9: Rating.Strong,
  },
  artifacts: [Artifact.Windbinder],
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
    F3: Rating.Strong,
    F9: Rating.Average,
  },
  artifacts: [Artifact.Shroud],
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
    F3: Rating.Strong,
    F9: Rating.Strong,
  },
  artifacts: [Artifact.Eye],
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
    F3: Rating.TopTier,
    F9: Rating.Weak,
  },
  artifacts: [Artifact.Warden],
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
    F3: Rating.Weak,
    F9: Rating.Weak,
  },
  artifacts: [Artifact.Waistband],
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
    F3: Rating.Average,
    F9: Rating.Good,
  },
  artifacts: [Artifact.Eye],
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
].sort((a, b) => a.name.localeCompare(b.name));
export default heroes;
