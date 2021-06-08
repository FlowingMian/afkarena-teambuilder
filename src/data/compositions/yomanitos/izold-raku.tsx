import { Composition} from '../../../model/compositions';
import * as Role from '../../../model/characteristics/roles';
import * as Lightbearers from '../../heroes/lightbearers';
import * as Maulers from '../../heroes/maulers';
import * as Wilders from '../../heroes/wilders';
import * as Graveborns from '../../heroes/graveborns';
import * as Celestials from '../../heroes/celestials';
import * as Hypogeans from '../../heroes/hypogeans';

const composition: Composition = {
  id: 'YOMANITOS-IZOLD-RAKU',
  name: 'Izold or Raku',
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
        ...Graveborns.Izold,
        recommended: true
      },
      {
        ...Wilders.Raku,
        recommended: true
      },
      {
        ...Lightbearers.Rowan,
        recommended: true
      },
      {
        ...Hypogeans.Mehira,
        recommended: true
      },
    ]
  },
  flexHeroes: [
    {
      role: Role.Flex,
      heroes : [
        {
          ...Graveborns.Oden,
          recommended: true
        },
        {
          ...Maulers.Brutus,
          recommended: true
        },
        {
          ...Celestials.Alna
        },
        {
          ...Graveborns.Silas
        },
        {
          ...Hypogeans.Mortas
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
      ]
    },
  ]
};

export default composition;