import { Attribute, Class, Faction } from './characteristics';

export interface Hero {
  id: string;
  name: string;
  nickname: Array<string>
  faction: Faction;
  attribute: Attribute;
  class: Class;
  portraitURL?: string
}

const fakeCharacterictic = {
  id: '',
  name: '',
};

let openSpotId = 0;
export function generateOpenSpot():Hero {
  return {
    id: 'OPEN-SPOT-'+(openSpotId++),
    name: 'Open spot',
    nickname: [],
    faction: fakeCharacterictic,
    attribute:fakeCharacterictic,
    class: fakeCharacterictic
  };
}

export function isOpenSpot(hero:Hero):boolean {
  return hero.name === 'Open spot';
}