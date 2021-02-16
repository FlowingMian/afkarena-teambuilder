import { Composition} from '../../model/compositions';
import * as Role from '../characteristics/role';
import * as Lightbearers from '../heroes/lightbearers'
import * as Maulers from '../heroes/maulers'
import * as Wilders from '../heroes/wilders'
import * as Graveborns from '../heroes/graveborns'
import * as Celestials from '../heroes/celestials'
import * as Hypogeans from '../heroes/hypogeans'
import * as Dimensional from '../heroes/dimensionals'

const skregInvade: Composition = {
    id: 'SKREGINVADE',
    name: 'Skreg Invade',
    tags: ['Campaign'],
    author: 'Arty and Alpattex',
    link: 'https://preview.redd.it/a40xisl8pvf61.png?width=2480&format=png&auto=webp&s=b52c1a6975363974b363ddceaf260552a02daad3',
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
                    hero: Lightbearers.Thane
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
                    hero: Lightbearers.Cecilia
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