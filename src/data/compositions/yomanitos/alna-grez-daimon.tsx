import { Composition} from '../../../model/compositions';
import * as Role from '../../../model/characteristics/roles';
import * as Maulers from '../../heroes/maulers';
import * as Wilders from '../../heroes/wilders';
import * as Graveborns from '../../heroes/graveborns';
import * as Celestials from '../../heroes/celestials';
import * as Dimensionals from '../../heroes/dimensionals';

const composition: Composition = {
  id: 'YOMANITOS-ALNA-GREZ-DAIMON',
  name: 'Alna - Grez/Daimon',
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
      role: Role.Flex,
      heroes : [
        {
          ...Wilders.Tasi,
          recommended: true
        },
        {
          ...Graveborns.Ferael,
          recommended: true
        },
        {
          ...Celestials.Athalia
        },
        {
          ...Celestials.Talene
        },
        {
          ...Graveborns.Silas
        },
        {
          ...Graveborns.Oden
        },
        {
          ...Wilders.Pippa
        },
        {
          ...Dimensionals.Ezio
        },
        {
          ...Wilders.Lyca
        },
        {
          ...Maulers.Brutus
        },
        {
          ...Celestials.Wukong
        },
        {
          ...Wilders.Raku
        },
        {
          ...Graveborns.Nara
        },
        {
          ...Graveborns.Izold
        },
      ] 
    },
  ]
};

export default composition;