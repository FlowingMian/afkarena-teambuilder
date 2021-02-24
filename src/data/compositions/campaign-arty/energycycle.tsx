import { Composition} from '../../../model/compositions';
import * as Role from '../../characteristics/role';
import * as Lightbearers from '../../heroes/lightbearers'
import * as Maulers from '../../heroes/maulers'
import * as Wilders from '../../heroes/wilders'
import * as Graveborns from '../../heroes/graveborns'
import * as Celestials from '../../heroes/celestials'
import * as Hypogeans from '../../heroes/hypogeans'
import * as Dimensional from '../../heroes/dimensionals'

const energycycle: Composition = {
    id: 'CAMPAIGN-ARTY-ENERGYCYCLE',
    name: 'Energy Cycle',
    tags: ['PvE'],
    author: 'Arty and Alpattex',
    updateDate: 'Feb 2021',
    links: [{
        label: 'Guide', 
        url: 'https://preview.redd.it/6yl5v7cgpvf61.png?width=2480&format=png&auto=webp&s=e7fec64234605d3f0c338995ef112d97385d343e',
    }],
    coreHeroes: {
        role: Role.Core,
        heroes : [
            {
                hero: Celestials.ElijahLailah
            },
            {
                hero: Lightbearers.Rowan
            },
            {
                hero: Hypogeans.Ezizh
            }
        ]
    },
    flexHeroes: [
        {
            role: Role.CrowdControl,
            heroes : [
                {
                    hero: Wilders.Tasi
                },
                {
                    hero: Celestials.Alna
                },
                {
                    hero: Lightbearers.Fawkes
                },
                {
                    hero: Graveborns.Ferael
                },
                {
                    hero: Hypogeans.Khazard
                },
                {
                    hero: Hypogeans.Mehira
                },
                {
                    hero: Hypogeans.Mezoth
                },
                {
                    hero: Graveborns.Oden
                }
            ]
        },
        {
            role: Role.SubDPS,
            heroes : [
                {
                    hero: Celestials.Athalia
                },
                {
                    hero: Hypogeans.Lucretia
                },
                {
                    hero: Hypogeans.Mortas
                },
                {
                    hero: Lightbearers.Rosaline
                },
                {
                    hero: Celestials.Wukong
                },
                {
                    hero: Dimensional.Ezio
                },
                {
                    hero: Dimensional.Ainz
                },
                {
                    hero: Dimensional.Albedo
                },
                {
                    hero: Graveborns.Daimon
                }
            ]
        },
        {
            role: Role.Sustain,
            heroes : [
                {
                    hero: Celestials.Talene
                },
                {
                    hero: Graveborns.Silas
                },
                {
                    hero: Wilders.Saurus
                }
            ]
        }
    ]
};

export default energycycle;