import { Composition} from '../../../model/compositions';
import * as Role from '../../characteristics/role';
import * as Lightbearers from '../../heroes/lightbearers'
import * as Maulers from '../../heroes/maulers'
import * as Wilders from '../../heroes/wilders'
import * as Graveborns from '../../heroes/graveborns'
import * as Celestials from '../../heroes/celestials'
import * as Hypogeans from '../../heroes/hypogeans'
import * as Dimensional from '../../heroes/dimensionals'

const gwyneth: Composition = {
    id: 'PVP-ARTY-GWYNETH',
    name: 'Gwyneth',
    tags: ['PvP'],
    author: 'Arty and Alpattex',
    updateDate: 'Jan 2021',
    link: 'https://www.reddit.com/r/afkarena/comments/kvuvsp/comprehensive_pvp_guide_by_arty_alpattex/',
    coreHeroes: {
        role: Role.Core,
        heroes : [
            {
                hero: Lightbearers.Gwyneth
            },
            {
                hero: Lightbearers.Rosaline
            },
            {
                hero: Dimensional.Arthur
            }
        ]
    },
    flexHeroes: [
        {
            role: Role.Buffer,
            heroes : [
                {
                    hero: Wilders.Lorsan
                },
                {
                    hero: Hypogeans.Mortas
                },
                {
                    hero: Wilders.Lyca
                },
            ]
        },
        {
            role: Role.Protection,
            heroes : [
                {
                    hero: Lightbearers.Hendrik
                },
            ]
        },
        {
            role: Role.SubDPS,
            heroes : [
                {
                    hero: Graveborns.Ferael
                },
                {
                    hero: Dimensional.JOKER
                }
            ]

        },
        {
            role: Role.CrowdControl,
            heroes : [
                {
                    hero: Lightbearers.Estrilda
                },
                {
                    hero: Lightbearers.Fawkes
                },
                {
                    hero: Maulers.Tidus
                },
            ]
        }
    ]
};

export default gwyneth;