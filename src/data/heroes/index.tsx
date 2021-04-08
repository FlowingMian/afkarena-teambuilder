import { Hero } from '../../model/heroes';
import lightbearers from './lightbearers';
import maulers from './maulers';
import wilders from './wilders';
import graveborns from './graveborns';
import celestials from './celestials';
import hypogeans from './hypogeans';
import dimensionals from './dimensionals';

const heroes: Array<Hero> = [
  ...lightbearers,
  ...maulers,
  ...wilders,
  ...graveborns,
  ...celestials,
  ...hypogeans,
  ...dimensionals
]
  .sort((a, b) => a.name.localeCompare(b.name))
;
export default heroes;
