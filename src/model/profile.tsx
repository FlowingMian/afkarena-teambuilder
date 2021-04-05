import { Hero } from './heroes';

export interface CompositionHeroes {
  [key: string]:Array<Hero>;
}

export interface Profile {
  id?: string,
  name?: string,
  readAt?: string,
  heroCollection: Array<string>,
  compositions: CompositionHeroes,
  createdAt?: string,
  updatedAt?: string,
  readonly?: boolean,
  version: number,
}