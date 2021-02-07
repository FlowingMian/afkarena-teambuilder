import { Composition } from "../../../model/compositions";
import { Hero } from "../../../model/heroes";

export class HeroUsageResult {
    hero: Hero;
    coreCompositions: Array<Composition>;
    flexCompositions: Array<Composition>;
  
    constructor(hero: Hero) {
      this.hero = hero;
      this.coreCompositions = [];
      this.flexCompositions = [];
    }
}