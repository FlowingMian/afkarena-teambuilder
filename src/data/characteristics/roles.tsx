import { Role } from '../../model/characteristics';

export const Core:Role = {
  id: 'CORE',
  name: 'Core',
};

export const SubDPS:Role = {
  id: 'SUBDPS',
  name: 'Sub DPS',
};

export const CrowdControl:Role = {
  id: 'CC',
  name: 'Crowd Control',
};

export const Utility:Role = {
  id: 'UTILITY',
  name: 'Utility',
};

export const Tankiness:Role = {
  id: 'TANKINESS',
  name: 'Tankiness',
};

export const Energy:Role = {
  id: 'ENERGY',
  name: 'Energy support',
};

export const Enabler:Role = {
  id: 'ENABLER',
  name: 'Enabler',
};

export const Sustain:Role = {
  id: 'SUSTAIN',
  name: 'Enhanced Sustain',
};

export const Displacement:Role = {
  id: 'DISPLACEMENT',
  name: 'Displacement',
};

export const Buffer:Role = {
  id: 'BUFFER',
  name: 'Buffer',
};

export const Protection:Role = {
  id: 'PROTECTION',
  name: 'Protection',
};

export const Damage:Role = {
  id: 'DAMAGE',
  name: 'Damage',
};


export const Roles: Array<Role> = [
  Core,
  SubDPS,
  CrowdControl,
  Utility,
  Tankiness,
  Energy,
  Enabler,
  Sustain,
  Displacement,
  Buffer,
  Protection,
  Damage,
];