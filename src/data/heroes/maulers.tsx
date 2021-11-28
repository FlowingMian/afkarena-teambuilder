import { Hero } from '../../model/heroes';
import * as Faction from '../../model/characteristics/factions';
import * as Attribute from '../../model/characteristics/attributes';
import * as Class from '../../model/characteristics/classes';
import * as Signature from '../../model/characteristics/signatures';
import * as Furniture from '../../model/characteristics/furnitures';
import * as Engraving from '../../model/characteristics/engravings';
import * as Artifact from '../../model/characteristics/artifacts';
import { staticDomain } from '../../model/common';

export const Brutus: Hero = {
  id: 'BRUTUS',
  name: 'Brutus',
  nickname: [],
  faction: Faction.Mauler,
  attribute: Attribute.Strength,
  class: Class.Tank,
  portraitURL: staticDomain+'mauler/brutus.jpg',
  signature: Signature._20,
  furniture: Furniture._3,
  engraving: Engraving._0,
  artifacts: [Artifact.Barricade],
};

export const Khasos: Hero = {
  id: 'KHASOS',
  name: 'Khasos',
  nickname: [],
  faction: Faction.Mauler,
  attribute: Attribute.Strength,
  class: Class.Warrior,
  portraitURL: staticDomain+'mauler/khasos.jpg',
  signature: Signature._0,
  furniture: Furniture._0,
  engraving: Engraving._0,
  artifacts: [Artifact.Chaos, Artifact.Pauldron, Artifact.Eye],
};

export const Vurk: Hero = {
  id: 'VURK',
  name: 'Vurk',
  nickname: [],
  faction: Faction.Mauler,
  attribute: Attribute.Agility,
  class: Class.Ranger,
  portraitURL: staticDomain+'mauler/vurk.jpg',
  signature: Signature._30,
  furniture: Furniture._9,
  engraving: Engraving._0,
  artifacts: [Artifact.Shroud, Artifact.Longbow, Artifact.Call],
};

export const Numisu: Hero = {
  id: 'NUMISU',
  name: 'Numisu',
  nickname: [],
  faction: Faction.Mauler,
  attribute: Attribute.Intelligence,
  class: Class.Support,
  portraitURL: staticDomain+'mauler/numisu.jpg',
  signature: Signature._25,
  furniture: Furniture._3,
  engraving: Engraving.Unknown,
  artifacts: [Artifact.Tidebearer, Artifact.OceanicStrings, Artifact.Call],
};

export const Skreg: Hero = {
  id: 'SKREG',
  name: 'Skreg',
  nickname: [],
  faction: Faction.Mauler,
  attribute: Attribute.Strength,
  class: Class.Tank,
  portraitURL: staticDomain+'mauler/skreg.jpg',
  signature: Signature._30,
  furniture: Furniture._9,
  engraving: Engraving.Unknown,
  artifacts: [Artifact.Waistband, Artifact.Barricade],
};

export const Warek: Hero = {
  id: 'WAREK',
  name: 'Warek',
  nickname: [],
  faction: Faction.Mauler,
  attribute: Attribute.Strength,
  class: Class.Warrior,
  portraitURL: staticDomain+'mauler/warek.jpg',
  signature: Signature._0,
  furniture: Furniture._0,
  engraving: Engraving._0,
  artifacts: [Artifact.Chaos, Artifact.Pauldron, Artifact.Blade],
};

export const Antandra: Hero = {
  id: 'ANTANDRA',
  name: 'Antandra',
  nickname: [],
  faction: Faction.Mauler,
  attribute: Attribute.Agility,
  class: Class.Warrior,
  portraitURL: staticDomain+'mauler/antandra.jpg',
  signature: Signature._30,
  furniture: Furniture._9,
  engraving: Engraving.Unknown,
  artifacts: [Artifact.Chaos, Artifact.Pauldron, Artifact.Carnage],
};

export const Safiya: Hero = {
  id: 'SAFIYA',
  name: 'Safiya',
  nickname: [],
  faction: Faction.Mauler,
  attribute: Attribute.Intelligence,
  class: Class.Mage,
  portraitURL: staticDomain+'mauler/safiya.jpg',
  signature: Signature._0,
  furniture: Furniture._0,
  engraving: Engraving._0,
  artifacts: [Artifact.WingedWarden, Artifact.Windbinder, Artifact.Call],
};

export const Satrana: Hero = {
  id: 'SATRANA',
  name: 'Satrana',
  nickname: [],
  faction: Faction.Mauler,
  attribute: Attribute.Intelligence,
  class: Class.Mage,
  portraitURL: staticDomain+'mauler/satrana.jpg',
  signature: Signature._0,
  furniture: Furniture._0,
  engraving: Engraving._0,
  artifacts: [Artifact.Windbinder, Artifact.Eye, Artifact.WingedWarden],
};

export const Tidus: Hero = {
  id: 'TIDUS',
  name: 'Tidus',
  nickname: [],
  faction: Faction.Mauler,
  attribute: Attribute.Agility,
  class: Class.Ranger,
  portraitURL: staticDomain+'mauler/tidus.jpg',
  signature: Signature._20,
  furniture: Furniture._3,
  engraving: Engraving.Unknown,
  artifacts: [Artifact.Shroud, Artifact.Grace, Artifact.Eye],
};

export const Drez: Hero = {
  id: 'DREZ',
  name: 'Drez',
  nickname: [],
  faction: Faction.Mauler,
  attribute: Attribute.Agility,
  class: Class.Ranger,
  portraitURL: staticDomain+'mauler/drez.jpg',
  signature: Signature._0,
  furniture: Furniture._3,
  engraving: Engraving.Unknown,
  artifacts: [Artifact.Eye, Artifact.Blade, Artifact.Shroud],
};

export const Skriath: Hero = {
  id: 'SKRIATH',
  name: 'Skriath',
  nickname: [],
  faction: Faction.Mauler,
  attribute: Attribute.Intelligence,
  class: Class.Mage,
  portraitURL: staticDomain+'mauler/skriath.jpg',
  signature: Signature._30,
  furniture: Furniture._3,
  engraving: Engraving._0,
  artifacts: [Artifact.WingedWarden, Artifact.Windbinder, Artifact.Call],
};

export const Anoki: Hero = {
  id: 'ANOKI',
  name: 'Anoki',
  nickname: [],
  faction: Faction.Mauler,
  attribute: Attribute.Strength,
  class: Class.Tank,
  portraitURL: staticDomain+'mauler/anoki.jpg',
  signature: Signature._0,
  furniture: Furniture._0,
  engraving: Engraving._0,
  artifacts: [Artifact.Waistband, Artifact.Chalice, Artifact.Barricade],
};

export const Kren: Hero = {
  id: 'KREN',
  name: 'Kren',
  nickname: ['Karen'],
  faction: Faction.Mauler,
  attribute: Attribute.Agility,
  class: Class.Ranger,
  portraitURL: staticDomain+'mauler/kren.jpg',
  signature: Signature._30,
  furniture: Furniture._9,
  engraving: Engraving._31_59,
  artifacts: [Artifact.Call, Artifact.Longbow, Artifact.Shroud],
};

export const Thali: Hero = {
  id: 'THALI',
  name: 'Thali',
  nickname: [],
  faction: Faction.Mauler,
  attribute: Attribute.Intelligence,
  class: Class.Mage,
  portraitURL: staticDomain+'mauler/thali.jpg',
  signature: Signature.Unknown,
  furniture: Furniture.Unknown,
  engraving: Engraving.Unknown,
  artifacts: [Artifact.Windbinder, Artifact.Warden, Artifact.Eye],
};

export const Granit: Hero = {
  id: 'GRANIT',
  name: 'Granit',
  nickname: [],
  faction: Faction.Mauler,
  attribute: Attribute.Strength,
  class: Class.Tank,
  portraitURL: staticDomain+'mauler/granit.jpg',
  signature: Signature._30,
  furniture: Furniture._0,
  engraving: Engraving.Unknown,
  artifacts: [Artifact.Barricade],
};

export const Thesku: Hero = {
  id: 'THESKU',
  name: 'Thesku',
  nickname: [],
  faction: Faction.Mauler,
  attribute: Attribute.Intelligence,
  class: Class.Mage,
  portraitURL: staticDomain+'mauler/thesku.jpg',
  signature: Signature.Unknown,
  furniture: Furniture.Unknown,
  engraving: Engraving.Unknown,
  artifacts: [Artifact.Windbinder, Artifact.WingedWarden],
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
  Kren,
  Thali,
  Granit,
  Thesku,
].sort((a, b) => a.name.localeCompare(b.name));
export default heroes;
