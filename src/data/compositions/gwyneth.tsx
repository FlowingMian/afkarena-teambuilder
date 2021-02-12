import { Composition} from '../../model/compositions';
import * as Role from '../characteristics/role';
import * as Ligthbearers from '../heroes/ligthbearers'
import * as Maulers from '../heroes/maulers'
import * as Wilders from '../heroes/wilders'
import * as Graveborns from '../heroes/graveborns'
import * as Celestials from '../heroes/celestials'
import * as Hypogeans from '../heroes/hypogeans'
import * as Dimensional from '../heroes/dimensionals'

const gwyneth: Composition = {
    id: 'GWYNETH',
    name: 'Gwyneth',
    coreHeroes: {
        role: Role.Core,
        heroes : [
            {
                hero: Ligthbearers.Gwyneth
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
                    hero: Ligthbearers.Rosaline
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
                    hero: Ligthbearers.Belinda
                },
                {
                    hero: Ligthbearers.Raine
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
                    hero: Ligthbearers.Hendrik
                },
                {
                    hero: Maulers.Brutus
                },
                {
                    hero: Ligthbearers.Rowan
                },
                {
                    hero: Ligthbearers.Cecilia
                }
            ]
        },
        {
            role: Role.SubDPS,
            heroes : [
                {
                    hero: Graveborns.Ferael
                },
                {
                    hero: Ligthbearers.Cecilia
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
                    hero: Ligthbearers.Estrilda
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
                },
                {
                    hero: Maulers.Kren
                }
            ]
        }
    ]
};

export default gwyneth;