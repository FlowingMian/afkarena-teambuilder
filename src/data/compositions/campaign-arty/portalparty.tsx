import { Composition} from '../../../model/compositions';
import * as Role from '../../characteristics/roles';
import * as Lightbearers from '../../heroes/lightbearers';
import * as Maulers from '../../heroes/maulers';
import * as Wilders from '../../heroes/wilders';
import * as Graveborns from '../../heroes/graveborns';
import * as Celestials from '../../heroes/celestials';
import * as Hypogeans from '../../heroes/hypogeans';
import * as Dimensionals from '../../heroes/dimensionals';

const portalParty: Composition = {
  id: 'CAMPAIGN-ARTY-PORTALPARTY',
  name: 'Portal Party',
  tags: ['PvE'],
  author: 'Arty and Alpattex',
  updateDate: 'Feb 2021',
  links: [{
    label: 'Guide', 
    url: 'https://preview.redd.it/ztq7tqk8qvf61.png?width=2480&format=png&auto=webp&s=98197ae512438746fd0c035cbd7d3929af0545e5',
  }],
  coreHeroes: {
    role: Role.Core,
    heroes : [
      {
        ...Wilders.Pippa,
        recommended: true,
        requiredSignature: 20,
        requiredFurniture: 3
      },
      {
        ...Graveborns.Oden,
        recommended: true,
        requiredSignature: 20,
        requiredFurniture: 3
      }
    ]
  },
  flexHeroes: [
    {
      role: Role.SubDPS,
      heroes : [
        {
          ...Graveborns.Ferael
        },
        {
          ...Graveborns.Izold
        },
        {
          ...Dimensionals.JOKER
        },
        {
          ...Hypogeans.Lucretia
        },
        {
          ...Maulers.Satrana
        },
        {
          ...Wilders.Saurus
        },
        {
          ...Graveborns.Torne
        },
        {
          ...Celestials.Wukong,
        },
        {
          ...Hypogeans.Zolrath
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
          ...Wilders.Gorvo,
          recommended: true
        },
        {
          ...Wilders.Nemora,
          recommended: true
        },
        {
          ...Wilders.Tasi,
          recommended: true
        },
        {
          ...Celestials.Zaphrael
        },
        {
          ...Hypogeans.Ezizh
        },
        {
          ...Dimensionals.Nakoruru
        },
        {
          ...Celestials.Orthos
        },
      ]

    },
    {
      role: Role.Utility,
      heroes : [
        {
          ...Celestials.Talene
        },
        {
          ...Lightbearers.Rowan
        } ,
        {
          ...Graveborns.Thoran
        },
        {
          ...Celestials.Alna
        },
        {
          ...Maulers.Anoki
        },
        {
          ...Celestials.Athalia
        } ,
        {
          ...Lightbearers.Cecilia
        },
        {
          ...Maulers.Skreg
        },
        {
          ...Graveborns.Theowyn
        }
      ]
    }
  ]
};

export default portalParty;