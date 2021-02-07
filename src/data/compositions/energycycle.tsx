import { Composition} from '../../model/compositions';
import * as Role from '../../model/role';
import * as Ligthbearers from '../heroes/ligthbearers'
import * as Maulers from '../heroes/maulers'
import * as Wilders from '../heroes/wilders'
import * as Graveborns from '../heroes/graveborns'
import * as Celestials from '../heroes/celestials'
import * as Hypogeans from '../heroes/hypogeans'
import * as Dimensional from '../heroes/dimensionals'
import ainz from './ainz';

const energycycle: Composition = {
    id: 'ENERGYCYCLE',
    name: 'Energy Cycle',
    coreHeroes: {
        role: Role.Core,
        heroes : [
            {
                hero: Celestials.ElijahLailah
            },
            {
                hero: Ligthbearers.Rowan
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
                    hero: Hypogeans.Ezizh
                },
                {
                    hero: Ligthbearers.Fawkes
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
                    hero: Ligthbearers.Rosaline
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