import { Composition} from '../../model/compositions';
import * as Role from '../../model/characteristics/roles';
import * as Lightbearers from '../heroes/lightbearers';
import * as Maulers from '../heroes/maulers';
import * as Wilders from '../heroes/wilders';
import * as Graveborns from '../heroes/graveborns';
import * as Celestials from '../heroes/celestials';
import * as Hypogeans from '../heroes/hypogeans';
import * as Dimensionals from '../heroes/dimensionals';

const composition: Composition = {
  id: 'GREEDTOLEAD-PETTINGZOO',
  name: 'Petting Zoo',
  tags: ['PvE'],
  author: 'GreedtoLead',
  updateDate: 'May 2021',
  links: [{
    label: 'Comp Guide Petting Zoo', 
    url: 'https://www.reddit.com/r/afkarena/comments/nnc8l1/comp_guide_petting_zoo/',
  }],
  coreHeroes: {
    role: Role.Core,
    heroes : [
      {
        ...Hypogeans.Mehira,
        recommended: true,
      },
      {
        ...Lightbearers.Rowan,
        recommended: true,
      }
    ]
  },
  flexHeroes: [
    {
      role: Role.Energy,
      heroes : [
        {
          ...Wilders.Lyca
        },
        {
          ...Hypogeans.Zolrath
        },
        {
          ...Lightbearers.Rosaline
        },
      ]
    },
    {
      role: Role.CrowdControl,
      heroes : [
        {
          ...Wilders.Tasi,
        },
        {
          ...Wilders.Nemora
        },
        {
          ...Wilders.Raku,
        },
        {
          ...Maulers.Kren,
        },
        {
          ...Hypogeans.Khazard
        },
        {
          ...Dimensionals.PrinceOfPersia
        },
        {
          ...Wilders.Gorvo
        },
        {
          ...Maulers.Skreg
        },
        {
          ...Graveborns.Nara
        },
        {
          ...Celestials.Athalia
        },
      ]
    },
    {
      role: Role.Tankiness,
      heroes : [
        {
          ...Maulers.Brutus
        },
        {
          ...Dimensionals.Ezio
        },
      ]
    },
  ]
};

export default composition;