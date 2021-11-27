import { Artifact, Attribute, Class, Faction, Furniture, Rating, Signature} from './characteristics/characteristics';
import * as Signatures from './characteristics/signatures';
import * as Furnitures from './characteristics/furnitures';
import * as Engravings from './characteristics/engravings';

export interface Hero {
  id: string;
  name: string;
  nickname: Array<string>
  faction: Faction;
  attribute: Attribute;
  class: Class;
  portraitURL?: string; //portraitURL?:(size?:string) => JSX.Element;
  signature: Signature;
  furniture: Furniture;
  engraving: Engraving;
  artifacts: Array<Artifact>;
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
    signature: Signatures.Unknown,
    furniture : Furnitures.Unknown,
    artifacts: [],
  };
}

export function isOpenSpot(hero:Hero):boolean {
  return hero.name === 'Open spot';
}