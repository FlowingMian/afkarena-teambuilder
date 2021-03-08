import { Composition} from '../../../model/compositions';
import * as Role from '../../characteristics/role';
import * as Lightbearers from '../../heroes/lightbearers';
import * as Maulers from '../../heroes/maulers';
import * as Wilders from '../../heroes/wilders';
import * as Graveborns from '../../heroes/graveborns';
import * as Celestials from '../../heroes/celestials';
import * as Hypogeans from '../../heroes/hypogeans';
import * as Dimensionals from '../../heroes/dimensionals';

const stall: Composition = {
  id: 'CAMPAIGN-ARTY-STALL',
  name: 'Stall',
  tags: ['PvE'],
  author: 'Arty and Alpattex',
  updateDate: 'Feb 2021',
  links: [{
    label: 'Guide', 
    url: 'https://preview.redd.it/kn01j3p3qvf61.png?width=2480&format=png&auto=webp&s=055d926d03bd84cf28c4a4581e1dd1b5d76ec358',
  }],
  coreHeroes: {
    role: Role.Core,
    heroes : [
      {
        ...Celestials.Talene,
        recommended: true
      },
      {
        ...Celestials.Flora,
        recommended: true
      }
    ]
  },
  flexHeroes: [
    {
      role: Role.SubDPS,
      heroes : [
        {
          ...Celestials.Zaphrael,
          recommended: true
        },
        {
          ...Celestials.Athalia
        },
        {
          ...Hypogeans.Zolrath
        },
        {
          ...Graveborns.Theowyn
        },
        {
          ...Wilders.Saurus
        },
        {
          ...Graveborns.Ferael
        },
        {
          ...Dimensionals.Ezio,
        },
        {
          ...Graveborns.Daimon
        }
      ]
    },
    {
      role: Role.Tankiness,
      heroes : [
        {
          ...Hypogeans.Mezoth,
          recommended: true
        },
        {
          ...Celestials.Orthos,
          recommended: true
        },
        {
          ...Graveborns.Thoran
        },
        {
          ...Celestials.Alna
        },
        {
          ...Dimensionals.Arthur
        },
        {
          ...Maulers.Brutus
        },
        {
          ...Wilders.Gorvo
        },
        {
          ...Graveborns.Grezhul
        },
        {
          ...Lightbearers.Hendrik
        },
        {
          ...Maulers.Skreg
        }
      ]

    },
    {
      role: Role.Utility,
      heroes : [
        {
          ...Graveborns.Oden
        },
        {
          ...Wilders.Pippa
        },
        {
          ...Lightbearers.Rowan
        } ,
        {
          ...Graveborns.Silas
        },
        {
          ...Wilders.Tasi
        } 
      ]
    }
  ]
};

export default stall;