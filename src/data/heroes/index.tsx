import { Hero } from "../../model/heroes";
import lightbearers from "./lightbearers";
import maulers from "./maulers";
import wilders from "./wilders";
import graveborns from "./graveborns";
import celestials from "./celestials";
import hypogeans from "./hypogeans";
import dimensionals from "./dimensionals";
import { staticDomain } from "../static";

const fakeCharacterictic = {
  id: '',
  name: '',
};

let openSlotId = 0;
export function generateOpenSlot():Hero {
  return {
    id: "OPEN_SLOT_"+(openSlotId++),
    name: "Open slot",
    nickname: [],
    faction: fakeCharacterictic,
    attribute:fakeCharacterictic,
    class: fakeCharacterictic,
    portraitURL: staticDomain+'logo192.png'
  }
};

export function isOpenSlot(hero:Hero) {
  return hero.name === "Open slot";
}


const heroes: Array<Hero> = [
  ...lightbearers,
  ...maulers,
  ...wilders,
  ...graveborns,
  ...celestials,
  ...hypogeans,
  ...dimensionals
];
export default heroes;
