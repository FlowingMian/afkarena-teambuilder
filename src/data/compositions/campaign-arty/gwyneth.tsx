import { Composition} from '../../../model/compositions';
import * as Role from '../../characteristics/role';
import * as Lightbearers from '../../heroes/lightbearers'
import * as Maulers from '../../heroes/maulers'
import * as Wilders from '../../heroes/wilders'
import * as Graveborns from '../../heroes/graveborns'
import * as Celestials from '../../heroes/celestials'
import * as Hypogeans from '../../heroes/hypogeans'
import * as Dimensional from '../../heroes/dimensionals'

const gwyneth: Composition = {
    id: 'CAMPAIGN-ARTY-GWYNETH',
    name: 'Gwyneth',
    tags: ['Campaign'],
    author: 'Arty and Alpattex',
    updateDate: 'Feb 2021',
    link: 'https://preview.redd.it/ebk7twc5pvf61.png?width=2480&format=png&auto=webp&s=22b7c89af7774ca96de906580e999d99baf380cf',
    coreHeroes: {
        role: Role.Core,
        heroes : [
            {
                hero: Lightbearers.Gwyneth
            },
            {
                hero: Dimensional.Arthur
            }
        ]
    },
    flexHeroes: [
        {
            role: Role.Buffer,
            heroes : [
                {
                    hero: Hypogeans.Zolrath
                },
                {
                    hero: Wilders.Lorsan
                },
                {
                    hero: Lightbearers.Rosaline
                },
                {
                    hero: Maulers.Numisu
                },
                {
                    hero: Hypogeans.Mortas
                },
                {
                    hero: Wilders.Lyca
                },
                {
                    hero: Lightbearers.Belinda
                },
                {
                    hero: Lightbearers.Raine
                }
            ]
        },
        {
            role: Role.Protection,
            heroes : [
                {
                    hero: Celestials.Alna
                },
                {
                    hero: Lightbearers.Hendrik
                },
                {
                    hero: Maulers.Brutus
                },
                {
                    hero: Lightbearers.Rowan
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
                    hero: Lightbearers.Cecilia
                },
                {
                    hero: Dimensional.JOKER
                },
                {
                    hero: Maulers.Kren
                }
            ]

        },
        {
            role: Role.CrowdControl,
            heroes : [
                {
                    hero: Lightbearers.Estrilda
                },
                {
                    hero: Celestials.Zaphrael
                },
                {
                    hero: Dimensional.Ukyo
                },
                {
                    hero: Hypogeans.Khazard
                },
                {
                    hero: Maulers.Tidus
                }
            ]
        }
    ]
};

export default gwyneth;