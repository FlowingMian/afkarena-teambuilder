import { Role } from './characteristics/characteristics';
import { Link } from './common';
import { Hero } from './heroes';

export interface CompositionRole {
  role: Role;
  heroes: Array<Hero>;
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
