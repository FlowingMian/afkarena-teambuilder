import { Hero } from '../../model/heroes';
import * as Faction from '../../model/characteristics/factions';
import * as Attribute from '../../model/characteristics/attributes';
import * as Class from '../../model/characteristics/classes';
import * as Signature from '../../model/characteristics/signatures';
import * as Furniture from '../../model/characteristics/furnitures';
import * as Engraving from '../../model/characteristics/engravings';
import * as Artifact from '../../model/characteristics/artifacts';
import { staticDomain } from '../../model/common';

export const Arthur: Hero = {
  id: 'ARTHUR',
  name: 'Arthur',
  nickname: [],
  faction: Faction.Dimensional,
  attribute: Attribute.Strength,
  class: Class.Tank,
  portraitURL: staticDomain+'dimensional/arthur.jpg',
  signature: Signature._30,
  furniture: Furniture._3,
  engraving: Engraving.Unknown,
  artifacts: [Artifact.Barricade, Artifact.Waistband],
};

export const Ukyo: Hero = {
  id: 'UKYO',
  name: 'Ukyo',
  nickname: [],
  faction: Faction.Dimensional,
  attribute: Attribute.Agility,
  class: Class.Warrior,
  portraitURL: staticDomain+'dimensional/ukyo.jpg',
  signature: Signature._30,
  furniture: Furniture._0,
  engraving: Engraving.Unknown,
  artifacts: [Artifact.Chaos, Artifact.Eye, Artifact.Pauldron],
};

export const Nakoruru: Hero = {
  id: 'NAKORURU',
  name: 'Nakoruru',
  nickname: [],
  faction: Faction.Dimensional,
  attribute: Attribute.Agility,
  class: Class.Ranger,
  portraitURL: staticDomain+'dimensional/nakoruru.jpg',
  signature: Signature._10,
  furniture: Furniture._3,
  engraving: Engraving._0,
  artifacts: [Artifact.Shroud, Artifact.Longbow, Artifact.Eye],
};

export const Ezio: Hero = {
  id: 'EZIO',
  name: 'Ezio',
  nickname: [],
  faction: Faction.Dimensional,
  attribute: Attribute.Agility,
  class: Class.Ranger,
  portraitURL: staticDomain+'dimensional/ezio.jpg',
  signature: Signature._25,
  furniture: Furniture._9,
  engraving: Engraving.Unknown,
  artifacts: [Artifact.Call, Artifact.Shroud, Artifact.Grace],
};

export const Albedo: Hero = {
  id: 'ALBEBO',
  name: 'Albedo',
  nickname: [],
  faction: Faction.Dimensional,
  attribute: Attribute.Strength,
  class: Class.Tank,
  portraitURL: staticDomain+'dimensional/albedo.jpg',
  signature: Signature._30,
  furniture: Furniture._3,
  engraving: Engraving._0,
  artifacts: [Artifact.Barricade, Artifact.Limit, Artifact.Eye, Artifact.Chalice],
};

export const Ainz: Hero = {
  id: 'AINZ',
  name: 'Ainz Ooal Gown',
  nickname: [],
  faction: Faction.Dimensional,
  attribute: Attribute.Intelligence,
  class: Class.Mage,
  portraitURL: staticDomain+'dimensional/ainzooalgown.jpg',
  signature: Signature._30,
  furniture: Furniture._9,
  engraving: Engraving._60,
  artifacts: [Artifact.Warden, Artifact.WingedWarden, Artifact.Call, Artifact.Blade],
};

export const QUEEN: Hero = {
  id: 'QUEEN',
  name: 'QUEEN',
  nickname: [],
  faction: Faction.Dimensional,
  attribute: Attribute.Strength,
  class: Class.Warrior,
  portraitURL: staticDomain+'dimensional/queen.jpg',
  signature: Signature._10,
  furniture: Furniture._9,
  engraving: Engraving._0,
  artifacts: [Artifact.Eye, Artifact.Chaos, Artifact.Carnage],
};

export const JOKER: Hero = {
  id: 'JOKER',
  name: 'JOKER',
  nickname: [],
  faction: Faction.Dimensional,
  attribute: Attribute.Agility,
  class: Class.Ranger,
  portraitURL: staticDomain+'dimensional/joker.jpg',
  signature: Signature._20,
  furniture: Furniture._3,
  engraving: Engraving.Unknown,
  artifacts: [Artifact.Shroud, Artifact.Eye, Artifact.Longbow],
};

export const PrinceOfPersia: Hero = {
  id: 'PRINCE_OF_PERSIA',
  name: 'Prince Of Persia',
  nickname: ['PoP'],
  faction: Faction.Dimensional,
  attribute: Attribute.Agility,
  class: Class.Ranger,
  portraitURL: staticDomain+'dimensional/pop.jpg',
  signature: Signature._20,
  furniture: Furniture._3,
  engraving: Engraving._30,
  artifacts: [Artifact.Eye, Artifact.Grace, Artifact.Shroud],
};

export const Merlin: Hero = {
  id: 'MERLIN',
  name: 'Merlin',
  nickname: [],
  faction: Faction.Dimensional,
  attribute: Attribute.Intelligence,
  class: Class.Support,
  portraitURL: staticDomain+'dimensional/merlin.jpg',
  signature: Signature._30,
  furniture: Furniture._9,
  engraving: Engraving.Unknown,
  artifacts: [Artifact.Call, Artifact.Tidebearer, Artifact.OceanicStrings],
};

export const Leonardo: Hero = {
  id: 'LEONARDO',
  name: 'Leonardo',
  nickname: ['Leo', 'LDV'],
  faction: Faction.Dimensional,
  attribute: Attribute.Intelligence,
  class: Class.Mage,
  portraitURL: staticDomain+'dimensional/leonardo.jpg',
  signature: Signature._30,
  furniture: Furniture._9,
  engraving: Engraving.Unknown,
  artifacts: [Artifact.Windbinder, Artifact.Warden, Artifact.WingedWarden],
};

const heroes: Array<Hero> = [
  Arthur,
  Ukyo,
  Nakoruru,
  Ezio,
  Albedo,
  Ainz,
  QUEEN,
  JOKER,
  PrinceOfPersia,
  Merlin,
  Leonardo,
].sort((a, b) => a.name.localeCompare(b.name));
export default heroes;
