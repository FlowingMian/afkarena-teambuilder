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
  id: 'XAPYSLENDERMAN-RAKU',
  name: 'Raku',
  tags: ['PvE'],
  author: 'XapySlenderman',
  updateDate: 'May 2021',
  links: [{
    label: 'Comprehensive Review of Chapter 41 by CASUALS and XapySlenderman', 
    url: 'https://www.reddit.com/r/afkarena/comments/nn09tm/comprehensive_review_of_chapter_41_by_casuals_and/',
  }],
  coreHeroes: {
    role: Role.Core,
    heroes : [
      {
        ...Wilders.Raku,
        recommended: true
      },
    ]
  },
  flexHeroes: [
    {
      role: Role.CrowdControl,
      heroes : [
        {
          ...Hypogeans.Mehira,
        },
        {
          ...Wilders.Tasi,
        },
        {
          ...Wilders.Pippa,
        },
        {
          ...Graveborns.Oden,
        },
        {
          ...Hypogeans.Khazard,
        },
        {
          ...Maulers.Kren,
        },
        {
          ...Lightbearers.Rowan,
        },
        {
          ...Wilders.Gorvo,
        },
      ] 
    },
    {
      role: Role.Buffer,
      heroes : [
        {
          ...Hypogeans.Mortas
        },
        {
          ...Wilders.Lorsan
        },
        {
          ...Wilders.Lyca
        },
      ]
    },
    {
      role: Role.Tankiness,
      heroes : [
        {
          ...Celestials.Alna
        },
        {
          ...Maulers.Brutus
        },
        {
          ...Hypogeans.Mezoth
        },
        {
          ...Dimensionals.Arthur
        },
      ]
    },
  ]
};

export default composition;