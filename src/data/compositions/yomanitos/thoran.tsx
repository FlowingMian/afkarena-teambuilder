import { Composition} from '../../../model/compositions';
import * as Role from '../../../model/characteristics/roles';
import * as Lightbearers from '../../heroes/lightbearers';
import * as Maulers from '../../heroes/maulers';
import * as Wilders from '../../heroes/wilders';
import * as Graveborns from '../../heroes/graveborns';
import * as Celestials from '../../heroes/celestials';
import * as Hypogeans from '../../heroes/hypogeans';

const composition: Composition = {
  id: 'YOMANITOS-THORAN',
  name: 'Thoran Chesse',
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
        ...Graveborns.Thoran,
        recommended: true
      },
      {
        ...Wilders.Pippa,
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
      role: Role.Flex,
      heroes : [
        {
          ...Celestials.Flora,
          recommended: true
        },
        {
          ...Hypogeans.Ezizh,
          recommended: true
        },
        {
          ...Graveborns.Kelthur
        },
        {
          ...Graveborns.Nara
        },
        {
          ...Celestials.Talene
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
          ...Maulers.Brutus
        },
        {
          ...Lightbearers.Rowan
        },
      ]
    },
  ]
};

export default composition;