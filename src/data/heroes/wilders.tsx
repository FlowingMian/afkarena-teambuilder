import { Hero } from '../../model/heroes';
import * as Faction from '../../model/characteristics/factions';
import * as Attribute from '../../model/characteristics/attributes';
import * as Class from '../../model/characteristics/classes';
import { staticDomain } from '../../model/common';

export const Nemora: Hero = {
  id: 'NEMORA',
  name: 'Nemora',
  nickname: [],
  faction: Faction.Wilder,
  attribute: Attribute.Intelligence,
  class: Class.Support,
  portraitURL: staticDomain+'wilder/nemora.webp'
};

export const Kaz: Hero = {
  id: 'KAZ',
  name: 'Kaz',
  nickname: [],
  faction: Faction.Wilder,
  attribute: Attribute.Agility,
  class: Class.Ranger,
  portraitURL: staticDomain+'wilder/kaz.webp'
};

export const Lyca: Hero = {
  id: 'LYCA',
  name: 'Lyca',
  nickname: [],
  faction: Faction.Wilder,
  attribute: Attribute.Agility,
  class: Class.Ranger,
  portraitURL: staticDomain+'wilder/lyca.webp'
};

export const Tasi: Hero = {
  id: 'TASI',
  name: 'Tasi',
  nickname: [],
  faction: Faction.Wilder,
  attribute: Attribute.Intelligence,
  class: Class.Support,
  portraitURL: staticDomain+'wilder/tasi.webp'
};

export const Ulmus: Hero = {
  id: 'ULMUS',
  name: 'Ulmus',
  nickname: [],
  faction: Faction.Wilder,
  attribute: Attribute.Strength,
  class: Class.Tank,
  portraitURL: staticDomain+'wilder/ulmus.webp'
};

export const Seirus: Hero = {
  id: 'SEIRUS',
  name: 'Seirus',
  nickname: [],
  faction: Faction.Wilder,
  attribute: Attribute.Strength,
  class: Class.Warrior,
  portraitURL: staticDomain+'wilder/seirus.webp'
};

export const Eironn: Hero = {
  id: 'EIRONN',
  name: 'Eironn',
  nickname: [],
  faction: Faction.Wilder,
  attribute: Attribute.Agility,
  class: Class.Ranger,
  portraitURL: staticDomain+'wilder/eironn.webp'
};

export const Gorvo: Hero = {
  id: 'GORVO',
  name: 'Gorvo',
  nickname: [],
  faction: Faction.Wilder,
  attribute: Attribute.Strength,
  class: Class.Tank,
  portraitURL: staticDomain+'wilder/gorvo.webp'
};

export const Lorsan: Hero = {
  id: 'LORSAN',
  name: 'Lorsan',
  nickname: [],
  faction: Faction.Wilder,
  attribute: Attribute.Intelligence,
  class: Class.Mage,
  portraitURL: staticDomain+'wilder/lorsan.webp'
};

export const Saurus: Hero = {
  id: 'SAURUS',
  name: 'Saurus',
  nickname: [],
  faction: Faction.Wilder,
  attribute: Attribute.Strength,
  class: Class.Warrior,
  portraitURL: staticDomain+'wilder/saurus.webp'
};

export const Solise: Hero = {
  id: 'SOLISE',
  name: 'Solise',
  nickname: [],
  faction: Faction.Wilder,
  attribute: Attribute.Intelligence,
  class: Class.Mage,
  portraitURL: staticDomain+'wilder/solise.webp'
};

export const Pippa: Hero = {
  id: 'PIPPA',
  name: 'Pippa',
  nickname: [],
  faction: Faction.Wilder,
  attribute: Attribute.Intelligence,
  class: Class.Mage,
  portraitURL: staticDomain+'wilder/pippa.webp'
};

export const Respen: Hero = {
  id: 'RESPEN',
  name: 'Respen',
  nickname: [],
  faction: Faction.Wilder,
  attribute: Attribute.Agility,
  class: Class.Ranger,
  portraitURL: staticDomain+'wilder/respen.webp'
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
  Respen
];
export default heroes;
