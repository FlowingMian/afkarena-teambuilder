import { Artifact, getImageIcon } from './characteristics';

const DEFAULT_SIZE  = '1.25rem';

export const Grace:Artifact = {
  id: 'GRACE',
  name: 'Dura\'s Grace',
  iconURL: (size=DEFAULT_SIZE) => getImageIcon('artifact/grace.jpg', size),
};
export const Eye:Artifact = {
  id: 'EYE',
  name: 'Dura\'s Eye',
  iconURL: (size=DEFAULT_SIZE) => getImageIcon('artifact/eye.jpg', size),
};
export const Call:Artifact = {
  id: 'CALL',
  name: 'Dura\'s Call',
  iconURL: (size=DEFAULT_SIZE) => getImageIcon('artifact/call.jpg', size),
};
export const Drape:Artifact = {
  id: 'DRAPE',
  name: 'Dura\'s Drape',
  iconURL: (size=DEFAULT_SIZE) => getImageIcon('artifact/drape.jpg', size),
};
export const Blade:Artifact = {
  id: 'BLADE',
  name: 'Dura\'s Blade',
  iconURL: (size=DEFAULT_SIZE) => getImageIcon('artifact/blade.jpg', size),
};
export const Chalice:Artifact = {
  id: 'CHALICE',
  name: 'Dura\'s Chalice of Vitality',
  iconURL: (size=DEFAULT_SIZE) => getImageIcon('artifact/chalice.jpg', size),
};
export const Conviction:Artifact = {
  id: 'CONVICTION',
  name: 'Dura\'s Conviction',
  iconURL: (size=DEFAULT_SIZE) => getImageIcon('artifact/conviction.jpg', size),
};

export const Barricade:Artifact = {
  id: 'BARRICADE',
  name: 'The Barricade',
  iconURL: (size=DEFAULT_SIZE) => getImageIcon('artifact/barricade.jpg', size),
};
export const Waistband:Artifact = {
  id: 'WAISTBAND',
  name: 'Waistband of Resilience',
  iconURL: (size=DEFAULT_SIZE) => getImageIcon('artifact/waistband.jpg', size),
};
export const Limit:Artifact = {
  id: 'LIFES_LIMIT',
  name: 'Life\'s Limit',
  iconURL: (size=DEFAULT_SIZE) => getImageIcon('artifact/limit.jpg', size),
};

export const Chaos:Artifact = {
  id: 'CHAOS_BRINGER',
  name: 'Chaos Bringer',
  iconURL: (size=DEFAULT_SIZE) => getImageIcon('artifact/chaos.jpg', size),
};
export const Carnage:Artifact = {
  id: 'CARNAGE',
  name: 'Carnage',
  iconURL: (size=DEFAULT_SIZE) => getImageIcon('artifact/carnage.jpg', size),
};
export const Pauldron:Artifact = {
  id: 'PAULDRON',
  name: 'Pauldron of Burning Fury',
  iconURL: (size=DEFAULT_SIZE) => getImageIcon('artifact/pauldron.jpg', size),
};

export const Shroud:Artifact = {
  id: 'SHROUD',
  name: 'Shroud of Verdure',
  iconURL: (size=DEFAULT_SIZE) => getImageIcon('artifact/shroud.jpg', size),
};
export const Longbow:Artifact = {
  id: 'LONBOW',
  name: 'Verdant Longbow',
  iconURL: (size=DEFAULT_SIZE) => getImageIcon('artifact/longbow.jpg', size),
};
export const Divinity:Artifact = {
  id: 'DIVINITY',
  name: 'Dual Divinity',
  iconURL: (size=DEFAULT_SIZE) => getImageIcon('artifact/divinity.jpg', size),
};

export const Windbinder:Artifact = {
  id: 'WINDBINDER',
  name: 'Windbinder',
  iconURL: (size=DEFAULT_SIZE) => getImageIcon('artifact/windbinder.jpg', size),
};
export const Warden:Artifact = {
  id: 'WARDEN',
  name: 'Warden of the Arcane',
  iconURL: (size=DEFAULT_SIZE) => getImageIcon('artifact/warden.jpg', size),
};
export const WingedWarden:Artifact = {
  id: 'WINGED',
  name: 'Winged Warden',
  iconURL: (size=DEFAULT_SIZE) => getImageIcon('artifact/wingedwarden.jpg', size),
};

export const Tidebearer:Artifact = {
  id: 'TIDEBEARER',
  name: 'Tidebearer',
  iconURL: (size=DEFAULT_SIZE) => getImageIcon('artifact/tidebearer.jpg', size),
};
export const Seraphic:Artifact = {
  id: 'SERAPHIC',
  name: 'Seraphic Tide',
  iconURL: (size=DEFAULT_SIZE) => getImageIcon('artifact/seraphictide.jpg', size),
};
export const OceanicStrings:Artifact = {
  id: 'STRING',
  name: 'Oceanic Strings',
  iconURL: (size=DEFAULT_SIZE) => getImageIcon('artifact/oceanicstrings.jpg', size),
};

export const Artifacts: Array<Artifact> = [
  Grace,
  Eye,
  Call,
  Drape,
  Blade,
  Chalice,
  Conviction,
  Barricade,
  Waistband,
  Limit,
  Chaos,
  Carnage,
  Pauldron,
  Shroud,
  Longbow,
  Divinity,
  Windbinder,
  Warden,
  WingedWarden,
  Tidebearer,
  Seraphic,
  OceanicStrings,
];