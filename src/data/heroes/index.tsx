import { Hero } from "./model";
import lightbearers from "./ligthbearers";
import maulers from "./maulers";
import wilders from "./wilders";
import graveborns from "./graveborns";
import celestials from "./celestials";
import hypogeans from "./hypogeans";
import dimensionals from "./dimensionals";

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
