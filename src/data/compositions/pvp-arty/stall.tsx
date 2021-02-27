import { Composition} from '../../../model/compositions';
import * as Role from '../../characteristics/role';
import * as Lightbearers from '../../heroes/lightbearers'
import * as Maulers from '../../heroes/maulers'
import * as Wilders from '../../heroes/wilders'
import * as Graveborns from '../../heroes/graveborns'
import * as Celestials from '../../heroes/celestials'
import * as Hypogeans from '../../heroes/hypogeans'
import * as Dimensionals from '../../heroes/dimensionals'

const stall: Composition = {
    id: 'PVP-ARTY-STALL',
    name: 'Stall',
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
                ...Celestials.Talene
            },
            {
                ...Celestials.Flora
            }
        ]
    },
    flexHeroes: [
        {
            role: Role.SubDPS,
            heroes : [
                {
                    ...Wilders.Saurus
                },
                {
                    ...Dimensionals.Ezio,
                },
            ]
        },
        {
            role: Role.Tankiness,
            heroes : [
                {
                    ...Hypogeans.Mezoth,
                    recommended: true
                },
                {
                    ...Celestials.Orthos,
                    recommended: true
                },
                {
                    ...Maulers.Skreg,
                    recommended: true
                },
                {
                    ...Graveborns.Thoran
                },
                {
                    ...Celestials.Alna
                },
                {
                    ...Celestials.Wukong,
                },
                {
                    ...Dimensionals.Albedo,
                },
            ]

        },
        {
            role: Role.Utility,
            heroes : [
                {
                    ...Wilders.Tasi
                },
                {
                    ...Wilders.Nemora
                } 
            ]
        }
    ]
};

export default stall;