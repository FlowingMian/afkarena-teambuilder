import { Composition} from '../../../model/compositions';
import * as Role from '../../characteristics/role';
import * as Lightbearers from '../../heroes/lightbearers'
import * as Maulers from '../../heroes/maulers'
import * as Wilders from '../../heroes/wilders'
import * as Graveborns from '../../heroes/graveborns'
import * as Celestials from '../../heroes/celestials'
import * as Hypogeans from '../../heroes/hypogeans'
import * as Dimensionals from '../../heroes/dimensionals'

const burst: Composition = {
    id: 'PVP-ARTY-BURST',
    name: 'Burst',
    tags: ['PvP'],
    author: 'Arty and Alpattex',
    updateDate: 'Jan 2021',
    links: [{
        label: 'Guide', 
        url: 'https://www.reddit.com/r/afkarena/comments/kvuvsp/comprehensive_pvp_guide_by_arty_alpattex/',
    }],
    coreHeroes: {
        role: Role.Core,
        heroes : [
            {
                ...Wilders.Eironn,
                recommended: true
            },
            {
                ...Wilders.Lyca,
                recommended: true
            }
        ]
    },
    flexHeroes: [
        {
            role: Role.SubDPS,
            heroes : [
                {
                    ...Wilders.Lorsan,
                    recommended: true
                },
                {
                    ...Hypogeans.Zolrath,
                    recommended: true
                },
                {
                    ...Lightbearers.Gwyneth
                },
                {
                    ...Wilders.Kaz
                },
                {
                    ...Hypogeans.Lucretia
                },
                {
                    ...Maulers.Safiya,
                },
                {
                    ...Wilders.Saurus
                },
            ]
        },
        {
            role: Role.CrowdControl,
            heroes : [
                {
                    ...Celestials.Zaphrael,
                    recommended: true
                },
                {
                    ...Celestials.Athalia
                },
                {
                    ...Maulers.Tidus
                },
                {
                    ...Dimensionals.Nakoruru
                },
                {
                    ...Lightbearers.Estrilda
                },
                {
                    ...Maulers.Skriath
                }
            ]

        },
        {
            role: Role.Tankiness,
            heroes : [
                {
                    ...Celestials.Alna
                } 
            ]
        }
    ]
};

export default burst;