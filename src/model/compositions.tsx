import { Role } from './characteristics';
import { Hero } from './heroes';

export enum Artifact {}

export interface HeroRequirement {
  hero: Hero;
  recommended?: boolean
  requiredSignature?: 1 | 10 | 20 | 30 ;
  requiredFurniture?: 3 | 9;
  requiredArtifact?: Artifact;
}

export interface CompositionRole {
  role: Role;
  heroes: Array<HeroRequirement>;
}

export interface Composition {
  id: string;
  name: string;
  tags: Array<string>;
  author: string,
  updateDate?: string;
  link: string;
  coreHeroes: CompositionRole;
  flexHeroes: Array<CompositionRole>;
}
