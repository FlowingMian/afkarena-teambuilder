import { Role } from "../../model/characteristics";
import { Composition } from "../../model/compositions";
import { Hero } from "../../model/heroes";


const GLOBAL_PERCENT_THRESHOLD: number = 0.5;
const NICHE_PERCENT_THRESHOLD: number = 0.25;

export class HeroUsageDashboardResult {
    hero: Hero;
    coreCompositions: Array<Composition>;
    flexCompositions: Map<Composition, Role>;
  
    constructor(hero: Hero) {
      this.hero = hero;
      this.coreCompositions = [];
      this.flexCompositions = new Map<Composition, Role>();
    }

    isGlobalUsage(compositionCount:number):boolean {
      return (this.coreCompositions.length + this.flexCompositions.size) / compositionCount > GLOBAL_PERCENT_THRESHOLD;
    }

    isNicheUsage(compositionCount:number):boolean {
      return (this.coreCompositions.length + this.flexCompositions.size) / compositionCount < NICHE_PERCENT_THRESHOLD;
    }

    isCore():boolean {
      return this.coreCompositions.length > 0;
    }

    isGlobalFlex(compositionCount:number):boolean {
      return this.flexCompositions.size / compositionCount > GLOBAL_PERCENT_THRESHOLD;
    }

    isNicheFlex(compositionCount:number):boolean {
      return this.flexCompositions.size / compositionCount < NICHE_PERCENT_THRESHOLD;
    }
}

export class UsageDashboardResult {
    compositionCount: number;
    heroUsageResults: Array<HeroUsageDashboardResult>;
  
    constructor(compositionCount: number, heroUsageResults: Array<HeroUsageDashboardResult>) {
      this.compositionCount = compositionCount;
      this.heroUsageResults = heroUsageResults;
    }
}

export class Tier {
    name: string;
    heroes: Array<Hero>;
    variant: string;

    constructor(name: string, variant: string) {
      this.name = name;
      this.heroes = [];
      this.variant = variant;
    }
}