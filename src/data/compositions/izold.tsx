import { Composition} from '../../model/compositions';
import * as Role from '../../model/role';
import * as Ligthbearers from '../heroes/ligthbearers'
import * as Maulers from '../heroes/maulers'
import * as Wilders from '../heroes/wilders'
import * as Graveborns from '../heroes/graveborns'
import * as Celestials from '../heroes/celestials'
import * as Hypogeans from '../heroes/hypogeans'
import * as Dimensional from '../heroes/dimensionals'

const izold: Composition = {
    id: 'IZOLD',
    name: 'Izold',
    coreHeroes: {
        role: Role.Core,
        heroes : [
            {
                hero: Graveborns.Izold
            }
        ]
    },
    flexHeroes: [
        {
            role: Role.CrowdControl,
            heroes : [
                {
                    hero: Ligthbearers.Fawkes
                },
                {
                    hero: Graveborns.Ferael
                },
                {
                    hero: Dimensional.Nakoruru
                },
                {
                    hero: Graveborns.Nara
                },
                {
                    hero: Wilders.Nemora
                },
                {
                    hero: Wilders.Tasi
                },
                {
                    hero: Celestials.Athalia
                },
                {
                    hero: Celestials.Zaphrael
                },
                {
                    hero: Graveborns.Oden
                }
            ]
        },
        {
            role: Role.Enabler,
            heroes : [
                {
                    hero: Celestials.Alna
                },
                {
                    hero: Graveborns.Thoran
                },
                {
                    hero: Maulers.Skreg
                },
                {
                    hero: Graveborns.Silas
                },
                {
                    hero: Wilders.Pippa
                },
                {
                    hero: Hypogeans.Mezoth
                },
                {
                    hero: Ligthbearers.Hendrik
                },
                {
                    hero: Wilders.Gorvo
                },
                {
                    hero:Maulers.Brutus
                },
                {
                    hero:Graveborns.Grezhul
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

export default izold;