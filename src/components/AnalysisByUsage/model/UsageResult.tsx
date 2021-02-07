import { HeroUsageResult } from "./HeroUsageResult";

export class UsageResult {
    compositionCount: number;
    heroUsageResults: Array<HeroUsageResult>;
  
    constructor(compositionCount: number, heroUsageResults: Array<HeroUsageResult>) {
      this.compositionCount = compositionCount;
      this.heroUsageResults = heroUsageResults;
    }
}