import { Composition} from '../../../model/compositions';
import * as Role from '../../characteristics/role';
import * as Lightbearers from '../../heroes/lightbearers'
import * as Maulers from '../../heroes/maulers'
import * as Wilders from '../../heroes/wilders'
import * as Graveborns from '../../heroes/graveborns'
import * as Celestials from '../../heroes/celestials'
import * as Hypogeans from '../../heroes/hypogeans'
import * as Dimensional from '../../heroes/dimensionals'

const daimon: Composition = {
    id: 'CAMPAIGN-ARTY-DAIMON',
    name: 'Daimon',
    tags: ['Campaign'],
    author: 'Arty and Alpattex',
    updateDate: 'Feb 2021',
    link: 'https://preview.redd.it/rxppdwdwpvf61.png?width=2480&format=png&auto=webp&s=5a5c8a18b9e7f0416faa6c89cc2fa5a07e3d3aaf',
    coreHeroes: {
        role: Role.Core,
        heroes : [
            {
                hero: Graveborns.Daimon,
                requiredSignature: 20,
                requiredFurniture: 3
            }
        ]
    },
    flexHeroes: [
        {
            role: Role.Tankiness,
            heroes : [
                {
                    hero: Graveborns.Thoran
                },
                {
                    hero: Hypogeans.Mezoth
                },
                {
                    hero: Lightbearers.Hendrik
                },
                {
                    hero: Celestials.Wukong
                },
                {
                    hero: Celestials.Alna
                },
                {
                    hero: Dimensional.Arthur
                },
                {
                    hero: Maulers.Brutus
                }
            ]
        },
        {
            role: Role.CrowdControl,
            heroes : [
                {
                    hero: Celestials.Zaphrael
                },
                {
                    hero: Wilders.Tasi
                },
                {
                    hero: Celestials.Orthos
                },
                {
                    hero: Wilders.Eironn
                },
                {
                    hero: Hypogeans.Ezizh
                },
                {
                    hero: Graveborns.Ferael
                },
                {
                    hero: Wilders.Gorvo
                },
                {
                    hero: Hypogeans.Khazard
                },
                {
                    hero: Hypogeans.Mehira
                },
                {
                    hero: Dimensional.Nakoruru
                },
                {
                    hero: Graveborns.Nara
                },
                {
                    hero: Wilders.Nemora
                }
            ]
        },
        {
            role: Role.Utility,
            heroes : [
                {
                    hero: Celestials.Talene
                },
                {
                    hero: Celestials.ElijahLailah
                },
                {
                    hero: Hypogeans.Zolrath
                },
                {
                    hero: Dimensional.Ezio
                },
                {
                    hero: Wilders.Lorsan
                } ,
                {
                    hero: Graveborns.Oden
                },
                {
                    hero: Graveborns.Silas
                } 
            ]
        },
        {
            role: Role.Energy,
            heroes : [
                {
                    hero: Wilders.Lyca
                },
                {
                    hero: Lightbearers.Rowan
                },
                {
                    hero: Lightbearers.Raine
                }
            ]
        }
    ]
};

export default daimon;