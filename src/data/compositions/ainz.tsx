import { Composition} from '../../model/compositions';
import * as Role from '../characteristics/role';
import * as Ligthbearers from '../heroes/ligthbearers'
import * as Maulers from '../heroes/maulers'
import * as Wilders from '../heroes/wilders'
import * as Graveborns from '../heroes/graveborns'
import * as Celestials from '../heroes/celestials'
import * as Hypogeans from '../heroes/hypogeans'
import * as Dimensional from '../heroes/dimensionals'

const ainz: Composition = {
    id: 'AINZ',
    name: 'Ainz',
    coreHeroes: {
        role: Role.Core,
        heroes : [
            {
                hero: Dimensional.Ainz
            }
        ]
    },
    flexHeroes: [
        {
            role: Role.Utility,
            heroes : [
                {
                    hero: Ligthbearers.Hendrik
                },
                {
                    hero: Maulers.Brutus
                },
                {
                    hero: Celestials.Athalia
                },
                {
                    hero: Celestials.Alna
                },
                {
                    hero: Celestials.Zaphrael
                },
                {
                    hero: Dimensional.Ukyo
                },
                {
                    hero: Graveborns.Thoran
                },
                {
                    hero: Wilders.Tasi
                },
                {
                    hero: Graveborns.Nara
                },
                {
                    hero: Hypogeans.Mezoth
                },
                {
                    hero: Graveborns.Ferael
                }
            ]
        },
        {
            role: Role.Enabler,
            heroes : [
                {
                    hero: Dimensional.Ezio
                },
                {
                    hero: Dimensional.JOKER
                },
                {
                    hero: Dimensional.Nakoruru
                },
                {
                    hero: Maulers.Numisu
                },
                {
                    hero: Dimensional.QUEEN
                },
                {
                    hero: Graveborns.Silas
                },
                {
                    hero: Celestials.Talene
                },
                {
                    hero: Dimensional.Arthur
                },
                {
                    hero: Dimensional.Albedo
                }
            ]

        },
        {
            role: Role.Energy,
            heroes : [
                {
                    hero: Hypogeans.Mortas
                },
                {
                    hero: Ligthbearers.Rowan
                },
                {
                    hero: Hypogeans.Ezizh
                },
                {
                    hero: Wilders.Lyca
                },
                {
                    hero: Ligthbearers.Raine
                }
            ]
        }
    ]
};

export default ainz;