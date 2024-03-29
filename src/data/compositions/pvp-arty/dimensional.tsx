import { Composition} from '../../../model/compositions';
import * as Role from '../../../model/characteristics/roles';
import * as Lightbearers from '../../heroes/lightbearers';
import * as Maulers from '../../heroes/maulers';
import * as Wilders from '../../heroes/wilders';
import * as Celestials from '../../heroes/celestials';
import * as Hypogeans from '../../heroes/hypogeans';
import * as Dimensionals from '../../heroes/dimensionals';

const dimensional: Composition = {
  id: 'PVP-ARTY-DIMENSIONAL',
  name: 'Dimensional',
  tags: ['PvP'],
  author: 'Arty and Alpattex',
  updateDate: 'Jan 2021',
  links: [{
    label: 'Guide', 
    url: 'https://www.reddit.com/r/afkarena/comments/kvuvsp/comprehensive_pvp_guide_by_arty_alpattex/',
  }],
  coreHeroes: {
    role: Role.Core,
    heroes : [
      {
        ...Dimensionals.Ainz,
        recommended: true
      },
      {
        ...Dimensionals.Albedo,
        recommended: true
      },
      {
        ...Dimensionals.Arthur,
        recommended: true
      },
    ]
  },
  flexHeroes: [
    {
      role: Role.Utility,
      heroes : [
        {
          ...Wilders.Tasi,
          recommended: true
        },
        {
          ...Dimensionals.Ukyo
        },
        {
          ...Celestials.Orthros
        },
      ]
    },
    {
      role: Role.Enabler,
      heroes : [
        {
          ...Celestials.Talene,
          recommended: true
        },
        {
          ...Dimensionals.Ezio
        },
        {
          ...Dimensionals.JOKER
        },
        {
          ...Dimensionals.Nakoruru
        },
        {
          ...Maulers.Numisu
        },
        {
          ...Dimensionals.QUEEN
        },
        {
          ...Celestials.Flora
        },
      ]

    },
    {
      role: Role.Energy,
      heroes : [
        {
          ...Hypogeans.Mortas
        },
        {
          ...Lightbearers.Rowan
        },
        {
          ...Hypogeans.Ezizh
        },
      ]
    }
  ]
};

export default dimensional;