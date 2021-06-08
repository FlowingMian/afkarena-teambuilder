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
    label: 'Wrizz and Soren guide by MaxSu (Jan 2021)', 
    url: 'https://www.reddit.com/r/afkarena/comments/kdh6h7/ultimate_damage_to_wrizz_and_soren_15122020/',
  },
  {
    label: 'Twisted Realm guide by Scullicious (Feb 2021)', 
    url: 'https://www.reddit.com/r/afkarena/comments/ll0zm8/a_visual_guide_for_twisted_realm_team_comps/',
  },
  {
    label: 'Guild Hunt by AFK Analytica (May 2021)', 
    url: 'https://www.afk-analytica.com/references/bosses/guild-hunt',
  },
  {
    label: 'Twisted Realm by AFK Analytica (May 2021)', 
    url: 'https://www.afk-analytica.com/references/bosses/twisted-realm',
  },],
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
          ...Celestials.Morael
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
          ...Maulers.Antandra
        },
        {
          ...Maulers.Skriath
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
          ...Wilders.Raku
        },
        {
          ...Wilders.Lorsan
        },
        {
          ...Hypogeans.Ezizh
        },
        {
          ...Hypogeans.Mehira
        },
      ]
    },
  ]
};

export default bosses;