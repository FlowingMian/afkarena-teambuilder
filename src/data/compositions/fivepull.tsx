import { Composition } from './model';
import * as Ligthbearers from '../heroes/ligthbearers'
import * as Wilders from '../heroes/wilders'
import * as Maulers from '../heroes/maulers'
import * as Celestials from '../heroes/celestials'
import * as Hypogeans from '../heroes/hypogeans'

const fivePull: Composition = {
    name: '5-Pull',
    coreHeroes: [
        {
            hero: Wilders.Eironn
        },
        {
            hero: Maulers.Safiya
        },
        {
            hero: Maulers.Skriath,
            requiredFurniture: 3
        }
    ],
    flexHeroes: [
        {
            hero: Wilders.Gorvo
        },
        {
            hero: Celestials.Flora
        },
        {
            hero: Maulers.Khasos
        },
        {
            hero: Celestials.Orthos
        },
        {
            hero: Maulers.Satrana
        },
        {
            hero: Maulers.Tidus
        },
        {
            hero: Maulers.Anoki
        },
        {
            hero: Maulers.Numisu
        },
        {
            hero: Wilders.Lyca
        },
        {
            hero: Celestials.Talene
        },
        {
            hero: Hypogeans.Ezizh
        },
        {
            hero: Ligthbearers.Rowan
        }
    ]
};

export default fivePull;