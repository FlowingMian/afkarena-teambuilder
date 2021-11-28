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
  id: 'GVNN27-AINZ',
  name: 'Ainz',
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
        ...Dimensionals.Ainz,
        recommended: true
      },
      {
        ...Dimensionals.Albedo,
        recommended: true
      },
      {
        ...Dimensionals.PrinceOfPersia,
        recommended: true
      },
    ]
  },
  flexHeroes: [
    {
      role: Role.Usually,
      heroes : [
        {
          ...Dimensionals.JOKER,
          recommended: true
        },
        {
          ...Hypogeans.Mortas,
          recommended: true
        },
        {
          ...Dimensionals.Ezio,
        },
        {
          ...Dimensionals.Arthur,
        },
      ]
    },
    {
      role: Role.Variants,
      heroes : [
        {
          ...Graveborns.Ferael
        },
        {
          ...Celestials.Alna
        },
        {
          ...Lightbearers.Gwyneth
        },
        {
          ...Maulers.Brutus
        },
        {
          ...Wilders.Lyca
        },
      ]
    },
    {
      role: Role.Other,
      heroes : [
        {
          ...Celestials.Zaphrael
        },
        {
          ...Lightbearers.Raine
        },
        {
          ...Maulers.Granit
        },
        {
          ...Hypogeans.Khazard
        },
        {
          ...Celestials.Talene
        },
        {
          ...Dimensionals.Merlin
        },
        {
          ...Hypogeans.Ezizh
        },
      ]
    },
  ]
};

export default composition;