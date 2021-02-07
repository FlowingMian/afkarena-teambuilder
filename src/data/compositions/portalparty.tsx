import { Composition} from '../../model/compositions';
import * as Role from '../../model/role';
import * as Ligthbearers from '../heroes/ligthbearers'
import * as Maulers from '../heroes/maulers'
import * as Wilders from '../heroes/wilders'
import * as Graveborns from '../heroes/graveborns'
import * as Celestials from '../heroes/celestials'
import * as Hypogeans from '../heroes/hypogeans'
import * as Dimensional from '../heroes/dimensionals'

const portalParty: Composition = {
    id: 'PORTALPARTY',
    name: 'Portal Party',
    coreHeroes: {
        role: Role.Core,
        heroes : [
            {
                hero: Wilders.Pippa,
                requiredSignature: 20,
                requiredFurniture: 3
            },
            {
                hero: Graveborns.Oden,
                requiredSignature: 20,
                requiredFurniture: 3
            }
        ]
    },
    flexHeroes: [
        {
            role: Role.SubDPS,
            heroes : [
                {
                    hero: Graveborns.Ferael
                },
                {
                    hero: Graveborns.Izold
                },
                {
                    hero: Dimensional.JOKER
                },
                {
                    hero: Hypogeans.Lucretia
                },
                {
                    hero: Maulers.Satrana
                },
                {
                    hero: Wilders.Saurus
                },
                {
                    hero: Graveborns.Torne
                },
                {
                    hero: Celestials.Wukong,
                },
                {
                    hero: Hypogeans.Zolrath
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
                    hero: Celestials.Zaphrael
                },
                {
                    hero: Hypogeans.Ezizh
                },
                {
                    hero: Wilders.Gorvo
                },
                {
                    hero: Dimensional.Nakoruru
                },
                {
                    hero: Wilders.Nemora
                },
                {
                    hero: Celestials.Orthos
                },
                {
                    hero: Wilders.Tasi
                }
            ]

        },
        {
            role: Role.Utility,
            heroes : [
                {
                    hero: Celestials.Talene
                },
                {
                    hero: Ligthbearers.Rowan
                } ,
                {
                    hero: Graveborns.Thoran
                },
                {
                    hero: Celestials.Alna
                },
                {
                    hero: Maulers.Anoki
                },
                {
                    hero: Celestials.Athalia
                } ,
                {
                    hero: Ligthbearers.Cecilia
                },
                {
                    hero: Maulers.Skreg
                },
                {
                    hero: Graveborns.Theowyn
                }
            ]
        }
    ]
};

export default portalParty;