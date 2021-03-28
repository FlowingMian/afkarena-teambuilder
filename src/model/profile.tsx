import { HeroRequirement } from './compositions';

export interface CompositionHeroes {
  [key: string]:Array<HeroRequirement>;
}

export interface Profile {
  id: string,
  name: string,
  readAt?: string,
  heroCollection: Array<string>,
  compositions: CompositionHeroes,
  createdAt?: string,
  updatedAt?: string,
  readonly: boolean
}