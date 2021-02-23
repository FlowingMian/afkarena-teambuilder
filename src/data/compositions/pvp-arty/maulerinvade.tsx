import { Composition} from '../../../model/compositions';
import * as Role from '../../characteristics/role';
import * as Lightbearers from '../../heroes/lightbearers'
import * as Maulers from '../../heroes/maulers'
import * as Wilders from '../../heroes/wilders'
import * as Graveborns from '../../heroes/graveborns'
import * as Celestials from '../../heroes/celestials'
import * as Hypogeans from '../../heroes/hypogeans'
import * as Dimensional from '../../heroes/dimensionals'

const skregInvade: Composition = {
    id: 'PVP-ARTY-INVADE',
    name: 'Mauler Invade',
    tags: ['PvP'],
    author: 'Arty and Alpattex',
    updateDate: 'Jan 2021',
    link: 'https://www.reddit.com/r/afkarena/comments/kvuvsp/comprehensive_pvp_guide_by_arty_alpattex/',
    coreHeroes: {
        role: Role.Core,
        heroes : [
            {
                hero: Maulers.Skreg
            },
            {
                hero: Maulers.Tidus
            },
            {
                hero: Maulers.Numisu
            }
        ]
    },
    flexHeroes: [
        {
            role: Role.Damage,
            heroes : [
                {
                    hero: Celestials.Athalia
                },
                {
                    hero: Graveborns.Kelthur
                },
                {
                    hero: Maulers.Antandra
                },
                {
                    hero: Maulers.Satrana
                },
                {
                    hero: Maulers.Drez
                },
                {
                    hero: Maulers.Brutus
                },
                {
                    hero: Maulers.Vurk
                },
                {
                    hero: Maulers.Kren
                },
            ]
        },
        {
            role: Role.CrowdControl,
            heroes : [
                {
                    hero: Lightbearers.Cecilia
                },
            ]
        },
        {
            role: Role.Enabler,
            heroes : [
                {
                    hero: Maulers.Anoki
                },
                {
                    hero: Maulers.Skriath
                },
                {
                    hero: Maulers.Safiya
                },
            ]

        }
    ]
};

export default skregInvade;