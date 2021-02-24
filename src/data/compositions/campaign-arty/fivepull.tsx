import { Composition } from '../../../model/compositions';
import * as Role from '../../characteristics/role';
import * as Lightbearers from '../../heroes/lightbearers'
import * as Maulers from '../../heroes/maulers'
import * as Wilders from '../../heroes/wilders'
import * as Graveborns from '../../heroes/graveborns'
import * as Celestials from '../../heroes/celestials'
import * as Hypogeans from '../../heroes/hypogeans'
import * as Dimensional from '../../heroes/dimensionals'

const fivePull: Composition = {
    id: 'CAMPAIGN-ARTY-FIVEPULL',
    name: 'Five Pull',
    tags: ['PvE'],
    author: 'Arty and Alpattex',
    updateDate: 'Feb 2021',
    links: [{
        label: 'Guide', 
        url: 'https://preview.redd.it/r76h5rospvf61.png?width=2480&format=png&auto=webp&s=a3aa8d52b603bc16fc1c070132fa7f57020f2ff2',
    }],
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
                    hero: Lightbearers.Gwyneth
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
                    hero: Lightbearers.Rowan
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