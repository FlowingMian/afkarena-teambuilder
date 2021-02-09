import { Composition } from "../../model/compositions";
import { Hero } from "../../model/heroes";

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

export class UsageResult {
    compositionCount: number;
    heroUsageResults: Array<HeroUsageResult>;
  
    constructor(compositionCount: number, heroUsageResults: Array<HeroUsageResult>) {
      this.compositionCount = compositionCount;
      this.heroUsageResults = heroUsageResults;
    }
}

export class Tier {
    name: string;
    heroes: Array<Hero>;

    constructor(name: string) {
      this.name = name;
      this.heroes = [];
    }
}