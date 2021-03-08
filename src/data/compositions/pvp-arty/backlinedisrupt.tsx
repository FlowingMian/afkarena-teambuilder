import { Composition} from '../../../model/compositions';
import * as Role from '../../characteristics/role';
import * as Graveborns from '../../heroes/graveborns';
import * as Celestials from '../../heroes/celestials';
import * as Hypogeans from '../../heroes/hypogeans';

const backlineDisrupt: Composition = {
  id: 'PVP-ARTY-DISRUPT',
  name: 'Backline Disrupt',
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
        ...Graveborns.Nara,
        recommended: true
      },
      {
        ...Celestials.Athalia,
        recommended: true
      }
    ]
  },
  flexHeroes: [
    {
      role: Role.CrowdControl,
      heroes : [
        {
          ...Celestials.Orthos,
          recommended: true
        },
        {
          ...Hypogeans.Mezoth
        },
        {
          ...Graveborns.Oden
        },
      ]
    },
    {
      role: Role.SubDPS,
      heroes : [
        {
          ...Graveborns.Ferael,
          recommended: true
        },
        {
          ...Celestials.Wukong,
          recommended: true
        },
        {
          ...Graveborns.Thoran
        },
        {
          ...Graveborns.Daimon
        }
      ]
    },
    {
      role: Role.Enabler,
      heroes : [
        {
          ...Celestials.Talene
        },
      ]
    }
  ]
};

export default backlineDisrupt;