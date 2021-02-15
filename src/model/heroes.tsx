import { Attribute, Class, Faction } from "./characteristics";

export interface Hero {
  id: string;
  name: string;
  nickname: Array<string>
  faction: Faction;
  attribute: Attribute;
  class: Class;
  portraitURL?: string
}
