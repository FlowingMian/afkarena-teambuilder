import { Composition} from '../../../model/compositions';
import * as Role from '../../../model/characteristics/roles';
import * as Lightbearers from '../../heroes/lightbearers';
import * as Maulers from '../../heroes/maulers';
import * as Wilders from '../../heroes/wilders';
import * as Graveborns from '../../heroes/graveborns';
import * as Celestials from '../../heroes/celestials';
import * as Hypogeans from '../../heroes/hypogeans';

const composition: Composition = {
  id: 'XAPYSLENDERMAN-THORAN',
  name: 'Thoran Chesse',
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
        ...Graveborns.Thoran,
        recommended: true
      },
    ]
  },
  flexHeroes: [
    {
      role: Role.Energy,
      heroes : [
        {
          ...Wilders.Pippa,
        },
        {
          ...Lightbearers.Rowan,
        },
        {
          ...Wilders.Lyca,
        },
        {
          ...Hypogeans.Ezizh,
        },
      ] 
    },
    {
      role: Role.Displacement,
      heroes : [
        {
          ...Graveborns.Nara
        },
        {
          ...Graveborns.Kelthur
        },
        {
          ...Wilders.Lorsan
        },
        {
          ...Graveborns.Oden
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
      role: Role.SubDPS,
      heroes : [
        {
          ...Celestials.Talene
        },
        {
          ...Celestials.Flora
        },
      ]
    },
  ]
};

export default composition;