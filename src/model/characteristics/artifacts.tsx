import { Artifact, getImageIcon } from './characteristics';

const DEFAULT_SIZE  = '1.25rem';

export const Grace:Artifact = {
  id: 'GRACE',
  name: 'Dura\'s Grace',
  iconURL: (size=DEFAULT_SIZE) => getImageIcon('artifact/grace.webp', size),
};
export const Eye:Artifact = {
  id: 'EYE',
  name: 'Dura\'s Eye',
  iconURL: (size=DEFAULT_SIZE) => getImageIcon('artifact/eye.webp', size),
};
export const Call:Artifact = {
  id: 'CALL',
  name: 'Dura\'s Call',
  iconURL: (size=DEFAULT_SIZE) => getImageIcon('artifact/call.webp', size),
};
export const Drape:Artifact = {
  id: 'DRAPE',
  name: 'Dura\'s Drape',
  iconURL: (size=DEFAULT_SIZE) => getImageIcon('artifact/drape.webp', size),
};
export const Blade:Artifact = {
  id: 'BLADE',
  name: 'Dura\'s Blade',
  iconURL: (size=DEFAULT_SIZE) => getImageIcon('artifact/blade.webp', size),
};
export const Chalice:Artifact = {
  id: 'CHALICE',
  name: 'Dura\'s Chalice of Vitality',
  iconURL: (size=DEFAULT_SIZE) => getImageIcon('artifact/chalice.webp', size),
};
export const Conviction:Artifact = {
  id: 'CONVICTION',
  name: 'Dura\'s Conviction',
  iconURL: (size=DEFAULT_SIZE) => getImageIcon('artifact/conviction.webp', size),
};

export const Barricade:Artifact = {
  id: 'BARRICADE',
  name: 'The Barricade',
  iconURL: (size=DEFAULT_SIZE) => getImageIcon('artifact/barricade.webp', size),
};
export const Waistband:Artifact = {
  id: 'WAISTBAND',
  name: 'Waistband of Resilience',
  iconURL: (size=DEFAULT_SIZE) => getImageIcon('artifact/waistband.webp', size),
};

export const Chaos:Artifact = {
  id: 'CHAOS_BRINGER',
  name: 'Chaos Bringer',
  iconURL: (size=DEFAULT_SIZE) => getImageIcon('artifact/chaos.webp', size),
};
export const Carnage:Artifact = {
  id: 'CARNAGE',
  name: 'Carnage',
  iconURL: (size=DEFAULT_SIZE) => getImageIcon('artifact/carnage.webp', size),
};

export const Shroud:Artifact = {
  id: 'SHROUD',
  name: 'Shroud of Verdure',
  iconURL: (size=DEFAULT_SIZE) => getImageIcon('artifact/shroud.webp', size),
};
export const Longbow:Artifact = {
  id: 'LONBOW',
  name: 'Verdant Longbow',
  iconURL: (size=DEFAULT_SIZE) => getImageIcon('artifact/longbow.png', size),
};

export const Windbinder:Artifact = {
  id: 'WINDBINDER',
  name: 'Windbinder',
  iconURL: (size=DEFAULT_SIZE) => getImageIcon('artifact/windbinder.webp', size),
};
export const Warden:Artifact = {
  id: 'Warden',
  name: 'Warden of the Arcane',
  iconURL: (size=DEFAULT_SIZE) => getImageIcon('artifact/warden.webp', size),
};

export const Tidebearer:Artifact = {
  id: 'TIDEBEARER',
  name: 'Tidebearer',
  iconURL: (size=DEFAULT_SIZE) => getImageIcon('artifact/tidebearer.webp', size),
};
export const Seraphic:Artifact = {
  id: 'SERAPHIC',
  name: 'Seraphic Tide',
  iconURL: (size=DEFAULT_SIZE) => getImageIcon('artifact/seraphictide.webp', size),
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
  Chaos,
  Carnage,
  Shroud,
  Longbow,
  Windbinder,
  Warden,
  Tidebearer,
  Seraphic,
];