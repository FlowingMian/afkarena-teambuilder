import { Composition} from '../../../model/compositions';
import * as Role from '../../characteristics/role';
import * as Lightbearers from '../../heroes/lightbearers'
import * as Maulers from '../../heroes/maulers'
import * as Wilders from '../../heroes/wilders'
import * as Graveborns from '../../heroes/graveborns'
import * as Celestials from '../../heroes/celestials'
import * as Hypogeans from '../../heroes/hypogeans'
import * as Dimensionals from '../../heroes/dimensionals'

const energycycle: Composition = {
    id: 'PVP-ARTY-ENERGYCYCLE',
    name: 'Energy Cycle',
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
                ...Celestials.ElijahLailah,
                recommended: true
            },
            {
                ...Lightbearers.Rowan,
                recommended: true
            },
            {
                ...Hypogeans.Ezizh,
                recommended: true
            }
        ]
    },
    flexHeroes: [
        {
            role: Role.CrowdControl,
            heroes : [
                {
                    ...Wilders.Tasi,
                    recommended: true
                },
                {
                    ...Celestials.Alna
                },
                {
                    ...Graveborns.Ferael
                },
                {
                    ...Graveborns.Oden
                }
            ]
        },
        {
            role: Role.SubDPS,
            heroes : [
                {
                    ...Celestials.Athalia
                },
                {
                    ...Hypogeans.Lucretia
                },
                {
                    ...Hypogeans.Mortas
                },
                {
                    ...Lightbearers.Rosaline
                },
                {
                    ...Dimensionals.Ainz
                },
                {
                    ...Dimensionals.Albedo
                },
            ]
        },
        {
            role: Role.Sustain,
            heroes : [
                {
                    ...Celestials.Talene,
                    recommended: true
                },
                {
                    ...Wilders.Saurus
                }
            ]
        }
    ]
};

export default energycycle;