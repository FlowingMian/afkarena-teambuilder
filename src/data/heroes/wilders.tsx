import { Hero } from '../../model/heroes';
import * as Faction from '../../model/characteristics/factions';
import * as Attribute from '../../model/characteristics/attributes';
import * as Class from '../../model/characteristics/classes';
import * as Signature from '../../model/characteristics/signatures';
import * as Furniture from '../../model/characteristics/furnitures';
import * as Engraving from '../../model/characteristics/engravings';
import * as Artifact from '../../model/characteristics/artifacts';
import { staticDomain } from '../../model/common';

export const Nemora: Hero = {
  id: 'NEMORA',
  name: 'Nemora',
  nickname: [],
  faction: Faction.Wilder,
  attribute: Attribute.Intelligence,
  class: Class.Support,
  portraitURL: staticDomain+'wilder/nemora.jpg',
  signature: Signature._15,
  furniture: Furniture._9,
  engraving: Engraving._0,
  artifacts: [Artifact.OceanicStrings, Artifact.Tidebearer, Artifact.Grace],
};

export const Kaz: Hero = {
  id: 'KAZ',
  name: 'Kaz',
  nickname: [],
  faction: Faction.Wilder,
  attribute: Attribute.Agility,
  class: Class.Ranger,
  portraitURL: staticDomain+'wilder/kaz.jpg',
  signature: Signature._30,
  furniture: Furniture._9,
  engraving: Engraving.Unknown,
  artifacts: [Artifact.Grace, Artifact.Shroud, Artifact.Eye],
};

export const Lyca: Hero = {
  id: 'LYCA',
  name: 'Lyca',
  nickname: [],
  faction: Faction.Wilder,
  attribute: Attribute.Agility,
  class: Class.Ranger,
  portraitURL: staticDomain+'wilder/lyca.jpg',
  signature: Signature._20,
  furniture: Furniture._3,
  engraving: Engraving._0,
  artifacts: [Artifact.Shroud, Artifact.Longbow, Artifact.Eye],
};

export const Tasi: Hero = {
  id: 'TASI',
  name: 'Tasi',
  nickname: [],
  faction: Faction.Wilder,
  attribute: Attribute.Intelligence,
  class: Class.Support,
  portraitURL: staticDomain+'wilder/tasi.jpg',
  signature: Signature._15,
  furniture: Furniture._3,
  engraving: Engraving.Unknown,
  artifacts: [Artifact.Call, Artifact.Eye, Artifact.Tidebearer],
};

export const Ulmus: Hero = {
  id: 'ULMUS',
  name: 'Ulmus',
  nickname: [],
  faction: Faction.Wilder,
  attribute: Attribute.Strength,
  class: Class.Tank,
  portraitURL: staticDomain+'wilder/ulmus.jpg',
  signature: Signature._0,
  furniture: Furniture._0,
  engraving: Engraving._0,
  artifacts: [Artifact.Waistband, Artifact.Limit, Artifact.Drape],
};

export const Seirus: Hero = {
  id: 'SEIRUS',
  name: 'Seirus',
  nickname: [],
  faction: Faction.Wilder,
  attribute: Attribute.Strength,
  class: Class.Warrior,
  portraitURL: staticDomain+'wilder/seirus.jpg',
  signature: Signature._0,
  furniture: Furniture._0,
  engraving: Engraving._0,
  artifacts: [Artifact.Pauldron, Artifact.Chalice, Artifact.Call],
};

export const Eironn: Hero = {
  id: 'EIRONN',
  name: 'Eironn',
  nickname: [],
  faction: Faction.Wilder,
  attribute: Attribute.Agility,
  class: Class.Ranger,
  portraitURL: staticDomain+'wilder/eironn.jpg',
  signature: Signature._30,
  furniture: Furniture._3,
  engraving: Engraving._1_29,
  artifacts: [Artifact.Call, Artifact.Shroud],
};

export const Gorvo: Hero = {
  id: 'GORVO',
  name: 'Gorvo',
  nickname: [],
  faction: Faction.Wilder,
  attribute: Attribute.Strength,
  class: Class.Tank,
  portraitURL: staticDomain+'wilder/gorvo.jpg',
  signature: Signature._10,
  furniture: Furniture._3,
  engraving: Engraving._0,
  artifacts: [Artifact.Barricade, Artifact.Waistband],
};

export const Lorsan: Hero = {
  id: 'LORSAN',
  name: 'Lorsan',
  nickname: [],
  faction: Faction.Wilder,
  attribute: Attribute.Intelligence,
  class: Class.Mage,
  portraitURL: staticDomain+'wilder/lorsan.jpg',
  signature: Signature._0,
  furniture: Furniture._0,
  engraving: Engraving._0,
  artifacts: [Artifact.Call, Artifact.Warden, Artifact.WingedWarden, Artifact.Windbinder],
};

export const Saurus: Hero = {
  id: 'SAURUS',
  name: 'Saurus',
  nickname: [],
  faction: Faction.Wilder,
  attribute: Attribute.Strength,
  class: Class.Warrior,
  portraitURL: staticDomain+'wilder/saurus.jpg',
  signature: Signature._30,
  furniture: Furniture._0,
  engraving: Engraving._1_29,
  artifacts: [Artifact.Chaos, Artifact.Blade, Artifact.Eye],
};

export const Solise: Hero = {
  id: 'SOLISE',
  name: 'Solise',
  nickname: [],
  faction: Faction.Wilder,
  attribute: Attribute.Intelligence,
  class: Class.Mage,
  portraitURL: staticDomain+'wilder/solise.jpg',
  signature: Signature._20,
  furniture: Furniture._3,
  engraving: Engraving.Unknown,
  artifacts: [Artifact.Windbinder, Artifact.Eye, Artifact.Warden],
};

export const Pippa: Hero = {
  id: 'PIPPA',
  name: 'Pippa',
  nickname: [],
  faction: Faction.Wilder,
  attribute: Attribute.Intelligence,
  class: Class.Mage,
  portraitURL: staticDomain+'wilder/pippa.jpg',
  signature: Signature._20,
  furniture: Furniture._9,
  engraving: Engraving._0,
  artifacts: [Artifact.Windbinder, Artifact.WingedWarden],
};

export const Respen: Hero = {
  id: 'RESPEN',
  name: 'Respen',
  nickname: [],
  faction: Faction.Wilder,
  attribute: Attribute.Agility,
  class: Class.Ranger,
  portraitURL: staticDomain+'wilder/respen.jpg',
  signature: Signature._0,
  furniture: Furniture._3,
  engraving: Engraving.Unknown,
  artifacts: [Artifact.Eye, Artifact.Shroud, Artifact.Call],
};

export const Raku: Hero = {
  id: 'RAKU',
  name: 'Raku',
  nickname: [],
  faction: Faction.Wilder,
  attribute: Attribute.Agility,
  class: Class.Ranger,
  portraitURL: staticDomain+'wilder/raku.jpg',
  signature: Signature._30,
  furniture: Furniture._3,
  engraving: Engraving._31_59,
  artifacts: [Artifact.Eye, Artifact.Longbow, Artifact.Shroud],
};

export const Mishka: Hero = {
  id: 'MISHKA',
  name: 'Mishka',
  nickname: [],
  faction: Faction.Wilder,
  attribute: Attribute.Strength,
  class: Class.Tank,
  portraitURL: staticDomain+'wilder/mishka.jpg',
  signature: Signature._20,
  furniture: Furniture._9,
  engraving: Engraving.Unknown,
  artifacts: [Artifact.Waistband, Artifact.Barricade, Artifact.Limit],
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
  Raku,
  Mishka,
].sort((a, b) => a.name.localeCompare(b.name));
export default heroes;
