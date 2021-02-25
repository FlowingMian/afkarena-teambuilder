import { Composition} from '../../../model/compositions';
import * as Role from '../../characteristics/role';
import * as Lightbearers from '../../heroes/lightbearers'
import * as Maulers from '../../heroes/maulers'
import * as Wilders from '../../heroes/wilders'
import * as Graveborns from '../../heroes/graveborns'
import * as Celestials from '../../heroes/celestials'
import * as Hypogeans from '../../heroes/hypogeans'
import * as Dimensional from '../../heroes/dimensionals'

const classicDisrupt: Composition = {
    id: 'CAMPAIGN-ARTY-CLASSICDISRUPT',
    name: 'Classic Disrupt',
    tags: ['PvE'],
    author: 'Arty and Alpattex',
    updateDate: 'Feb 2021',
    links: [{
        label: 'Guide', 
        url: 'https://preview.redd.it/2zry5krcpvf61.png?width=2480&format=png&auto=webp&s=8ed960ef8b38604202f3b6fadefb66b674cc7927',
    }],
    coreHeroes: {
        role: Role.Core,
        heroes : [
            {
                hero: Graveborns.Ferael
            }
        ]
    },
    flexHeroes: [
        {
            role: Role.CrowdControl,
            heroes : [
                {
                    hero: Wilders.Gorvo
                },
                {
                    hero: Hypogeans.Khazard
                },
                {
                    hero: Hypogeans.Mezoth
                },
                {
                    hero: Dimensional.Nakoruru
                },
                {
                    hero: Graveborns.Nara
                },
                {
                    hero: Graveborns.Oden
                },
                {
                    hero: Celestials.Orthos
                },
                {
                    hero: Wilders.Tasi
                }
            ]
        },
        {
            role: Role.SubDPS,
            heroes : [
                {
                    hero: Graveborns.Thoran
                },
                {
                    hero: Celestials.Wukong
                },
                {
                    hero: Celestials.Flora
                },
                {
                    hero: Celestials.Zaphrael
                },
                {
                    hero: Hypogeans.Zolrath
                },
                {
                    hero: Graveborns.Daimon
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
                    hero: Lightbearers.Rowan
                },
                {
                    hero: Celestials.Talene
                },
                {
                    hero: Graveborns.Silas
                }
            ]
        }
    ]
};

export default classicDisrupt;