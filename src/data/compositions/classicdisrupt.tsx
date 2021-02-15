import { Composition} from '../../model/compositions';
import * as Role from '../characteristics/role';
import * as Ligthbearers from '../heroes/ligthbearers'
import * as Maulers from '../heroes/maulers'
import * as Wilders from '../heroes/wilders'
import * as Graveborns from '../heroes/graveborns'
import * as Celestials from '../heroes/celestials'
import * as Hypogeans from '../heroes/hypogeans'
import * as Dimensional from '../heroes/dimensionals'

const classicDisrupt: Composition = {
    id: 'CLASSICDISRUPT',
    name: 'Classic Disrupt',
    tags: ['Campaign'],
    author: 'Arty and Alpattex',
    link: 'https://preview.redd.it/2zry5krcpvf61.png?width=2480&format=png&auto=webp&s=8ed960ef8b38604202f3b6fadefb66b674cc7927',
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
                    hero: Ligthbearers.Rowan
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