import { Composition} from '../../../model/compositions';
import * as Role from '../../characteristics/role';
import * as Lightbearers from '../../heroes/lightbearers'
import * as Maulers from '../../heroes/maulers'
import * as Wilders from '../../heroes/wilders'
import * as Graveborns from '../../heroes/graveborns'
import * as Celestials from '../../heroes/celestials'
import * as Hypogeans from '../../heroes/hypogeans'
import * as Dimensional from '../../heroes/dimensionals'

const izold: Composition = {
    id: 'PVP-ARTY-IZOLD',
    name: 'Izold',
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
                hero: Graveborns.Izold
            }
        ]
    },
    flexHeroes: [
        {
            role: Role.CrowdControl,
            heroes : [
                {
                    hero: Graveborns.Ferael
                },
                {
                    hero: Graveborns.Nara
                },
                {
                    hero: Wilders.Nemora
                },
                {
                    hero: Celestials.Athalia
                },
                {
                    hero: Graveborns.Oden
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
                    hero: Graveborns.Silas
                },
                {
                    hero: Wilders.Pippa
                },
                {
                    hero: Lightbearers.Hendrik
                },
                {
                    hero:Graveborns.Grezhul
                },
                {
                    hero:Wilders.Lorsan
                },
                {
                    hero:Celestials.Talene
                }
            ]

        },
    ]
};

export default izold;