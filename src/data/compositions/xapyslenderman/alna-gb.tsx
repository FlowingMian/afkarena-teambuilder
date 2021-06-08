import { Composition} from '../../../model/compositions';
import * as Role from '../../../model/characteristics/roles';
import * as Lightbearers from '../../heroes/lightbearers';
import * as Wilders from '../../heroes/wilders';
import * as Graveborns from '../../heroes/graveborns';
import * as Celestials from '../../heroes/celestials';
import * as Hypogeans from '../../heroes/hypogeans';

const composition: Composition = {
  id: 'XAPYSLENDERMAN-ALNA-GB',
  name: 'Alna+Gb',
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
        ...Celestials.Alna,
        recommended: true
      },
      {
        ...Graveborns.Daimon,
        recommended: true
      },
      {
        ...Graveborns.Grezhul,
        recommended: true
      },
    ]
  },
  flexHeroes: [
    {
      role: Role.CrowdControl,
      heroes : [
        {
          ...Graveborns.Ferael,
        },
        {
          ...Graveborns.Oden,
        },
        {
          ...Wilders.Tasi,
        },
        {
          ...Hypogeans.Mehira,
        },
        {
          ...Graveborns.Nara,
        },
        {
          ...Celestials.Athalia,
        },
      ] 
    },
    {
      role: Role.Sustain,
      heroes : [
        {
          ...Graveborns.Silas
        },
        {
          ...Graveborns.Desira
        },
        {
          ...Lightbearers.Rowan
        },
        {
          ...Celestials.Talene
        },
        {
          ...Hypogeans.Mortas
        },
        {
          ...Hypogeans.Leofric
        },
      ]
    },
  ]
};

export default composition;