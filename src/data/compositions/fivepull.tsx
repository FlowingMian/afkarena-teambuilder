import { Composition } from '../../model/compositions';
import * as Role from '../characteristics/role';
import * as Ligthbearers from '../heroes/ligthbearers'
import * as Maulers from '../heroes/maulers'
import * as Wilders from '../heroes/wilders'
import * as Graveborns from '../heroes/graveborns'
import * as Celestials from '../heroes/celestials'
import * as Hypogeans from '../heroes/hypogeans'
import * as Dimensional from '../heroes/dimensionals'

const fivePull: Composition = {
    id: 'FIVEPULL',
    name: '5-Pull',
    coreHeroes: {
        role: Role.Core,
        heroes : [
            {
                hero: Wilders.Eironn
            },
            {
                hero: Maulers.Skriath,
            requiredFurniture: 3
            }
        ]
    },
    flexHeroes: [
        {
            role: Role.SubDPS,
            heroes : [
                {
                    hero: Wilders.Saurus
                },
                {
                    hero: Graveborns.Thoran
                },
                {
                    hero: Maulers.Drez
                },
                {
                    hero: Celestials.Flora
                },
                {
                    hero: Ligthbearers.Gwyneth
                },
                {
                    hero: Dimensional.JOKER
                },
                {
                    hero: Hypogeans.Lucretia
                },
                {
                    hero: Graveborns.Oden
                },
                {
                    hero: Maulers.Satrana
                },
                {
                    hero: Maulers.Safiya,
                    recommended: true
                },
                {
                    hero: Hypogeans.Zolrath
                },
                {
                    hero: Maulers.Khasos
                }
            ]
        },
        {
            role: Role.CrowdControl,
            heroes : [
                {
                    hero: Celestials.Zaphrael
                },
                {
                    hero: Wilders.Nemora
                },
                {
                    hero: Wilders.Gorvo
                },
                {
                    hero: Celestials.Orthos
                },
                {
                    hero: Wilders.Pippa
                },
                {
                    hero: Wilders.Tasi
                },
                {
                    hero: Maulers.Tidus,
                    recommended: true
                },
                {
                    hero: Dimensional.QUEEN
                }
            ]

        },
        {
            role: Role.Utility,
            heroes : [
                {
                    hero: Graveborns.Theowyn
                },
                {
                    hero: Ligthbearers.Rowan
                },
                {
                    hero: Maulers.Brutus
                },
                {
                    hero: Celestials.Zaphrael
                },
                {
                    hero: Celestials.Alna
                },
                {
                    hero: Maulers.Anoki
                },
                {
                    hero: Wilders.Lorsan
                },
                {
                    hero: Wilders.Lyca,
                    recommended: true
                },
                {
                    hero: Hypogeans.Mezoth
                }
            ]
        }
    ]
};

export default fivePull;