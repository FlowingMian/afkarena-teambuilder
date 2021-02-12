import { Attribute, Class, Faction } from "./characteristics";
import { Hero } from "./heroes";
import { Attributes } from "../data/characteristics/attributes";
import { Classes } from "../data/characteristics/classes";
import { Factions } from "../data/characteristics/factions";

export class CharactericticsDistribution {
    factions: Map<Faction, number>;
    classes: Map<Class, number>;
    attributes: Map<Attribute, number>;

    constructor() {
        this.factions = new Map(Factions.map((f): [Faction, number] => [f, 0]));
        this.classes = new Map(Classes.map((c): [Class, number] => [c, 0]));
        this.attributes = new Map(Attributes.map((a): [Attribute, number] => [a, 0]));
      }
}

export function getCharactericticsDistribution(heroes:Array<Hero>):CharactericticsDistribution {
    const characteristicsDistribution = new CharactericticsDistribution();
    heroes.forEach(h => {
        characteristicsDistribution.factions.set(h.faction, characteristicsDistribution.factions.get(h.faction) as number + 1);
        characteristicsDistribution.classes.set(h.class, characteristicsDistribution.classes.get(h.class) as number + 1);
        characteristicsDistribution.attributes.set(h.attribute, characteristicsDistribution.attributes.get(h.attribute) as number + 1);
    });
    return characteristicsDistribution;
}