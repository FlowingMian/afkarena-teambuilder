import { Composition } from '../../../model/compositions';
import * as Role from '../../../model/characteristics/roles';
import * as Lightbearers from '../../heroes/lightbearers';
import * as Maulers from '../../heroes/maulers';
import * as Wilders from '../../heroes/wilders';
import * as Graveborns from '../../heroes/graveborns';
import * as Celestials from '../../heroes/celestials';
import * as Hypogeans from '../../heroes/hypogeans';
import * as Dimensionals from '../../heroes/dimensionals';

const fivePull: Composition = {
  id: 'CAMPAIGN-ARTY-FIVEPULL',
  name: 'Five Pull',
  tags: ['PvE'],
  author: 'Arty and Alpattex',
  updateDate: 'Feb 2021',
  links: [{
    label: 'Guide', 
    url: 'https://preview.redd.it/r76h5rospvf61.png?width=2480&format=png&auto=webp&s=a3aa8d52b603bc16fc1c070132fa7f57020f2ff2',
  }],
  coreHeroes: {
    role: Role.Core,
    heroes : [
      {
        ...Wilders.Eironn,
        recommended: true
      },
      {
        ...Maulers.Skriath,
        recommended: true,
      }
    ]
  },
  flexHeroes: [
    {
      role: Role.SubDPS,
      heroes : [
        {
          ...Maulers.Safiya,
          recommended: true
        },
        {
          ...Wilders.Saurus
        },
        {
          ...Graveborns.Thoran
        },
        {
          ...Maulers.Drez
        },
        {
          ...Celestials.Flora
        },
        {
          ...Lightbearers.Gwyneth
        },
        {
          ...Dimensionals.JOKER
        },
        {
          ...Hypogeans.Lucretia
        },
        {
          ...Graveborns.Oden
        },
        {
          ...Maulers.Satrana
        },
        {
          ...Hypogeans.Zolrath
        },
        {
          ...Maulers.Khasos
        }
      ]
    },
    {
      role: Role.CrowdControl,
      heroes : [
        {
          ...Maulers.Tidus,
          recommended: true
        },
        {
          ...Celestials.Zaphrael
        },
        {
          ...Wilders.Nemora
        },
        {
          ...Wilders.Gorvo
        },
        {
          ...Celestials.Orthos
        },
        {
          ...Wilders.Pippa
        },
        {
          ...Wilders.Tasi
        },
        {
          ...Dimensionals.QUEEN
        }
      ]

    },
    {
      role: Role.Utility,
      heroes : [
        {
          ...Wilders.Lyca,
          recommended: true
        },
        {
          ...Graveborns.Theowyn
        },
        {
          ...Lightbearers.Rowan
        },
        {
          ...Maulers.Brutus
        },
        {
          ...Celestials.Zaphrael
        },
        {
          ...Celestials.Alna
        },
        {
          ...Maulers.Anoki
        },
        {
          ...Wilders.Lorsan
        },
        {
          ...Hypogeans.Mezoth
        }
      ]
    }
  ]
};

export default fivePull;