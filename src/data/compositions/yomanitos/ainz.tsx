import { Composition} from '../../../model/compositions';
import * as Role from '../../../model/characteristics/roles';
import * as Lightbearers from '../../heroes/lightbearers';
import * as Wilders from '../../heroes/wilders';
import * as Graveborns from '../../heroes/graveborns';
import * as Celestials from '../../heroes/celestials';
import * as Hypogeans from '../../heroes/hypogeans';
import * as Dimensionals from '../../heroes/dimensionals';

const composition: Composition = {
  id: 'YOMANITOS-AINZ',
  name: 'Ainz',
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
        ...Dimensionals.Ainz,
        recommended: true
      },
      {
        ...Dimensionals.Arthur,
        recommended: true
      },
      {
        ...Dimensionals.Albedo,
        recommended: true
      },
    ]
  },
  flexHeroes: [
    {
      role: Role.Flex,
      heroes : [
        {
          ...Dimensionals.JOKER,
          recommended: true
        },
        {
          ...Lightbearers.Gwyneth,
          recommended: true
        },
        {
          ...Dimensionals.Ezio
        },
        {
          ...Dimensionals.Nakoruru
        },
        {
          ...Dimensionals.Ukyo
        },
        {
          ...Hypogeans.Mortas
        },
        {
          ...Celestials.Wukong
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
          ...Wilders.Tasi
        },
        {
          ...Graveborns.Ferael
        },
        {
          ...Dimensionals.QUEEN
        },
      ]
    },
  ]
};

export default composition;