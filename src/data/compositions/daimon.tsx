import { Composition} from '../../model/compositions';
import * as Role from '../../model/role';
import * as Ligthbearers from '../heroes/ligthbearers'
import * as Maulers from '../heroes/maulers'
import * as Wilders from '../heroes/wilders'
import * as Graveborns from '../heroes/graveborns'
import * as Celestials from '../heroes/celestials'
import * as Hypogeans from '../heroes/hypogeans'
import * as Dimensional from '../heroes/dimensionals'

const daimon: Composition = {
    id: 'DAIMON',
    name: 'Daimon',
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
                    hero: Ligthbearers.Hendrik
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
                    hero: Ligthbearers.Rowan
                },
                {
                    hero: Ligthbearers.Raine
                }
            ]
        }
    ]
};

export default daimon;