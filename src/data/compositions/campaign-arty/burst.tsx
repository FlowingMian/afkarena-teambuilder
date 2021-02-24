import { Composition} from '../../../model/compositions';
import * as Role from '../../characteristics/role';
import * as Lightbearers from '../../heroes/lightbearers'
import * as Maulers from '../../heroes/maulers'
import * as Wilders from '../../heroes/wilders'
import * as Graveborns from '../../heroes/graveborns'
import * as Celestials from '../../heroes/celestials'
import * as Hypogeans from '../../heroes/hypogeans'
import * as Dimensional from '../../heroes/dimensionals'

const burst: Composition = {
    id: 'CAMPAIGN-ARTY-BURST',
    name: 'Burst',
    tags: ['PvE'],
    author: 'Arty and Alpattex',
    updateDate: 'Feb 2021',
    links: [{
        label: 'Guide', 
        url: 'https://preview.redd.it/gpfow7lppvf61.png?width=2480&format=png&auto=webp&s=aa185e96d955659a03094d2c081e891aa5a12a51',
    }],
    coreHeroes: {
        role: Role.Core,
        heroes : [
            {
                hero: Wilders.Eironn
            },
            {
                hero: Wilders.Lyca
            }
        ]
    },
    flexHeroes: [
        {
            role: Role.SubDPS,
            heroes : [
                {
                    hero: Lightbearers.Gwyneth
                },
                {
                    hero: Dimensional.JOKER
                },
                {
                    hero: Wilders.Kaz
                },
                {
                    hero: Wilders.Lorsan
                },
                {
                    hero: Hypogeans.Lucretia
                },
                {
                    hero: Lightbearers.Raine
                },
                {
                    hero: Maulers.Safiya,
                },
                {
                    hero: Maulers.Satrana
                },
                {
                    hero: Wilders.Saurus
                },
                {
                    hero: Hypogeans.Zolrath
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
                    hero: Celestials.Athalia
                },
                {
                    hero: Maulers.Tidus
                },
                {
                    hero: Wilders.Tasi
                },
                {
                    hero: Celestials.Orthos
                },
                {
                    hero: Dimensional.Nakoruru
                },
                {
                    hero: Lightbearers.Estrilda
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
                    hero: Maulers.Brutus
                },
                {
                    hero: Celestials.Alna
                } 
            ]
        }
    ]
};

export default burst;