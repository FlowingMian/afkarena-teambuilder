import { Composition} from '../../../model/compositions';
import * as Role from '../../../model/characteristics/roles';
import * as Lightbearers from '../../heroes/lightbearers';
import * as Wilders from '../../heroes/wilders';
import * as Graveborns from '../../heroes/graveborns';
import * as Celestials from '../../heroes/celestials';

const izold: Composition = {
  id: 'PVP-ARTY-IZOLD',
  name: 'Izold',
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
        ...Graveborns.Izold,
        recommended: true
      }
    ]
  },
  flexHeroes: [
    {
      role: Role.CrowdControl,
      heroes : [
        {
          ...Graveborns.Ferael,
          recommended: true
        },
        {
          ...Graveborns.Nara
        },
        {
          ...Wilders.Nemora
        },
        {
          ...Celestials.Athalia
        },
        {
          ...Graveborns.Oden
        }
      ]
    },
    {
      role: Role.Enabler,
      heroes : [
        {
          ...Graveborns.Silas,
          recommended: true
        },
        {
          ...Lightbearers.Hendrik,
          recommended: true
        },
        {
          ...Celestials.Alna
        },
        {
          ...Wilders.Pippa
        },
        {
          ...Graveborns.Grezhul
        },
        {
          ...Wilders.Lorsan
        },
        {
          ...Celestials.Talene
        }
      ]

    },
  ]
};

export default izold;