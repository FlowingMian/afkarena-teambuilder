import { Hero } from '../../model/heroes';
import * as Faction from '../../model/characteristics/factions';
import * as Attribute from '../../model/characteristics/attributes';
import * as Class from '../../model/characteristics/classes';
import * as Signature from '../../model/characteristics/signatures';
import * as Furniture from '../../model/characteristics/furnitures';
import * as Engraving from '../../model/characteristics/engravings';
import * as Artifact from '../../model/characteristics/artifacts';
import { staticDomain } from '../../model/common';

export const Athalia: Hero = {
  id: 'ATHALIA',
  name: 'Athalia',
  nickname: [],
  faction: Faction.Celestial,
  attribute: Attribute.Agility,
  class: Class.Ranger,
  portraitURL: staticDomain+'celestial/athalia.jpg',
  signature: Signature._30,
  furniture: Furniture._3,
  engraving: Engraving._60,
  artifacts: [Artifact.Call, Artifact.Eye, Artifact.Shroud, Artifact.Longbow],
};

export const ElijahLailah: Hero = {
  id: 'ELIJAHLAILAH',
  name: 'Elijah and Lailah',
  nickname: ['Twins'],
  faction: Faction.Celestial,
  attribute: Attribute.Intelligence,
  class: Class.Support,
  portraitURL: staticDomain+'celestial/elijahlailah.jpg',
  signature: Signature._20,
  furniture: Furniture._3,
  engraving: Engraving._31_59,
  artifacts: [Artifact.Call, Artifact.Eye, Artifact.OceanicStrings],
};

export const Orthros: Hero = {
  id: 'ORTHOS',
  name: 'Orthros',
  nickname: [],
  faction: Faction.Celestial,
  attribute: Attribute.Strength,
  class: Class.Tank,
  portraitURL: staticDomain+'celestial/orthros.jpg',
  signature: Signature._30,
  furniture: Furniture._3,
  engraving: Engraving.Unknown,
  artifacts: [Artifact.Barricade, Artifact.Waistband, Artifact.Call],
};

export const Talene: Hero = {
  id: 'TALENE',
  name: 'Talene',
  nickname: [],
  faction: Faction.Celestial,
  attribute: Attribute.Agility,
  class: Class.Support,
  portraitURL: staticDomain+'celestial/talene.jpg',
  signature: Signature._30,
  furniture: Furniture._9,
  engraving: Engraving._0,
  artifacts: [Artifact.Call, Artifact.Tidebearer, Artifact.Eye, Artifact.Blade],
};

export const Wukong: Hero = {
  id: 'WUKONG',
  name: 'Wu Kong',
  nickname: ['WuKong'],
  faction: Faction.Celestial,
  attribute: Attribute.Strength,
  class: Class.Warrior,
  portraitURL: staticDomain+'celestial/wukong.jpg',
  signature: Signature._20,
  furniture: Furniture._3,
  engraving: Engraving._0,
  artifacts: [Artifact.Eye, Artifact.Call, Artifact.Pauldron, Artifact.Chaos],
};

export const Flora: Hero = {
  id: 'FLORA',
  name: 'Flora',
  nickname: [],
  faction: Faction.Celestial,
  attribute: Attribute.Intelligence,
  class: Class.Mage,
  portraitURL: staticDomain+'celestial/flora.jpg',
  signature: Signature._20,
  furniture: Furniture._3,
  engraving: Engraving._0,
  artifacts: [Artifact.Eye, Artifact.Warden],
};

export const Zaphrael: Hero = {
  id: 'ZAPHRAEL',
  name: 'Zaphrael',
  nickname: [],
  faction: Faction.Celestial,
  attribute: Attribute.Intelligence,
  class: Class.Mage,
  portraitURL: staticDomain+'celestial/zaphrael.jpg',
  signature: Signature._0,
  furniture: Furniture._9,
  engraving: Engraving.Unknown,
  artifacts: [Artifact.Windbinder, Artifact.Eye, Artifact.Call],
};

export const Alna: Hero = {
  id: 'ALNA',
  name: 'Alna',
  nickname: [],
  faction: Faction.Celestial,
  attribute: Attribute.Agility,
  class: Class.Warrior,
  portraitURL: staticDomain+'celestial/alna.jpg',
  signature: Signature._30,
  furniture: Furniture._9,
  engraving: Engraving.Unknown,
  artifacts: [Artifact.Chaos, Artifact.Carnage, Artifact.Call, Artifact.Eye, Artifact.Pauldron],
};

export const Morael: Hero = {
  id: 'MORAEL',
  name: 'Morael',
  nickname: [],
  faction: Faction.Celestial,
  attribute: Attribute.Intelligence,
  class: Class.Mage,
  portraitURL: staticDomain+'celestial/morael.jpg',
  signature: Signature._20,
  furniture: Furniture._9,
  engraving: Engraving.Unknown,
  artifacts: [Artifact.Windbinder, Artifact.Eye, Artifact.Call],
};

export const Titus: Hero = {
  id: 'TITUS',
  name: 'Titus',
  nickname: [],
  faction: Faction.Celestial,
  attribute: Attribute.Strength,
  class: Class.Tank,
  portraitURL: staticDomain+'celestial/titus.jpg',
  signature: Signature.Unknown,
  furniture: Furniture.Unknown,
  engraving: Engraving.Unknown,
  artifacts: [Artifact.Barricade, Artifact.Limit, Artifact.Waistband],
};

export const Haelus: Hero = {
  id: 'HAELUS',
  name: 'Haelus',
  nickname: [],
  faction: Faction.Celestial,
  attribute: Attribute.Intelligence,
  class: Class.Support,
  portraitURL: staticDomain+'celestial/haelus.jpg',
  signature: Signature._20,
  furniture: Furniture._3,
  engraving: Engraving._0,
  artifacts: [Artifact.Seraphic, Artifact.Tidebearer, Artifact.OceanicStrings, Artifact.Call],
};

const heroes: Array<Hero> = [
  Athalia,
  ElijahLailah,
  Orthros,
  Talene,
  Wukong,
  Flora,
  Zaphrael,
  Alna,
  Morael,
  Titus,
  Haelus,
].sort((a, b) => a.name.localeCompare(b.name));
export default heroes;
