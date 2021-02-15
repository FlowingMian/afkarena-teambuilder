import { Composition} from '../../model/compositions';
import * as Role from '../characteristics/role';
import * as Ligthbearers from '../heroes/ligthbearers'
import * as Maulers from '../heroes/maulers'
import * as Wilders from '../heroes/wilders'
import * as Graveborns from '../heroes/graveborns'
import * as Celestials from '../heroes/celestials'
import * as Hypogeans from '../heroes/hypogeans'
import * as Dimensional from '../heroes/dimensionals'

const thoran: Composition = {
    id: 'THORAN',
    name: 'Thoran Cheese',
    tags: ['Campaign'],
    author: 'Arty and Alpattex',
    link: 'https://preview.redd.it/off9mrptovf61.png?width=2480&format=png&auto=webp&s=70ee0f40dfcff132968b2f83663d0fc7cbb6b78e',
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