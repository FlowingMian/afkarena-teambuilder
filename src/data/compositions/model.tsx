import { Hero } from "../heroes/model";
export enum Function {}

export enum Artifact {}

export interface HeroSpot {
  hero: Hero;
  functions?: Array<Function>;
  requiredSignature?: Number;
  requiredFurniture?: Number;
  requiredArtifact?: Artifact;
}

export interface Composition {
  name: string;
  coreHeroes: Array<HeroSpot>;
  flexHeroes: Array<HeroSpot>;
}
