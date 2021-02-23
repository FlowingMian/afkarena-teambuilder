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
    id: 'PVP-ARTY-BURST',
    name: 'Burst',
    tags: ['PvP'],
    author: 'Arty and Alpattex',
    updateDate: 'Jan 2021',
    link: 'https://www.reddit.com/r/afkarena/comments/kvuvsp/comprehensive_pvp_guide_by_arty_alpattex/',
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
                    hero: Wilders.Kaz
                },
                {
                    hero: Wilders.Lorsan
                },
                {
                    hero: Hypogeans.Lucretia
                },
                {
                    hero: Maulers.Safiya,
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
                    hero: Dimensional.Nakoruru
                },
                {
                    hero: Lightbearers.Estrilda
                },
                {
                    hero: Maulers.Skriath
                }
            ]

        },
        {
            role: Role.Tankiness,
            heroes : [
                {
                    hero: Celestials.Alna
                } 
            ]
        }
    ]
};

export default burst;