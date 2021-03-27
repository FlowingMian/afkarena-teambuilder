import { Composition} from '../../../model/compositions';
import * as Role from '../../../model/characteristics/roles';
import * as Lightbearers from '../../heroes/lightbearers';
import * as Maulers from '../../heroes/maulers';
import * as Wilders from '../../heroes/wilders';
import * as Graveborns from '../../heroes/graveborns';
import * as Celestials from '../../heroes/celestials';
import * as Hypogeans from '../../heroes/hypogeans';
import * as Dimensionals from '../../heroes/dimensionals';

const izold: Composition = {
  id: 'CAMPAIGN-ARTY-IZOLD',
  name: 'Izold Cheese',
  tags: ['PvE'],
  author: 'Arty and Alpattex',
  updateDate: 'Feb 2021',
  links: [{
    label: 'Guide', 
    url: 'https://preview.redd.it/b2mwfsnjpvf61.png?width=2480&format=png&auto=webp&s=81b8b688fea318a708c25a21e2db72537fcac540',
  }],
  coreHeroes: {
    role: Role.Core,
    heroes : [
      {
        ...Graveborns.Izold,
        recommended: true
      }
    ]
  },
  flexHeroes: [
    {
      role: Role.CrowdControl,
      heroes : [
        {
          ...Graveborns.Ferael,
          recommended: true
        },
        {
          ...Lightbearers.Fawkes
        },
        {
          ...Dimensionals.Nakoruru
        },
        {
          ...Graveborns.Nara
        },
        {
          ...Wilders.Nemora
        },
        {
          ...Wilders.Tasi
        },
        {
          ...Celestials.Athalia
        },
        {
          ...Celestials.Zaphrael
        },
        {
          ...Graveborns.Oden
        }
      ]
    },
    {
      role: Role.Enabler,
      heroes : [
        {
          ...Graveborns.Silas,
          recommended: true
        },
        {
          ...Lightbearers.Hendrik,
          recommended: true
        },
        {
          ...Celestials.Alna
        },
        {
          ...Graveborns.Thoran
        },
        {
          ...Maulers.Skreg
        },
        {
          ...Wilders.Pippa
        },
        {
          ...Hypogeans.Mezoth
        },
        {
          ...Wilders.Gorvo
        },
        {
          ...Maulers.Brutus
        },
        {
          ...Graveborns.Grezhul
        }
      ]

    },
    {
      role: Role.Energy,
      heroes : [
        {
          ...Lightbearers.Rowan,
          recommended: true
        },
        {
          ...Hypogeans.Mortas
        },
        {
          ...Hypogeans.Ezizh
        },
        {
          ...Wilders.Lyca
        },
        {
          ...Lightbearers.Raine
        }
      ]
    }
  ]
};

export default izold;