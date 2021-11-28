import { Composition} from '../../../model/compositions';
import * as Role from '../../../model/characteristics/roles';
import * as Maulers from '../../heroes/maulers';
import * as Wilders from '../../heroes/wilders';
import * as Graveborns from '../../heroes/graveborns';
import * as Celestials from '../../heroes/celestials';
import * as Hypogeans from '../../heroes/hypogeans';
import * as Dimensionals from '../../heroes/dimensionals';

const composition: Composition = {
  id: 'XAPYSLENDERMAN-LUCRETIA',
  name: 'Lucretia',
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
      role: Role.Flex,
      heroes : [
        {
          ...Celestials.Alna
        },
        {
          ...Hypogeans.Leofric
        },
        {
          ...Graveborns.Desira
        },
        {
          ...Celestials.Orthros
        },
        {
          ...Hypogeans.Zolrath
        },
        {
          ...Wilders.Nemora
        },
        {
          ...Wilders.Lyca
        },
        {
          ...Maulers.Safiya
        },
        {
          ...Maulers.Tidus
        },
        {
          ...Dimensionals.QUEEN
        },
        {
          ...Maulers.Brutus
        },
        {
          ...Celestials.Zaphrael
        },
        {
          ...Wilders.Lorsan
        },
      ]
    },
  ]
};

export default composition;