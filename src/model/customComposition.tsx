import { Composition} from './compositions';
import * as Role from '../data/characteristics/role';
import Lightbearers from '../data/heroes/lightbearers';
import Maulers from '../data/heroes/maulers';
import Wilders from '../data/heroes/wilders';
import Graveborns from '../data/heroes/graveborns';
import Celestials from '../data/heroes/celestials';
import Hypogeans from '../data/heroes/hypogeans';
import Dimensionals from '../data/heroes/dimensionals';
import * as Factions from '../data/characteristics/factions';

let customCompositionId = 0;

export function isCustomComposition(composition:Composition):boolean {
  return composition.name === 'Custom composition';
}

export default function generateCustomComposition():Composition {
  return {
    id: 'CUSTOM-COMPOSITION-'+(customCompositionId++),
    name: 'Custom composition',
    tags: [],
    author: '',
    updateDate: '',
    links: [],
    coreHeroes: {
      role: Role.Core,
      heroes : []
    },
    flexHeroes: [
      {
        role: Factions.Lightbearer,
        heroes : Lightbearers.map(h => ({...h}))
      },
      {
        role: Factions.Mauler,
        heroes : Maulers.map(h => ({...h}))
      },
      {
        role: Factions.Wilder,
        heroes : Wilders.map(h => ({...h}))
      },
      {
        role: Factions.Graveborn,
        heroes : Graveborns.map(h => ({...h}))
      },
      {
        role: Factions.Celestial,
        heroes : Celestials.map(h => ({...h}))
      },
      {
        role: Factions.Hypogean,
        heroes : Hypogeans.map(h => ({...h}))
      },
      {
        role: Factions.Dimensional,
        heroes : Dimensionals.map(h => ({...h}))
      },
    ]
  };
}