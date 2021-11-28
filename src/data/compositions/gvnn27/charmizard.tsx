import { Composition} from '../../../model/compositions';
import * as Role from '../../../model/characteristics/roles';
import * as Lightbearers from '../../heroes/lightbearers';
import * as Maulers from '../../heroes/maulers';
import * as Wilders from '../../heroes/wilders';
import * as Graveborns from '../../heroes/graveborns';
import * as Celestials from '../../heroes/celestials';
import * as Hypogeans from '../../heroes/hypogeans';
import * as Dimensionals from '../../heroes/dimensionals';

const composition: Composition = {
  id: 'GVNN27-CHARMIZARD',
  name: 'Charmizard',
  tags: ['PvE', 'Latest'],
  author: 'Gvnn27',
  updateDate: 'Sep 2021',
  links: [{
    label: 'Top 5 comps with "ranking"', 
    url: 'https://www.reddit.com/r/afkarena/comments/pujfpk/top_5_comps_with_ranking/',
  }],
  coreHeroes: {
    role: Role.Core,
    heroes : [
      {
        ...Hypogeans.Mehira,
        recommended: true
      },
      {
        ...Lightbearers.Rowan,
        recommended: true
      },
    ]
  },
  flexHeroes: [
    {
      role: Role.Usually,
      heroes : [
        {
          ...Hypogeans.Khazard,
          recommended: true
        },
        {
          ...Hypogeans.Zolrath,
          recommended: true
        },
        {
          ...Lightbearers.Rosaline,
          recommended: true
        },
        {
          ...Wilders.Raku,
        },
        {
          ...Maulers.Kren,
        },
        {
          ...Wilders.Lyca
        },
      ]
    },
    {
      role: Role.Variants,
      heroes : [
        {
          ...Graveborns.Oden
        },
        {
          ...Graveborns.Daimon
        },
        {
          ...Graveborns.Grezhul
        },
        {
          ...Maulers.Brutus
        },
      ]
    },
    {
      role: Role.Other,
      heroes : [
        {
          ...Hypogeans.Mortas
        },
        {
          ...Hypogeans.Ezizh
        },
        {
          ...Maulers.Granit
        },
        {
          ...Dimensionals.PrinceOfPersia
        },
        {
          ...Graveborns.Izold
        },
        {
          ...Wilders.Tasi
        },
      ]
    },
  ]
};

export default composition;