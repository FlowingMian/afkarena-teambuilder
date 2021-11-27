import { Composition} from '../../../model/compositions';
import * as Role from '../../../model/characteristics/roles';
import * as Lightbearers from '../../heroes/lightbearers';
import * as Maulers from '../../heroes/maulers';
import * as Wilders from '../../heroes/wilders';
import * as Celestials from '../../heroes/celestials';
import * as Hypogeans from '../../heroes/hypogeans';

const skregInvade: Composition = {
  id: 'CAMPAIGN-ARTY-SKREGINVADE',
  name: 'Skreg Invade',
  tags: ['PvE'],
  author: 'Arty and Alpattex',
  updateDate: 'Feb 2021',
  links: [{
    label: 'Guide', 
    url: 'https://preview.redd.it/a40xisl8pvf61.png?width=2480&format=png&auto=webp&s=b52c1a6975363974b363ddceaf260552a02daad3',
  },
  {
    label: 'Update', 
    url: 'https://www.reddit.com/r/afkarena/comments/le0b0p/visual_guide_to_end_game_pve_formations_by_arty/gnua3c8/?context=3',
  }],
  coreHeroes: {
    role: Role.Core,
    heroes : [
      {
        ...Maulers.Skreg,
        recommended: true
      }
    ]
  },
  flexHeroes: [
    {
      role: Role.Damage,
      heroes : [
        {
          ...Maulers.Tidus,
          recommended: true
        },
        {
          ...Maulers.Satrana,
          recommended: true
        },
        {
          ...Maulers.Kren,
          recommended: true
        },
        {
          ...Maulers.Antandra
        },
        {
          ...Hypogeans.Zolrath
        },
        {
          ...Lightbearers.Thane
        },
        {
          ...Wilders.Saurus
        },
        {
          ...Celestials.Athalia
        },
        {
          ...Hypogeans.Lucretia
        },
        {
          ...Celestials.Flora
        },
        {
          ...Maulers.Drez
        }
      ]
    },
    {
      role: Role.CrowdControl,
      heroes : [
        {
          ...Lightbearers.Cecilia
        },
        {
          ...Wilders.Gorvo
        },
        {
          ...Celestials.Orthros
        },
        {
          ...Wilders.Tasi
        },
        {
          ...Wilders.Seirus
        },
        {
          ...Celestials.Zaphrael
        },
        {
          ...Wilders.Pippa
        }
      ]
    },
    {
      role: Role.Enabler,
      heroes : [
        {
          ...Maulers.Numisu,
          recommended: true
        },
        {
          ...Celestials.Alna
        },
        {
          ...Maulers.Anoki
        },
        {
          ...Maulers.Skriath
        },
        {
          ...Celestials.Talene
        }
      ]
    }
  ]
};

export default skregInvade;