import { Composition} from '../../../model/compositions';
import * as Role from '../../../model/characteristics/roles';
import * as Lightbearers from '../../heroes/lightbearers';
import * as Maulers from '../../heroes/maulers';
import * as Wilders from '../../heroes/wilders';
import * as Celestials from '../../heroes/celestials';
import * as Hypogeans from '../../heroes/hypogeans';
import * as Dimensionals from '../../heroes/dimensionals';

const burst: Composition = {
  id: 'CAMPAIGN-ARTY-BURST',
  name: 'Burst',
  tags: ['PvE'],
  author: 'Arty and Alpattex',
  updateDate: 'Feb 2021',
  links: [{
    label: 'Guide', 
    url: 'https://preview.redd.it/gpfow7lppvf61.png?width=2480&format=png&auto=webp&s=aa185e96d955659a03094d2c081e891aa5a12a51',
  }],
  coreHeroes: {
    role: Role.Core,
    heroes : [
      {
        ...Wilders.Eironn,
        recommended: true
      },
      {
        ...Wilders.Lyca,
        recommended: true
      }
    ]
  },
  flexHeroes: [
    {
      role: Role.SubDPS,
      heroes : [
        {
          ...Lightbearers.Gwyneth,
          recommended: true
        },
        {
          ...Wilders.Lorsan,
          recommended: true
        },
        {
          ...Hypogeans.Zolrath,
          recommended: true
        },
        {
          ...Dimensionals.JOKER
        },
        {
          ...Wilders.Kaz
        },
        {
          ...Hypogeans.Lucretia
        },
        {
          ...Lightbearers.Raine
        },
        {
          ...Maulers.Safiya,
        },
        {
          ...Maulers.Satrana
        },
        {
          ...Wilders.Saurus
        },
      ]
    },
    {
      role: Role.CrowdControl,
      heroes : [
        {
          ...Celestials.Zaphrael
        },
        {
          ...Celestials.Athalia
        },
        {
          ...Maulers.Tidus
        },
        {
          ...Wilders.Tasi
        },
        {
          ...Celestials.Orthros
        },
        {
          ...Dimensionals.Nakoruru
        },
        {
          ...Lightbearers.Estrilda
        }
      ]

    },
    {
      role: Role.Tankiness,
      heroes : [
        {
          ...Hypogeans.Mezoth
        },
        {
          ...Maulers.Brutus
        },
        {
          ...Celestials.Alna
        } 
      ]
    }
  ]
};

export default burst;