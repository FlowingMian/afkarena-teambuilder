import { Artifact, Attribute, Class, Faction, Rating, Signature} from './characteristics/characteristics';
import { VeryWeak } from './characteristics/ratings';
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
  artifacts?: Array<Artifact>;
  recommended?: boolean;
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
      F3: VeryWeak,
      F9: VeryWeak,
    },
    artifacts: [],
  };
}

export function isOpenSpot(hero:Hero):boolean {
  return hero.name === 'Open spot';
}