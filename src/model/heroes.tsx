import { Attribute, Class, Faction } from "./characteristics";

export interface Hero {
  id: string;
  name: string;
  faction: Faction;
  attribute: Attribute;
  class: Class;
  portraitURL?: string
}
