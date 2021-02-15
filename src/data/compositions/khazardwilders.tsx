import { Composition} from '../../model/compositions';
import * as Role from '../characteristics/role';
import * as Ligthbearers from '../heroes/ligthbearers'
import * as Maulers from '../heroes/maulers'
import * as Wilders from '../heroes/wilders'
import * as Graveborns from '../heroes/graveborns'
import * as Celestials from '../heroes/celestials'
import * as Hypogeans from '../heroes/hypogeans'
import * as Dimensional from '../heroes/dimensionals'

const khazardWilders: Composition = {
    id: 'KHAZARDWILDERS',
    name: 'Khazard Wilders',
    tags: ['Campaign'],
    author: 'Arty and Alpattex',
    link: 'https://preview.redd.it/brbwlsd0qvf61.png?width=2480&format=png&auto=webp&s=1839ebc0fb9ba15aa071a70976d5c206146f7308',
    coreHeroes: {
        role: Role.Core,
        heroes : [
            {
                hero: Hypogeans.Khazard
            },
            {
                hero: Wilders.Tasi
            },
            {
                hero: Hypogeans.Mehira
            }
        ]
    },
    flexHeroes: [
        {
            role: Role.SubDPS,
            heroes : [
                {
                    hero: Celestials.Wukong
                },
                {
                    hero: Wilders.Solise
                },
                {
                    hero: Hypogeans.Zolrath
                },
                {
                    hero: Wilders.Eironn
                },
                {
                    hero: Graveborns.Ferael
                },
                {
                    hero: Celestials.Flora
                },
                {
                    hero: Dimensional.JOKER,
                },
                {
                    hero: Wilders.Kaz
                },
                {
                    hero: Wilders.Lyca
                },
                {
                    hero: Graveborns.Oden
                },
                {
                    hero: Wilders.Saurus
                }
            ]
        },
        {
            role: Role.CrowdControl,
            heroes : [
                {
                    hero: Wilders.Pippa
                },
                {
                    hero: Celestials.Athalia
                },
                {
                    hero: Wilders.Gorvo
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
                    hero: Celestials.Orthos
                }
            ]

        },
        {
            role: Role.Utility,
            heroes : [
                {
                    hero: Celestials.ElijahLailah
                },
                {
                    hero: Celestials.Alna
                },
                {
                    hero: Hypogeans.Ezizh
                },
                {
                    hero: Hypogeans.Mezoth
                },
                {
                    hero: Ligthbearers.Rowan
                },
                {
                    hero: Graveborns.Silas
                },
                {
                    hero: Celestials.Talene
                }
            ]
        }
    ]
};

export default khazardWilders;