import { Role } from './characteristics/characteristics';
import { Link } from './common';
import { Hero } from './heroes';

export enum Artifact {}

export interface HeroRequirement extends Hero{
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
  links: Array<Link>;
  coreHeroes: CompositionRole;
  flexHeroes: Array<CompositionRole>;
}
