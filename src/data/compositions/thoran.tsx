import { Composition} from '../../model/compositions';
import * as Role from '../../model/role';
import * as Ligthbearers from '../heroes/ligthbearers'
import * as Maulers from '../heroes/maulers'
import * as Wilders from '../heroes/wilders'
import * as Graveborns from '../heroes/graveborns'
import * as Celestials from '../heroes/celestials'
import * as Hypogeans from '../heroes/hypogeans'
import * as Dimensional from '../heroes/dimensionals'

const thoran: Composition = {
    id: 'THORAN',
    name: 'Thoran',
    coreHeroes: {
        role: Role.Core,
        heroes : [
            {
                hero: Graveborns.Thoran
            }
        ]
    },
    flexHeroes: [
        {
            role: Role.Displacement,
            heroes : [
                {
                    hero: Wilders.Eironn
                },
                {
                    hero: Celestials.Athalia
                },
                {
                    hero: Graveborns.Nara
                },
                {
                    hero: Graveborns.Oden
                },
                {
                    hero: Wilders.Pippa
                },
                {
                    hero: Graveborns.Kelthur
                },
                {
                    hero: Maulers.Skriath
                },
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
                    hero: Celestials.Flora
                },
                {
                    hero: Celestials.Talene
                },
                {
                    hero: Wilders.Lorsan
                }
            ]

        }
    ]
};

export default thoran;