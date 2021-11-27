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
  id: 'GVNN27-ALNA-GREZH',
  name: 'Alna-Grezh',
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
        ...Graveborns.Grezhul,
        recommended: true
      },
      {
        ...Celestials.Alna,
        recommended: true
      },
    ]
  },
  flexHeroes: [
    {
      role: Role.Usually,
      heroes : [
        {
          ...Graveborns.Oden,
          recommended: true
        },
        {
          ...Graveborns.Ferael,
          recommended: true
        },
        {
          ...Hypogeans.Mortas,
          recommended: true
        },
        {
          ...Graveborns.Daimon,
        },
        {
          ...Graveborns.Silas
        },
      ]
    },
    {
      role: Role.Variants,
      heroes : [
        {
          ...Graveborns.Hodgkin
        },
        {
          ...Graveborns.Desira
        },
        {
          ...Lightbearers.Raine,
          recommended: true
        },
        {
          ...Wilders.Raku
        },
      ]
    },
    {
      role: Role.Other,
      heroes : [
        {
          ...Wilders.Tasi
        },
        {
          ...Hypogeans.Mehira
        },
        {
          ...Lightbearers.Rowan
        },
        {
          ...Dimensionals.PrinceOfPersia
        },
      ]
    },
  ]
};

export default composition;