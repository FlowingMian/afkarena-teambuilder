import { Hero } from '../../model/heroes';
import * as Faction from '../../model/characteristics/factions';
import * as Attribute from '../../model/characteristics/attributes';
import * as Class from '../../model/characteristics/classes';
import * as Signature from '../../model/characteristics/signatures';
import * as Furniture from '../../model/characteristics/furnitures';
import * as Engraving from '../../model/characteristics/engravings';
import * as Artifact from '../../model/characteristics/artifacts';
import { staticDomain } from '../../model/common';

export const Grezhul: Hero = {
  id: 'GREZHUL',
  name: 'Grezhul',
  nickname: [],
  faction: Faction.Graveborn,
  attribute: Attribute.Strength,
  class: Class.Tank,
  portraitURL: staticDomain+'graveborn/grezhul.jpg',
  signature: Signature._30,
  furniture: Furniture._9,
  engraving: Engraving._60,
  artifacts: [Artifact.Eye, Artifact.Barricade, Artifact.Waistband],
};

export const Shemira: Hero = {
  id: 'SHEMIRA',
  name: 'Shemira',
  nickname: [],
  faction: Faction.Graveborn,
  attribute: Attribute.Intelligence,
  class: Class.Mage,
  portraitURL: staticDomain+'graveborn/shemira.jpg',
  signature: Signature._10,
  furniture: Furniture._0,
  engraving: Engraving._0,
  artifacts: [Artifact.Windbinder, Artifact.Eye, Artifact.Blade],
};

export const Thoran: Hero = {
  id: 'THORAN',
  name: 'Thoran',
  nickname: [],
  faction: Faction.Graveborn,
  attribute: Attribute.Strength,
  class: Class.Tank,
  portraitURL: staticDomain+'graveborn/thoran.jpg',
  signature: Signature._30,
  furniture: Furniture._3,
  engraving: Engraving._1_29,
  artifacts: [Artifact.Call, Artifact.Barricade, Artifact.Limit],
};

export const Isabella: Hero = {
  id: 'ISABELLA',
  name: 'Isabella',
  nickname: [],
  faction: Faction.Graveborn,
  attribute: Attribute.Intelligence,
  class: Class.Mage,
  portraitURL: staticDomain+'graveborn/isabella.jpg',
  signature: Signature._30,
  furniture: Furniture._3,
  engraving: Engraving.Unknown,
  artifacts: [Artifact.Eye, Artifact.Windbinder, Artifact.Warden],
};

export const Nara: Hero = {
  id: 'NARA',
  name: 'Nara',
  nickname: [],
  faction: Faction.Graveborn,
  attribute: Attribute.Strength,
  class: Class.Warrior,
  portraitURL: staticDomain+'graveborn/nara.jpg',
  signature: Signature._15,
  furniture: Furniture._3,
  engraving: Engraving.Unknown,
  artifacts: [Artifact.Chaos, Artifact.Pauldron, Artifact.Eye],
};

export const Ferael: Hero = {
  id: 'FERAEL',
  name: 'Ferael',
  nickname: [],
  faction: Faction.Graveborn,
  attribute: Attribute.Agility,
  class: Class.Ranger,
  portraitURL: staticDomain+'graveborn/ferael.jpg',
  signature: Signature._20,
  furniture: Furniture._9,
  engraving: Engraving._60,
  artifacts: [Artifact.Eye, Artifact.Shroud, Artifact.Blade],
};

export const Baden: Hero = {
  id: 'BADEN',
  name: 'Baden',
  nickname: [],
  faction: Faction.Graveborn,
  attribute: Attribute.Agility,
  class: Class.Warrior,
  portraitURL: staticDomain+'graveborn/baden.jpg',
  signature: Signature._0,
  furniture: Furniture._0,
  engraving: Engraving._0,
  artifacts: [Artifact.Pauldron, Artifact.Chaos, Artifact.Eye],
};

export const Kelthur: Hero = {
  id: 'KELTHUR',
  name: 'Kelthur',
  nickname: [],
  faction: Faction.Graveborn,
  attribute: Attribute.Agility,
  class: Class.Ranger,
  portraitURL: staticDomain+'graveborn/kelthur.jpg',
  signature: Signature._0,
  furniture: Furniture._0,
  engraving: Engraving._0,
  artifacts: [Artifact.Call, Artifact.Shroud, Artifact.Longbow],
};

export const Silas: Hero = {
  id: 'SILAS',
  name: 'Silas',
  nickname: [],
  faction: Faction.Graveborn,
  attribute: Attribute.Intelligence,
  class: Class.Support,
  portraitURL: staticDomain+'graveborn/silas.jpg',
  signature: Signature._30,
  furniture: Furniture._9,
  engraving: Engraving._60,
  artifacts: [Artifact.Call, Artifact.Tidebearer, Artifact.Seraphic, Artifact.OceanicStrings],
};

export const Oden: Hero = {
  id: 'ODEN',
  name: 'Oden',
  nickname: [],
  faction: Faction.Graveborn,
  attribute: Attribute.Intelligence,
  class: Class.Mage,
  portraitURL: staticDomain+'graveborn/oden.jpg',
  signature: Signature._30,
  furniture: Furniture._9,
  engraving: Engraving._31_59,
  artifacts: [Artifact.Windbinder, Artifact.Warden, Artifact.Eye, Artifact.WingedWarden],
};

export const Izold: Hero = {
  id: 'IZOLD',
  name: 'Izold',
  nickname: [],
  faction: Faction.Graveborn,
  attribute: Attribute.Strength,
  class: Class.Warrior,
  portraitURL: staticDomain+'graveborn/izold.jpg',
  signature: Signature._30,
  furniture: Furniture._9,
  engraving: Engraving._0,
  artifacts: [Artifact.Call, Artifact.Carnage, Artifact.Eye],
};

export const Torne: Hero = {
  id: 'TORNE',
  name: 'Torne',
  nickname: [],
  faction: Faction.Graveborn,
  attribute: Attribute.Strength,
  class: Class.Tank,
  portraitURL: staticDomain+'graveborn/torne.jpg',
  signature: Signature._0,
  furniture: Furniture._0,
  engraving: Engraving._0,
  artifacts: [Artifact.Waistband, Artifact.Limit, Artifact.Chalice],
};

export const Daimon: Hero = {
  id: 'DAIMON',
  name: 'Daimon',
  nickname: [],
  faction: Faction.Graveborn,
  attribute: Attribute.Strength,
  class: Class.Tank,
  portraitURL: staticDomain+'graveborn/daimon.jpg',
  signature: Signature._30,
  furniture: Furniture._3,
  engraving: Engraving._1_29,
  artifacts: [Artifact.Call, Artifact.Barricade, Artifact.Waistband, Artifact.Eye, Artifact.Limit],
};

export const Theowyn: Hero = {
  id: 'THEOWYN',
  name: 'Theowyn',
  nickname: [],
  faction: Faction.Graveborn,
  attribute: Attribute.Agility,
  class: Class.Ranger,
  portraitURL: staticDomain+'graveborn/theowyn.jpg',
  signature: Signature._30,
  furniture: Furniture._9,
  engraving: Engraving._0,
  artifacts: [Artifact.Call, Artifact.Eye, Artifact.Shroud, Artifact.Divinity],
};

export const Desira: Hero = {
  id: 'DESIRA',
  name: 'Desira',
  nickname: [],
  faction: Faction.Graveborn,
  attribute: Attribute.Intelligence,
  class: Class.Support,
  portraitURL: staticDomain+'graveborn/desira.jpg',
  signature: Signature._20,
  furniture: Furniture._3,
  engraving: Engraving._1_29,
  artifacts: [Artifact.Call, Artifact.OceanicStrings, Artifact.Seraphic],
};

export const Hodgkin: Hero = {
  id: 'HODGKIN',
  name: 'Hodgkin',
  nickname: [],
  faction: Faction.Graveborn,
  attribute: Attribute.Strength,
  class: Class.Tank,
  portraitURL: staticDomain+'graveborn/hodgkin.jpg',
  signature: Signature._20,
  furniture: Furniture._9,
  engraving: Engraving.Unknown,
  artifacts: [Artifact.Call, Artifact.Waistband, Artifact.Barricade],
};

export const Treznor: Hero = {
  id: 'Treznor',
  name: 'Treznor',
  nickname: [],
  faction: Faction.Graveborn,
  attribute: Attribute.Agility,
  class: Class.Ranger,
  portraitURL: staticDomain+'graveborn/treznor.jpg',
  signature: Signature._20,
  furniture: Furniture._3,
  engraving: Engraving._0,
  artifacts: [Artifact.Divinity, Artifact.Shroud],
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
  Theowyn,
  Desira,
  Hodgkin,
  Treznor,
].sort((a, b) => a.name.localeCompare(b.name));
export default heroes;
