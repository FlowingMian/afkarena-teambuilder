import { Composition} from '../../model/compositions';
import * as Role from '../characteristics/role';
import * as Lightbearers from '../heroes/lightbearers'
import * as Maulers from '../heroes/maulers'
import * as Wilders from '../heroes/wilders'
import * as Graveborns from '../heroes/graveborns'
import * as Celestials from '../heroes/celestials'
import * as Hypogeans from '../heroes/hypogeans'
import * as Dimensional from '../heroes/dimensionals'

const portalParty: Composition = {
    id: 'PORTALPARTY',
    name: 'Portal Party',
    tags: ['Campaign'],
    author: 'Arty and Alpattex',
    link: 'https://preview.redd.it/ztq7tqk8qvf61.png?width=2480&format=png&auto=webp&s=98197ae512438746fd0c035cbd7d3929af0545e5',
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
                    hero: Lightbearers.Rowan
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
                    hero: Lightbearers.Cecilia
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