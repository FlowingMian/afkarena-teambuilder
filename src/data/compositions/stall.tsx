import { Composition} from '../../model/compositions';
import * as Role from '../characteristics/role';
import * as Lightbearers from '../heroes/lightbearers'
import * as Maulers from '../heroes/maulers'
import * as Wilders from '../heroes/wilders'
import * as Graveborns from '../heroes/graveborns'
import * as Celestials from '../heroes/celestials'
import * as Hypogeans from '../heroes/hypogeans'
import * as Dimensional from '../heroes/dimensionals'

const stall: Composition = {
    id: 'STALL',
    name: 'Stall',
    tags: ['Campaign'],
    author: 'Arty and Alpattex',
    link: 'https://preview.redd.it/kn01j3p3qvf61.png?width=2480&format=png&auto=webp&s=055d926d03bd84cf28c4a4581e1dd1b5d76ec358',
    coreHeroes: {
        role: Role.Core,
        heroes : [
            {
                hero: Celestials.Talene
            },
            {
                hero: Celestials.Flora
            }
        ]
    },
    flexHeroes: [
        {
            role: Role.SubDPS,
            heroes : [
                {
                    hero: Celestials.Athalia
                },
                {
                    hero: Celestials.Zaphrael
                },
                {
                    hero: Hypogeans.Zolrath
                },
                {
                    hero: Graveborns.Theowyn
                },
                {
                    hero: Wilders.Saurus
                },
                {
                    hero: Graveborns.Ferael
                },
                {
                    hero: Dimensional.Ezio,
                },
                {
                    hero: Graveborns.Daimon
                }
            ]
        },
        {
            role: Role.Tankiness,
            heroes : [
                {
                    hero: Hypogeans.Mezoth
                },
                {
                    hero: Graveborns.Thoran
                },
                {
                    hero: Celestials.Alna
                },
                {
                    hero: Dimensional.Arthur
                },
                {
                    hero: Maulers.Brutus
                },
                {
                    hero: Wilders.Gorvo
                },
                {
                    hero: Graveborns.Grezhul
                },
                {
                    hero: Lightbearers.Hendrik
                },
                {
                    hero: Maulers.Skreg
                }
            ]

        },
        {
            role: Role.Utility,
            heroes : [
                {
                    hero: Graveborns.Oden
                },
                {
                    hero: Wilders.Pippa
                },
                {
                    hero: Lightbearers.Rowan
                } ,
                {
                    hero: Graveborns.Silas
                },
                {
                    hero: Wilders.Tasi
                } 
            ]
        }
    ]
};

export default stall;