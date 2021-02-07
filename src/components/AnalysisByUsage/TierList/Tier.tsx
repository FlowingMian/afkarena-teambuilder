import { Composition } from "../../../model/compositions";
import { Hero } from "../../../model/heroes";

export class Tier {
    name: string;
    heroes: Array<Hero>;

    constructor(name: string) {
      this.name = name;
      this.heroes = [];
    }
}