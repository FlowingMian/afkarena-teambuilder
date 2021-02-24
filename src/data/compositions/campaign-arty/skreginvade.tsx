import { Composition} from '../../../model/compositions';
import * as Role from '../../characteristics/role';
import * as Lightbearers from '../../heroes/lightbearers'
import * as Maulers from '../../heroes/maulers'
import * as Wilders from '../../heroes/wilders'
import * as Graveborns from '../../heroes/graveborns'
import * as Celestials from '../../heroes/celestials'
import * as Hypogeans from '../../heroes/hypogeans'
import * as Dimensional from '../../heroes/dimensionals'
import { Wilder } from '../../characteristics/factions';

const skregInvade: Composition = {
    id: 'CAMPAIGN-ARTY-SKREGINVADE',
    name: 'Skreg Invade',
    tags: ['PvE'],
    author: 'Arty and Alpattex',
    updateDate: 'Feb 2021',
    links: [{
        label: 'Guide', 
        url: 'https://preview.redd.it/a40xisl8pvf61.png?width=2480&format=png&auto=webp&s=b52c1a6975363974b363ddceaf260552a02daad3',
    },
    {
        label: 'Update', 
        url: 'https://www.reddit.com/r/afkarena/comments/le0b0p/visual_guide_to_end_game_pve_formations_by_arty/gnua3c8/?context=3',
    }],
    coreHeroes: {
        role: Role.Core,
        heroes : [
            {
                hero: Maulers.Skreg
            }
        ]
    },
    flexHeroes: [
        {
            role: Role.Damage,
            heroes : [
                {
                    hero: Maulers.Antandra
                },
                {
                    hero: Hypogeans.Zolrath
                },
                {
                    hero: Maulers.Tidus
                },
                {
                    hero: Lightbearers.Thane
                },
                {
                    hero: Wilders.Saurus
                },
                {
                    hero: Maulers.Satrana
                },
                {
                    hero: Celestials.Athalia
                },
                {
                    hero: Hypogeans.Lucretia
                },
                {
                    hero: Celestials.Flora
                },
                {
                    hero: Maulers.Drez
                }
            ]
        },
        {
            role: Role.CrowdControl,
            heroes : [
                {
                    hero: Lightbearers.Cecilia
                },
                {
                    hero: Wilders.Gorvo
                },
                {
                    hero: Celestials.Orthos
                },
                {
                    hero: Wilders.Tasi
                },
                {
                    hero: Wilders.Seirus
                },
                {
                    hero: Celestials.Zaphrael
                },
                {
                    hero: Wilders.Pippa
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
                    hero: Maulers.Anoki
                },
                {
                    hero: Maulers.Numisu
                },
                {
                    hero: Maulers.Skriath
                },
                {
                    hero: Celestials.Talene
                }
            ]

        }
    ]
};

export default skregInvade;