import { Composition} from '../../../model/compositions';
import * as Role from '../../characteristics/role';
import * as Lightbearers from '../../heroes/lightbearers'
import * as Maulers from '../../heroes/maulers'
import * as Wilders from '../../heroes/wilders'
import * as Graveborns from '../../heroes/graveborns'
import * as Celestials from '../../heroes/celestials'
import * as Hypogeans from '../../heroes/hypogeans'
import * as Dimensional from '../../heroes/dimensionals'

const ainz: Composition = {
    id: 'CAMPAIGN-ARTY-AINZ',
    name: 'Ainz',
    tags: ['PvE'],
    author: 'Arty and Alpattex',
    updateDate: 'Feb 2021',
    links: [{
        label: 'Guide', 
        url: 'https://preview.redd.it/hr5fmgcmpvf61.png?width=2480&format=png&auto=webp&s=278b881910336d4796b82cbf173ae2a0eeb376ca',
    }],
    coreHeroes: {
        role: Role.Core,
        heroes : [
            {
                hero: Dimensional.Ainz
            }
        ]
    },
    flexHeroes: [
        {
            role: Role.Utility,
            heroes : [
                {
                    hero: Lightbearers.Hendrik
                },
                {
                    hero: Maulers.Brutus
                },
                {
                    hero: Celestials.Athalia
                },
                {
                    hero: Celestials.Alna
                },
                {
                    hero: Celestials.Zaphrael
                },
                {
                    hero: Dimensional.Ukyo
                },
                {
                    hero: Graveborns.Thoran
                },
                {
                    hero: Wilders.Tasi
                },
                {
                    hero: Graveborns.Nara
                },
                {
                    hero: Hypogeans.Mezoth
                },
                {
                    hero: Graveborns.Ferael
                }
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
                    hero: Graveborns.Silas
                },
                {
                    hero: Celestials.Talene
                },
                {
                    hero: Dimensional.Arthur
                },
                {
                    hero: Dimensional.Albedo
                }
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
                {
                    hero: Wilders.Lyca
                },
                {
                    hero: Lightbearers.Raine
                }
            ]
        }
    ]
};

export default ainz;