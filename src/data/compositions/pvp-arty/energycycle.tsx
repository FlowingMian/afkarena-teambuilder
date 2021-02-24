import { Composition} from '../../../model/compositions';
import * as Role from '../../characteristics/role';
import * as Lightbearers from '../../heroes/lightbearers'
import * as Maulers from '../../heroes/maulers'
import * as Wilders from '../../heroes/wilders'
import * as Graveborns from '../../heroes/graveborns'
import * as Celestials from '../../heroes/celestials'
import * as Hypogeans from '../../heroes/hypogeans'
import * as Dimensional from '../../heroes/dimensionals'

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
                hero: Celestials.ElijahLailah
            },
            {
                hero: Lightbearers.Rowan
            },
            {
                hero: Hypogeans.Ezizh
            }
        ]
    },
    flexHeroes: [
        {
            role: Role.CrowdControl,
            heroes : [
                {
                    hero: Wilders.Tasi
                },
                {
                    hero: Celestials.Alna
                },
                {
                    hero: Graveborns.Ferael
                },
                {
                    hero: Graveborns.Oden
                }
            ]
        },
        {
            role: Role.SubDPS,
            heroes : [
                {
                    hero: Celestials.Athalia
                },
                {
                    hero: Hypogeans.Lucretia
                },
                {
                    hero: Hypogeans.Mortas
                },
                {
                    hero: Lightbearers.Rosaline
                },
                {
                    hero: Dimensional.Ainz
                },
                {
                    hero: Dimensional.Albedo
                },
            ]
        },
        {
            role: Role.Sustain,
            heroes : [
                {
                    hero: Celestials.Talene
                },
                {
                    hero: Wilders.Saurus
                }
            ]
        }
    ]
};

export default energycycle;