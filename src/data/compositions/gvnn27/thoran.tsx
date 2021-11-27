import { Composition} from '../../../model/compositions';
import * as Role from '../../../model/characteristics/roles';
import * as Lightbearers from '../../heroes/lightbearers';
import * as Maulers from '../../heroes/maulers';
import * as Wilders from '../../heroes/wilders';
import * as Graveborns from '../../heroes/graveborns';
import * as Celestials from '../../heroes/celestials';
import * as Hypogeans from '../../heroes/hypogeans';

const composition: Composition = {
  id: 'GVNN27-THORAN',
  name: 'Thoran cheese',
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
        ...Graveborns.Thoran,
        recommended: true
      },
      {
        ...Wilders.Lorsan,
        recommended: true
      },
    ]
  },
  flexHeroes: [
    {
      role: Role.Usually,
      heroes : [
        {
          ...Lightbearers.Raine,
          recommended: true
        },
        {
          ...Hypogeans.Ezizh
        },
        {
          ...Wilders.Pippa,
          recommended: true
        },
        {
          ...Graveborns.Kelthur
        },
        {
          ...Lightbearers.Rowan
        },
        {
          ...Wilders.Eironn
        },
        {
          ...Maulers.Skriath
        },
      ]
    },
    {
      role: Role.Variants,
      heroes : [
        {
          ...Maulers.Brutus
        },
        {
          ...Maulers.Granit
        },
        {
          ...Celestials.Orthros
        },
        {
          ...Wilders.Lyca
        },
        {
          ...Hypogeans.Zolrath
        },
        {
          ...Celestials.Flora
        },
        {
          ...Celestials.Athalia
        },
        {
          ...Graveborns.Nara
        },
      ]
    },
    {
      role: Role.Other,
      heroes : [
        {
          ...Celestials.Talene
        },
        {
          ...Hypogeans.Mortas
        },
        {
          ...Celestials.Zaphrael
        },
        {
          ...Graveborns.Theowyn
        },
        {
          ...Hypogeans.Mezoth
        },
        {
          ...Wilders.Nemora
        },
      ]
    },
  ]
};

export default composition;