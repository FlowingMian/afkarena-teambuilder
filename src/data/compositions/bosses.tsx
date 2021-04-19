import { Composition} from '../../model/compositions';
import * as Role from '../../model/characteristics/roles';
import * as Lightbearers from '../heroes/lightbearers';
import * as Maulers from '../heroes/maulers';
import * as Wilders from '../heroes/wilders';
import * as Graveborns from '../heroes/graveborns';
import * as Celestials from '../heroes/celestials';
import * as Hypogeans from '../heroes/hypogeans';
import * as Dimensionals from '../heroes/dimensionals';

const bosses: Composition = {
  id: 'BOSSES',
  name: 'Bosses ( Wrizz / Soren / TR )',
  tags: ['Boss'],
  author: 'Multiple authors',
  updateDate: 'Dec 2020 - Feb 2021',
  links: [{
    label: 'Wrizz and Soren guide by 剑与远征攻略君 (Dec 2020)', 
    url: 'https://www.reddit.com/r/afkarena/comments/kzdavv/wrizz_and_soren_visual_guide_credits_%E5%89%91%E4%B8%8E%E8%BF%9C%E5%BE%81%E6%94%BB%E7%95%A5%E5%90%9B/',
  },
  {
    label: 'Wrizz and Soren guide by MaxSu (Jan 2021)', 
    url: 'https://www.reddit.com/r/afkarena/comments/kdh6h7/ultimate_damage_to_wrizz_and_soren_15122020/',
  },
  {
    label: 'Twisted Realm guide by Scullicious (Feb 2021)', 
    url: 'https://www.reddit.com/r/afkarena/comments/ll0zm8/a_visual_guide_for_twisted_realm_team_comps/',
  }],
  coreHeroes: {
    role: Role.Core,
    heroes : [
      {
        ...Graveborns.Grezhul,
        recommended: true
      },
      {
        ...Wilders.Saurus,
        recommended: true
      },
      {
        ...Celestials.ElijahLailah,
        recommended: true
      }
    ]
  },
  flexHeroes: [
    {
      role: Role.Flex,
      heroes : [
        {
          ...Maulers.Warek,
        },
        {
          ...Lightbearers.Raine,
        },
        {
          ...Lightbearers.Rosaline
        },
        {
          ...Lightbearers.Rowan
        },
        {
          ...Hypogeans.Ezizh
        },
        {
          ...Hypogeans.Mortas
        },
        {
          ...Graveborns.Silas
        },
      ]
    },
    {
      role: Role.Niche,
      heroes : [
        {
          ...Celestials.Talene
        },
        {
          ...Lightbearers.Cecilia
        },
        {
          ...Lightbearers.Estrilda
        },
        {
          ...Lightbearers.Belinda
        },
        {
          ...Graveborns.Shemira
        },
        {
          ...Graveborns.Daimon
        },
        {
          ...Graveborns.Izold
        },
        {
          ...Wilders.Tasi
        },
        {
          ...Wilders.Lorsan
        },
        {
          ...Hypogeans.Mehira
        },
      ]
    },
  ]
};

export default bosses;