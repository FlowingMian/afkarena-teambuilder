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
    id: 'CAMPAIGN-ARTY-IZOLD',
    name: 'Izold Cheese',
    tags: ['PvE'],
    author: 'Arty and Alpattex',
    updateDate: 'Feb 2021',
    links: [{
        label: 'Guide', 
        url: 'https://preview.redd.it/b2mwfsnjpvf61.png?width=2480&format=png&auto=webp&s=81b8b688fea318a708c25a21e2db72537fcac540',
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
                    hero: Lightbearers.Fawkes
                },
                {
                    hero: Graveborns.Ferael
                },
                {
                    hero: Dimensional.Nakoruru
                },
                {
                    hero: Graveborns.Nara
                },
                {
                    hero: Wilders.Nemora
                },
                {
                    hero: Wilders.Tasi
                },
                {
                    hero: Celestials.Athalia
                },
                {
                    hero: Celestials.Zaphrael
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
                    hero: Graveborns.Thoran
                },
                {
                    hero: Maulers.Skreg
                },
                {
                    hero: Graveborns.Silas
                },
                {
                    hero: Wilders.Pippa
                },
                {
                    hero: Hypogeans.Mezoth
                },
                {
                    hero: Lightbearers.Hendrik
                },
                {
                    hero: Wilders.Gorvo
                },
                {
                    hero:Maulers.Brutus
                },
                {
                    hero:Graveborns.Grezhul
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

export default izold;