import { Hero } from '../../model/heroes';
import * as Faction from '../../model/characteristics/factions';
import * as Attribute from '../../model/characteristics/attributes';
import * as Class from '../../model/characteristics/classes';
import * as Signature from '../../model/characteristics/signatures';
import * as Furniture from '../../model/characteristics/furnitures';
import * as Engraving from '../../model/characteristics/engravings';
import * as Artifact from '../../model/characteristics/artifacts';
import { staticDomain } from '../../model/common';

export const Estrilda: Hero = {
  id: 'ESTRILDA',
  name: 'Estrilda',
  nickname: [],
  faction: Faction.Lightbearer,
  attribute: Attribute.Strength,
  class: Class.Warrior,
  portraitURL: staticDomain+'lightbearer/estrilda.jpg',
  signature: Signature._10,
  furniture: Furniture._3,
  engraving: Engraving._0,
  artifacts: [Artifact.Chaos, Artifact.Eye],
};

export const Belinda: Hero = {
  id: 'BELINDA',
  name: 'Belinda',
  nickname: [],
  faction: Faction.Lightbearer,
  attribute: Attribute.Intelligence,
  class: Class.Mage,
  portraitURL: staticDomain+'lightbearer/belinda.jpg',
  signature: Signature._0,
  furniture: Furniture._0,
  engraving: Engraving._0,
  artifacts: [Artifact.Windbinder, Artifact.Eye, Artifact.Blade],
};

export const Raine: Hero = {
  id: 'RAINE',
  name: 'Raine',
  nickname: [],
  faction: Faction.Lightbearer,
  attribute: Attribute.Agility,
  class: Class.Support,
  portraitURL: staticDomain+'lightbearer/raine.jpg',
  signature: Signature._10,
  furniture: Furniture._3,
  engraving: Engraving._0,
  artifacts: [Artifact.Call, Artifact.Eye, Artifact.Tidebearer],
};

export const Fawkes: Hero = {
  id: 'FAWKES',
  name: 'Fawkes',
  nickname: [],
  faction: Faction.Lightbearer,
  attribute: Attribute.Agility,
  class: Class.Ranger,
  portraitURL: staticDomain+'lightbearer/fawkes.jpg',
  signature: Signature._10,
  furniture: Furniture._0,
  engraving: Engraving._30,
  artifacts: [Artifact.Shroud, Artifact.Longbow],
};

export const Lucius: Hero = {
  id: 'LUCIUS',
  name: 'Lucius',
  nickname: [],
  faction: Faction.Lightbearer,
  attribute: Attribute.Strength,
  class: Class.Tank,
  portraitURL: staticDomain+'lightbearer/lucius.jpg',
  signature: Signature._0,
  furniture: Furniture._0,
  engraving: Engraving._0,
  artifacts: [Artifact.Waistband, Artifact.Barricade, Artifact.Limit],
};

export const Thane: Hero = {
  id: 'THANE',
  name: 'Thane',
  nickname: [],
  faction: Faction.Lightbearer,
  attribute: Attribute.Agility,
  class: Class.Ranger,
  portraitURL: staticDomain+'lightbearer/thane.jpg',
  signature: Signature._0,
  furniture: Furniture._0,
  engraving: Engraving.Unknown,
  artifacts: [Artifact.Eye, Artifact.Grace, Artifact.Shroud],
};

export const Hendrik: Hero = {
  id: 'HENDRIK',
  name: 'Hendrik',
  nickname: [],
  faction: Faction.Lightbearer,
  attribute: Attribute.Strength,
  class: Class.Tank,
  portraitURL: staticDomain+'lightbearer/hendrik.jpg',
  signature: Signature._10,
  furniture: Furniture._3,
  engraving: Engraving._0,
  artifacts: [Artifact.Waistband, Artifact.Barricade, Artifact.Limit],
};

export const Rowan: Hero = {
  id: 'ROWAN',
  name: 'Rowan',
  nickname: [],
  faction: Faction.Lightbearer,
  attribute: Attribute.Intelligence,
  class: Class.Support,
  portraitURL: staticDomain+'lightbearer/rowan.jpg',
  signature: Signature._30,
  furniture: Furniture._0,
  engraving: Engraving._0,
  artifacts: [Artifact.Call, Artifact.Tidebearer, Artifact.Seraphic],
};

export const Gwyneth: Hero = {
  id: 'GWYNETH',
  name: 'Gwyneth',
  nickname: [],
  faction: Faction.Lightbearer,
  attribute: Attribute.Strength,
  class: Class.Ranger,
  portraitURL: staticDomain+'lightbearer/gwyneth.jpg',
  signature: Signature._30,
  furniture: Furniture._3,
  engraving: Engraving._30,
  artifacts: [Artifact.Shroud, Artifact.Call, Artifact.Eye, Artifact.Longbow],
};

export const Rosaline: Hero = {
  id: 'ROSALINE',
  name: 'Rosaline',
  nickname: [],
  faction: Faction.Lightbearer,
  attribute: Attribute.Intelligence,
  class: Class.Support,
  portraitURL: staticDomain+'lightbearer/rosaline.jpg',
  signature: Signature._20,
  furniture: Furniture._3,
  engraving: Engraving._0,
  artifacts: [Artifact.Call, Artifact.Blade, Artifact.Eye, Artifact.Seraphic],
};

export const Cecilia: Hero = {
  id: 'CECILIA',
  name: 'Cecilia',
  nickname: [],
  faction: Faction.Lightbearer,
  attribute: Attribute.Agility,
  class: Class.Ranger,
  portraitURL: staticDomain+'lightbearer/cecilia.jpg',
  signature: Signature._0,
  furniture: Furniture._0,
  engraving: Engraving.Unknown,
  artifacts: [Artifact.Shroud, Artifact.Eye, Artifact.Longbow],
};

export const Rigby: Hero = {
  id: 'RIGBY',
  name: 'Rigby',
  nickname: [],
  faction: Faction.Lightbearer,
  attribute: Attribute.Strength,
  class: Class.Warrior,
  portraitURL: staticDomain+'lightbearer/rigby.jpg',
  signature: Signature._0,
  furniture: Furniture._0,
  engraving: Engraving._0,
  artifacts: [Artifact.Pauldron, Artifact.Chalice, Artifact.Grace],
};

export const Oscar: Hero = {
  id: 'Oscar',
  name: 'Oscar',
  nickname: [],
  faction: Faction.Lightbearer,
  attribute: Attribute.Agility,
  class: Class.Ranger,
  portraitURL: staticDomain+'lightbearer/oscar.jpg',
  signature: Signature._0,
  furniture: Furniture._0,
  engraving: Engraving._0,
  artifacts: [Artifact.Eye, Artifact.Shroud, Artifact.Longbow],
};

export const Eluard: Hero = {
  id: 'ELUARD',
  name: 'Eluard',
  nickname: [],
  faction: Faction.Lightbearer,
  attribute: Attribute.Intelligence,
  class: Class.Mage,
  portraitURL: staticDomain+'lightbearer/eluard.jpg',
  signature: Signature._15,
  furniture: Furniture._3,
  engraving: Engraving.Unknown,
  artifacts: [Artifact.Call, Artifact.Windbinder, Artifact.Eye],
};

export const Peggy: Hero = {
  id: 'PEGGY',
  name: 'Peggy',
  nickname: [],
  faction: Faction.Lightbearer,
  attribute: Attribute.Intelligence,
  class: Class.Support,
  portraitURL: staticDomain+'lightbearer/peggy.jpg',
  signature: Signature.Unknown,
  furniture: Furniture.Unknown,
  engraving: Engraving.Unknown,
  artifacts: [Artifact.Call, Artifact.Tidebearer, Artifact.Eye],
};

export const Walker: Hero = {
  id: 'WALKER',
  name: 'Walker',
  nickname: [],
  faction: Faction.Lightbearer,
  attribute: Attribute.Strength,
  class: Class.Warrior,
  portraitURL: staticDomain+'lightbearer/walker.jpg',
  signature: Signature._0,
  furniture: Furniture._0,
  engraving: Engraving._0,
  artifacts: [Artifact.Chaos, Artifact.Eye, Artifact.Blade],
};

export const Morrow: Hero = {
  id: 'MORROW',
  name: 'Morrow',
  nickname: [],
  faction: Faction.Lightbearer,
  attribute: Attribute.Intelligence,
  class: Class.Mage,
  portraitURL: staticDomain+'lightbearer/morrow.jpg',
  signature: Signature._20,
  furniture: Furniture._3,
  engraving: Engraving.Unknown,
  artifacts: [Artifact.Windbinder, Artifact.Warden, Artifact.WingedWarden],
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
  Peggy,
  Walker,
  Morrow,
].sort((a, b) => a.name.localeCompare(b.name));
export default heroes;
