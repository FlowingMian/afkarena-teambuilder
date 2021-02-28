import { Composition} from '../../../model/compositions';
import * as Role from '../../characteristics/role';
import * as Lightbearers from '../../heroes/lightbearers'
import * as Maulers from '../../heroes/maulers'
import * as Wilders from '../../heroes/wilders'
import * as Graveborns from '../../heroes/graveborns'
import * as Celestials from '../../heroes/celestials'
import * as Hypogeans from '../../heroes/hypogeans'
import * as Dimensionals from '../../heroes/dimensionals'

const gwyneth: Composition = {
    id: 'PVP-ARTY-GWYNETH',
    name: 'Gwyneth',
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
                ...Lightbearers.Gwyneth,
                recommended: true
            },
            {
                ...Lightbearers.Rosaline,
                recommended: true
            },
            {
                ...Dimensionals.Arthur,
                recommended: true
            }
        ]
    },
    flexHeroes: [
        {
            role: Role.Buffer,
            heroes : [
                {
                    ...Wilders.Lorsan
                },
                {
                    ...Hypogeans.Mortas
                },
                {
                    ...Wilders.Lyca
                },
            ]
        },
        {
            role: Role.Protection,
            heroes : [
                {
                    ...Lightbearers.Hendrik
                },
            ]
        },
        {
            role: Role.SubDPS,
            heroes : [
                {
                    ...Graveborns.Ferael,
                    recommended: true
                },
                {
                    ...Dimensionals.JOKER
                }
            ]

        },
        {
            role: Role.CrowdControl,
            heroes : [
                {
                    ...Lightbearers.Estrilda,
                    recommended: true
                },
                {
                    ...Lightbearers.Fawkes
                },
                {
                    ...Maulers.Tidus
                },
            ]
        }
    ]
};

export default gwyneth;