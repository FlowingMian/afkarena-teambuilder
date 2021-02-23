import { Composition} from '../../../model/compositions';
import * as Role from '../../characteristics/role';
import * as Lightbearers from '../../heroes/lightbearers'
import * as Maulers from '../../heroes/maulers'
import * as Wilders from '../../heroes/wilders'
import * as Graveborns from '../../heroes/graveborns'
import * as Celestials from '../../heroes/celestials'
import * as Hypogeans from '../../heroes/hypogeans'
import * as Dimensional from '../../heroes/dimensionals'

const backlineDisrupt: Composition = {
    id: 'PVP-ARTY-DISRUPT',
    name: 'Backline Disrupt',
    tags: ['PvP'],
    author: 'Arty and Alpattex',
    updateDate: 'Jan 2021',
    link: 'https://www.reddit.com/r/afkarena/comments/kvuvsp/comprehensive_pvp_guide_by_arty_alpattex/',
    coreHeroes: {
        role: Role.Core,
        heroes : [
            {
                hero: Graveborns.Nara
            },
            {
                hero: Celestials.Athalia
            }
        ]
    },
    flexHeroes: [
        {
            role: Role.CrowdControl,
            heroes : [
                {
                    hero: Hypogeans.Mezoth
                },
                {
                    hero: Graveborns.Oden
                },
                {
                    hero: Celestials.Orthos
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
                    hero: Graveborns.Thoran
                },
                {
                    hero: Celestials.Wukong
                },
                {
                    hero: Graveborns.Daimon
                }
            ]
        },
        {
            role: Role.Enabler,
            heroes : [
                {
                    hero: Celestials.Talene
                },
            ]
        }
    ]
};

export default backlineDisrupt;