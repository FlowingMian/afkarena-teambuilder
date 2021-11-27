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
  id: 'GVNN27-LUCRETIA',
  name: 'Lucretia',
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
        ...Hypogeans.Lucretia,
        recommended: true
      },
      {
        ...Wilders.Eironn,
        recommended: true
      },
      {
        ...Maulers.Skriath,
        recommended: true
      },
    ]
  },
  flexHeroes: [
    {
      role: Role.Usually,
      heroes : [
        {
          ...Dimensionals.QUEEN,
          recommended: true
        },
        {
          ...Maulers.Granit,
          recommended: true
        },
        {
          ...Hypogeans.Zolrath,
        },
        {
          ...Maulers.Safiya,
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
          ...Wilders.Gorvo
        },
        {
          ...Maulers.Brutus
        },
        {
          ...Maulers.Skreg
        },
        {
          ...Maulers.Anoki
        },
        {
          ...Dimensionals.PrinceOfPersia
        },
        {
          ...Celestials.Orthros
        },
      ]
    },
    {
      role: Role.Other,
      heroes : [
        {
          ...Wilders.Lorsan
        },
        {
          ...Maulers.Tidus
        },
        {
          ...Celestials.Zaphrael
        },
        {
          ...Hypogeans.Mortas
        },
      ]
    },
  ]
};

export default composition;