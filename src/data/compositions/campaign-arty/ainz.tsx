import { Composition} from '../../../model/compositions';
import * as Role from '../../characteristics/role';
import * as Lightbearers from '../../heroes/lightbearers'
import * as Maulers from '../../heroes/maulers'
import * as Wilders from '../../heroes/wilders'
import * as Graveborns from '../../heroes/graveborns'
import * as Celestials from '../../heroes/celestials'
import * as Hypogeans from '../../heroes/hypogeans'
import * as Dimensionals from '../../heroes/dimensionals'

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
                ...Dimensionals.Ainz
            }
        ]
    },
    flexHeroes: [
        {
            role: Role.Utility,
            heroes : [
                {
                    ...Celestials.Zaphrael,
                    recommended: true
                },
                {
                    ...Lightbearers.Hendrik
                },
                {
                    ...Maulers.Brutus
                },
                {
                    ...Celestials.Athalia
                },
                {
                    ...Celestials.Alna
                },
                {
                    ...Dimensionals.Ukyo
                },
                {
                    ...Graveborns.Thoran
                },
                {
                    ...Wilders.Tasi
                },
                {
                    ...Graveborns.Nara
                },
                {
                    ...Hypogeans.Mezoth
                },
                {
                    ...Graveborns.Ferael
                }
            ]
        },
        {
            role: Role.Enabler,
            heroes : [
                {
                    ...Dimensionals.Arthur,
                    recommended: true
                },
                {
                    ...Dimensionals.Albedo,
                    recommended: true
                },
                {
                    ...Dimensionals.Ezio
                },
                {
                    ...Dimensionals.JOKER
                },
                {
                    ...Dimensionals.Nakoruru
                },
                {
                    ...Maulers.Numisu
                },
                {
                    ...Dimensionals.QUEEN
                },
                {
                    ...Graveborns.Silas
                },
                {
                    ...Celestials.Talene
                },
            ]

        },
        {
            role: Role.Energy,
            heroes : [
                {
                    ...Lightbearers.Rowan,
                    recommended: true
                },
                {
                    ...Hypogeans.Mortas
                },
                {
                    ...Hypogeans.Ezizh
                },
                {
                    ...Wilders.Lyca
                },
                {
                    ...Lightbearers.Raine
                }
            ]
        }
    ]
};

export default ainz;