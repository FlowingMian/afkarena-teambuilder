import { Composition} from '../../../model/compositions';
import * as Role from '../../characteristics/role';
import * as Lightbearers from '../../heroes/lightbearers'
import * as Maulers from '../../heroes/maulers'
import * as Wilders from '../../heroes/wilders'
import * as Graveborns from '../../heroes/graveborns'
import * as Celestials from '../../heroes/celestials'
import * as Hypogeans from '../../heroes/hypogeans'
import * as Dimensional from '../../heroes/dimensionals'

const dimensional: Composition = {
    id: 'PVP-ARTY-DIMENSIONAL',
    name: 'Dimensional',
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
                hero: Dimensional.Ainz
            },
            {
                hero: Dimensional.Albedo
            },
            {
                hero: Dimensional.Arthur
            },
        ]
    },
    flexHeroes: [
        {
            role: Role.Utility,
            heroes : [
                {
                    hero: Dimensional.Ukyo
                },
                {
                    hero: Wilders.Tasi
                },
                {
                    hero: Celestials.Orthos
                },
            ]
        },
        {
            role: Role.Enabler,
            heroes : [
                {
                    hero: Dimensional.Ezio
                },
                {
                    hero: Dimensional.JOKER
                },
                {
                    hero: Dimensional.Nakoruru
                },
                {
                    hero: Maulers.Numisu
                },
                {
                    hero: Dimensional.QUEEN
                },
                {
                    hero: Celestials.Talene
                },
                {
                    hero: Celestials.Flora
                },
            ]

        },
        {
            role: Role.Energy,
            heroes : [
                {
                    hero: Hypogeans.Mortas
                },
                {
                    hero: Lightbearers.Rowan
                },
                {
                    hero: Hypogeans.Ezizh
                },
            ]
        }
    ]
};

export default dimensional;