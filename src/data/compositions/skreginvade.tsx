import { Composition} from '../../model/compositions';
import * as Role from '../../model/role';
import * as Ligthbearers from '../heroes/ligthbearers'
import * as Maulers from '../heroes/maulers'
import * as Wilders from '../heroes/wilders'
import * as Graveborns from '../heroes/graveborns'
import * as Celestials from '../heroes/celestials'
import * as Hypogeans from '../heroes/hypogeans'
import * as Dimensional from '../heroes/dimensionals'

const skregInvade: Composition = {
    id: 'SKREGINVADE',
    name: 'Skreg Invade',
    coreHeroes: {
        role: Role.Core,
        heroes : [
            {
                hero: Maulers.Skreg
            }
        ]
    },
    flexHeroes: [
        {
            role: Role.Damage,
            heroes : [
                {
                    hero: Maulers.Antandra
                },
                {
                    hero: Hypogeans.Zolrath
                },
                {
                    hero: Maulers.Tidus
                },
                {
                    hero: Ligthbearers.Thane
                },
                {
                    hero: Wilders.Saurus
                },
                {
                    hero: Maulers.Satrana
                },
                {
                    hero: Celestials.Athalia
                },
                {
                    hero: Hypogeans.Lucretia
                },
                {
                    hero: Celestials.Flora
                },
                {
                    hero: Maulers.Drez
                }
            ]
        },
        {
            role: Role.CrowdControl,
            heroes : [
                {
                    hero: Ligthbearers.Cecilia
                },
                {
                    hero: Wilders.Gorvo
                },
                {
                    hero: Celestials.Orthos
                },
                {
                    hero: Wilders.Tasi
                },
                {
                    hero: Wilders.Seirus
                },
                {
                    hero: Celestials.Zaphrael
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
                    hero: Maulers.Anoki
                },
                {
                    hero: Maulers.Numisu
                },
                {
                    hero: Maulers.Skriath
                },
                {
                    hero: Celestials.Talene
                }
            ]

        }
    ]
};

export default skregInvade;