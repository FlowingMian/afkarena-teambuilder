import { Composition} from '../../../model/compositions';
import * as Role from '../../../model/characteristics/roles';
import * as Lightbearers from '../../heroes/lightbearers';
import * as Maulers from '../../heroes/maulers';
import * as Graveborns from '../../heroes/graveborns';
import * as Celestials from '../../heroes/celestials';

const skregInvade: Composition = {
  id: 'PVP-ARTY-INVADE',
  name: 'Mauler Invade',
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
        ...Maulers.Skreg,
        recommended: true
      },
      {
        ...Maulers.Tidus,
        recommended: true
      },
      {
        ...Maulers.Numisu,
        recommended: true
      }
    ]
  },
  flexHeroes: [
    {
      role: Role.Damage,
      heroes : [
        {
          ...Maulers.Satrana,
          recommended: true
        },
        {
          ...Celestials.Athalia
        },
        {
          ...Graveborns.Kelthur
        },
        {
          ...Maulers.Antandra
        },
        {
          ...Maulers.Drez
        },
        {
          ...Maulers.Brutus
        },
        {
          ...Maulers.Vurk
        },
        {
          ...Maulers.Kren
        },
      ]
    },
    {
      role: Role.CrowdControl,
      heroes : [
        {
          ...Lightbearers.Cecilia
        },
      ]
    },
    {
      role: Role.Enabler,
      heroes : [
        {
          ...Maulers.Safiya,
          recommended: true
        },
        {
          ...Maulers.Anoki
        },
        {
          ...Maulers.Skriath
        },
      ]

    }
  ]
};

export default skregInvade;