import { Composition} from '../../../model/compositions';
import * as Role from '../../characteristics/role';
import * as Lightbearers from '../../heroes/lightbearers'
import * as Maulers from '../../heroes/maulers'
import * as Wilders from '../../heroes/wilders'
import * as Graveborns from '../../heroes/graveborns'
import * as Celestials from '../../heroes/celestials'
import * as Hypogeans from '../../heroes/hypogeans'
import * as Dimensional from '../../heroes/dimensionals'

const lucretia: Composition = {
    id: 'CAMPAIGN-ARTY-LUCRETIA',
    name: 'Lucretia Cheese',
    tags: ['PvE'],
    author: 'Arty and Alpattex',
    updateDate: 'Feb 2021',
    links: [{
        label: 'Guide', 
        url: 'https://preview.redd.it/j4dtfgk1pvf61.png?width=2480&format=png&auto=webp&s=7714c6ed57f13a91509f6917af7aff31d644fa3a',
    }],
    coreHeroes: {
        role: Role.Core,
        heroes : [
            {
                hero: Hypogeans.Lucretia
            }
        ]
    },
    flexHeroes: [
        {
            role: Role.Enabler,
            heroes : [
                {
                    hero: Celestials.Alna
                },
                {
                    hero: Maulers.Brutus
                },
                {
                    hero: Hypogeans.Mezoth
                },
                {
                    hero: Lightbearers.Hendrik
                },
                {
                    hero: Maulers.Skreg
                },
                {
                    hero: Maulers.Anoki
                },
                {
                    hero: Maulers.Skriath
                },
                {
                    hero: Wilders.Eironn
                }
            ]
        },
        {
            role: Role.Energy,
            heroes : [
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
        },
        {
            role: Role.SubDPS,
            heroes : [
                {
                    hero: Celestials.Talene
                },
                {
                    hero: Wilders.Lorsan
                },
                {
                    hero: Graveborns.Ferael
                },
                {
                    hero: Wilders.Eironn
                },
                {
                    hero: Celestials.Athalia
                }
            ]
        },
        {
            role: Role.CrowdControl,
            heroes : [
                {
                    hero: Graveborns.Nara
                },
                {
                    hero: Celestials.Zaphrael
                },
                {
                    hero: Maulers.Safiya
                },
                {
                    hero: Wilders.Pippa
                },
                {
                    hero: Graveborns.Oden
                }
            ]
        }
    ]
};

export default lucretia;