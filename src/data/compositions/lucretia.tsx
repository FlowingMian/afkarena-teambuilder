import { Composition} from '../../model/compositions';
import * as Role from '../../model/role';
import * as Ligthbearers from '../heroes/ligthbearers'
import * as Maulers from '../heroes/maulers'
import * as Wilders from '../heroes/wilders'
import * as Graveborns from '../heroes/graveborns'
import * as Celestials from '../heroes/celestials'
import * as Hypogeans from '../heroes/hypogeans'
import * as Dimensional from '../heroes/dimensionals'

const lucretia: Composition = {
    id: 'LUCRETIA',
    name: 'Lucretia',
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
                    hero: Ligthbearers.Hendrik
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
                    hero: Ligthbearers.Rowan
                },
                {
                    hero: Hypogeans.Ezizh
                },
                {
                    hero: Wilders.Lyca
                },
                {
                    hero: Ligthbearers.Raine
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