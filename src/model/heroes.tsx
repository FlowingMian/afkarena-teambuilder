import { Attribute, Class, Faction, Rating, Signature} from './characteristics/characteristics';
import { VERY_WEAK } from './characteristics/ratings';
import { _10 } from './characteristics/signatures';

export interface Hero {
  id: string;
  name: string;
  nickname: Array<string>
  faction: Faction;
  attribute: Attribute;
  class: Class;
  portraitURL?: string;
  signature: Signature;
  furniture: {
    F3 : Rating,
    F9 : Rating,
  };
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
    class: fakeCharacterictic,
    signature: _10,
    furniture : {
      F3: VERY_WEAK,
      F9: VERY_WEAK,
    }
  };
}

export function isOpenSpot(hero:Hero):boolean {
  return hero.name === 'Open spot';
}