import { Composition} from '../../model/compositions';
import * as Role from '../../model/characteristics/roles';
import * as Wilders from '../heroes/wilders';
import * as Graveborns from '../heroes/graveborns';
import * as Celestials from '../heroes/celestials';
import * as Hypogeans from '../heroes/hypogeans';
import * as Dimensionals from '../heroes/dimensionals';

const composition: Composition = {
  id: 'OBSIDIANQQTT-PORTALPARTY',
  name: 'Portal Party',
  tags: ['PvE'],
  author: 'Obsidianqqtt',
  updateDate: 'May 2021',
  links: [{
    label: 'Portal Party comp in-depth guide', 
    url: 'https://www.reddit.com/r/afkarena/comments/ndrd5o/portal_party_comp_indepth_guide/',
  }],
  coreHeroes: {
    role: Role.Core,
    heroes : [
      {
        ...Wilders.Pippa,
        recommended: true,
      },
      {
        ...Graveborns.Oden,
        recommended: true,
      }
    ]
  },
  flexHeroes: [
    {
      role: Role.CrowdControl,
      heroes : [
        {
          ...Wilders.Tasi,
        },
        {
          ...Dimensionals.QUEEN
        },
        {
          ...Graveborns.Grezhul,
        },
        {
          ...Wilders.Raku,
        },
        {
          ...Wilders.Gorvo,
        },
        {
          ...Hypogeans.Mehira
        },
      ]
    },
    {
      role: Role.Sustain,
      heroes : [
        {
          ...Wilders.Nemora
        },
        {
          ...Celestials.Talene
        },
      ]
    },
  ]
};

export default composition;