import { Hero } from "../heroes/model";
export enum Function {
    Tanking,
    Sustain,
    Energy
}
export interface HeroSpot {
    hero: Hero;
    functions?: Array<Function>;
    requiredSignature?: Number;
    requiredFurniture?: Number;
}

export interface Composition {
    name: string;
    coreHeroes : Array<HeroSpot>;
    flexHeroes : Array<HeroSpot>;
}