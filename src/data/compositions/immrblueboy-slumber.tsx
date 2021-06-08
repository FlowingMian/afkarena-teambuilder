import { Composition} from '../../model/compositions';
import * as Role from '../../model/characteristics/roles';
import * as Lightbearers from '../heroes/lightbearers';
import * as Wilders from '../heroes/wilders';
import * as Graveborns from '../heroes/graveborns';
import * as Celestials from '../heroes/celestials';
import * as Hypogeans from '../heroes/hypogeans';

const composition: Composition = {
  id: 'IMMRBLUEBOY-SLUMBER',
  name: 'The Slumber',
  tags: ['PvE'],
  author: 'ImMrBlueBoy',
  updateDate: 'Jan 2021',
  links: [{
    label: 'The Slumber - PVE Formation Guide', 
    url: 'https://www.reddit.com/r/afkarena/comments/l4qzvr/the_slumber_pve_formation_guide/',
  }],
  coreHeroes: {
    role: Role.Core,
    heroes : [
      {
        ...Hypogeans.Khazard,
        recommended: true,
      },
      {
        ...Wilders.Tasi,
        recommended: true,
      },
      {
        ...Wilders.Pippa,
        recommended: true,
      },
    ]
  },
  flexHeroes: [
    {
      role: Role.Flex,
      heroes : [
        {
          ...Wilders.Saurus,
          recommended: true,
        },
        {
          ...Wilders.Gorvo,
          recommended: true,
        },
        {
          ...Lightbearers.Rowan
        },
        {
          ...Graveborns.Ferael
        },
        {
          ...Wilders.Lyca
        },
        {
          ...Lightbearers.Hendrik
        },
        {
          ...Graveborns.Oden
        },
        {
          ...Graveborns.Grezhul
        },
        {
          ...Celestials.Wukong
        },
        {
          ...Hypogeans.Mehira
        },
        {
          ...Graveborns.Izold
        },
      ]
    },
  ]
};

export default composition;