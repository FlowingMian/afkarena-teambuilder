import { Composition} from '../../../model/compositions';
import * as Role from '../../../model/characteristics/roles';
import * as Lightbearers from '../../heroes/lightbearers';
import * as Maulers from '../../heroes/maulers';
import * as Wilders from '../../heroes/wilders';
import * as Graveborns from '../../heroes/graveborns';
import * as Celestials from '../../heroes/celestials';
import * as Hypogeans from '../../heroes/hypogeans';
import * as Dimensionals from '../../heroes/dimensionals';

const gwyneth: Composition = {
  id: 'CAMPAIGN-ARTY-GWYNETH',
  name: 'Gwyneth',
  tags: ['PvE'],
  author: 'Arty and Alpattex',
  updateDate: 'Feb 2021',
  links: [{
    label: 'Guide', 
    url: 'https://preview.redd.it/ebk7twc5pvf61.png?width=2480&format=png&auto=webp&s=22b7c89af7774ca96de906580e999d99baf380cf',
  },
  {
    label: 'Update', 
    url: 'https://www.reddit.com/r/afkarena/comments/le0b0p/visual_guide_to_end_game_pve_formations_by_arty/gnua3c8/?context=3',
  }],
  coreHeroes: {
    role: Role.Core,
    heroes : [
      {
        ...Lightbearers.Gwyneth,
        recommended: true
      },
      {
        ...Dimensionals.Arthur,
        recommended: true
      }
    ]
  },
  flexHeroes: [
    {
      role: Role.Buffer,
      heroes : [
        {
          ...Lightbearers.Rosaline,
          recommended: true
        },
        {
          ...Hypogeans.Zolrath
        },
        {
          ...Wilders.Lorsan
        },
        {
          ...Maulers.Numisu
        },
        {
          ...Hypogeans.Mortas
        },
        {
          ...Wilders.Lyca
        },
        {
          ...Lightbearers.Belinda
        },
        {
          ...Lightbearers.Raine
        }
      ]
    },
    {
      role: Role.Protection,
      heroes : [
        {
          ...Celestials.Alna,
          recommended: true
        },
        {
          ...Lightbearers.Hendrik
        },
        {
          ...Maulers.Brutus
        },
        {
          ...Lightbearers.Rowan
        },
      ]
    },
    {
      role: Role.SubDPS,
      heroes : [
        {
          ...Graveborns.Ferael,
          recommended: true
        },
        {
          ...Lightbearers.Cecilia
        },
        {
          ...Dimensionals.JOKER
        },
        {
          ...Maulers.Kren
        }
      ]

    },
    {
      role: Role.CrowdControl,
      heroes : [
        {
          ...Lightbearers.Estrilda
        },
        {
          ...Celestials.Zaphrael
        },
        {
          ...Dimensionals.Ukyo
        },
        {
          ...Hypogeans.Khazard
        },
        {
          ...Maulers.Tidus
        },
        {
          ...Wilders.Tasi
        },
        {
          ...Dimensionals.Nakoruru
        },
      ]
    }
  ]
};

export default gwyneth;