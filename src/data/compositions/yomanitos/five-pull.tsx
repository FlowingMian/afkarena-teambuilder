import { Composition} from '../../../model/compositions';
import * as Role from '../../../model/characteristics/roles';
import * as Maulers from '../../heroes/maulers';
import * as Wilders from '../../heroes/wilders';
import * as Celestials from '../../heroes/celestials';
import * as Hypogeans from '../../heroes/hypogeans';
import * as Dimensionals from '../../heroes/dimensionals';

const composition: Composition = {
  id: 'YOMANITOS-FIVE-PULL',
  name: 'Five Pull',
  tags: ['PvE'],
  author: 'Yomanitos',
  updateDate: 'May 2021',
  links: [{
    label: 'Yomanitos\'s campaign late game guide from personal experience', 
    url: 'https://www.reddit.com/r/afkarena/comments/ndpv7p/yomanitoss_campaign_late_game_guide_from_personal/',
  }],
  coreHeroes: {
    role: Role.Core,
    heroes : [
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
          ...Hypogeans.Lucretia,
          recommended: true
        },
        {
          ...Dimensionals.QUEEN,
          recommended: true
        },
      ] 
    },
    {
      role: Role.Niche,
      heroes : [
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
          ...Dimensionals.Ezio
        },
        {
          ...Celestials.Orthros
        },
      ]
    },
  ]
};

export default composition;