import { Hero } from '../../model/heroes';
import * as Faction from '../../model/characteristics/factions';
import * as Attribute from '../../model/characteristics/attributes';
import * as Class from '../../model/characteristics/classes';
import * as Signature from '../../model/characteristics/signatures';
import * as Furniture from '../../model/characteristics/furnitures';
import * as Engraving from '../../model/characteristics/engravings';
import * as Artifact from '../../model/characteristics/artifacts';
import { staticDomain } from '../../model/common';

export const Ezizh: Hero = {
  id: 'EZIZH',
  name: 'Ezizh',
  nickname: [],
  faction: Faction.Hypogean,
  attribute: Attribute.Strength,
  class: Class.Support,
  portraitURL: staticDomain+'hypogean/ezizh.jpg',
  signature: Signature._10,
  furniture: Furniture._9,
  engraving: Engraving._0,
  artifacts: [Artifact.Tidebearer, Artifact.Call, Artifact.Seraphic],
};

export const Mehira: Hero = {
  id: 'MEHIRA',
  name: 'Mehira',
  nickname: [],
  faction: Faction.Hypogean,
  attribute: Attribute.Intelligence,
  class: Class.Mage,
  portraitURL: staticDomain+'hypogean/mehira.jpg',
  signature: Signature._30,
  furniture: Furniture._3,
  engraving: Engraving._0,
  artifacts: [Artifact.WingedWarden, Artifact.Windbinder, Artifact.Call],
};

export const Zolrath: Hero = {
  id: 'ZOLRATH',
  name: 'Zolrath',
  nickname: [],
  faction: Faction.Hypogean,
  attribute: Attribute.Agility,
  class: Class.Warrior,
  portraitURL: staticDomain+'hypogean/zolrath.jpg',
  signature: Signature._30,
  furniture: Furniture._3,
  engraving: Engraving._31_59,
  artifacts: [Artifact.Chaos, Artifact.Carnage, Artifact.Blade],
};

export const Khazard: Hero = {
  id: 'KHAZARD',
  name: 'khazard',
  nickname: [],
  faction: Faction.Hypogean,
  attribute: Attribute.Intelligence,
  class: Class.Mage,
  portraitURL: staticDomain+'hypogean/khazard.jpg',
  signature: Signature._30,
  furniture: Furniture._0,
  engraving: Engraving._0,
  artifacts: [Artifact.Eye, Artifact.Warden, Artifact.WingedWarden],
};

export const Mezoth: Hero = {
  id: 'MEZOTH',
  name: 'Mezoth',
  nickname: [],
  faction: Faction.Hypogean,
  attribute: Attribute.Strength,
  class: Class.Tank,
  portraitURL: staticDomain+'hypogean/mezoth.jpg',
  signature: Signature._30,
  furniture: Furniture._9,
  engraving: Engraving.Unknown,
  artifacts: [Artifact.Waistband, Artifact.Limit, Artifact.Barricade],
};

export const Lucretia: Hero = {
  id: 'LUCRETIA',
  name: 'Lucretia',
  nickname: [],
  faction: Faction.Hypogean,
  attribute: Attribute.Agility,
  class: Class.Ranger,
  portraitURL: staticDomain+'hypogean/lucretia.jpg',
  signature: Signature._30,
  furniture: Furniture._9,
  engraving: Engraving._60,
  artifacts: [Artifact.Longbow, Artifact.Eye, Artifact.Divinity],
};

export const Mortas: Hero = {
  id: 'MORTAS',
  name: 'Mortas',
  nickname: [],
  faction: Faction.Hypogean,
  attribute: Attribute.Agility,
  class: Class.Support,
  portraitURL: staticDomain+'hypogean/mortas.jpg',
  signature: Signature._20,
  furniture: Furniture._0,
  engraving: Engraving._0,
  artifacts: [Artifact.Eye, Artifact.Tidebearer, Artifact.Seraphic, Artifact.OceanicStrings, Artifact.Call],
};

export const Leofric: Hero = {
  id: 'LEOFRIC',
  name: 'Leofric',
  nickname: [],
  faction: Faction.Hypogean,
  attribute: Attribute.Intelligence,
  class: Class.Support,
  portraitURL: staticDomain+'hypogean/leofric.jpg',
  signature: Signature._20,
  furniture: Furniture._3,
  engraving: Engraving.Unknown,
  artifacts: [Artifact.Call, Artifact.Tidebearer, Artifact.Seraphic],
};

export const Zikis: Hero = {
  id: 'ZIKIS',
  name: 'Zikis',
  nickname: [],
  faction: Faction.Hypogean,
  attribute: Attribute.Agility,
  class: Class.Ranger,
  portraitURL: staticDomain+'hypogean/zikis.jpg',
  signature: Signature.Unknown,
  furniture: Furniture.Unknown,
  engraving: Engraving.Unknown,
  artifacts: [Artifact.Shroud, Artifact.Longbow, Artifact.Eye],
};

const heroes: Array<Hero> = [
  Ezizh,
  Mehira,
  Zolrath,
  Khazard,
  Mezoth,
  Lucretia,
  Mortas,
  Leofric,
  Zikis,
].sort((a, b) => a.name.localeCompare(b.name));
export default heroes;
