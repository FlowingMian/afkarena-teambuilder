import { Composition} from '../../../model/compositions';
import * as Role from '../../characteristics/roles';
import * as Lightbearers from '../../heroes/lightbearers';
import * as Maulers from '../../heroes/maulers';
import * as Wilders from '../../heroes/wilders';
import * as Graveborns from '../../heroes/graveborns';
import * as Celestials from '../../heroes/celestials';
import * as Hypogeans from '../../heroes/hypogeans';
import * as Dimensionals from '../../heroes/dimensionals';

const daimon: Composition = {
  id: 'CAMPAIGN-ARTY-DAIMON',
  name: 'Daimon',
  tags: ['PvE'],
  author: 'Arty and Alpattex',
  updateDate: 'Feb 2021',
  links: [{
    label: 'Guide', 
    url: 'https://preview.redd.it/rxppdwdwpvf61.png?width=2480&format=png&auto=webp&s=5a5c8a18b9e7f0416faa6c89cc2fa5a07e3d3aaf',
  }],
  coreHeroes: {
    role: Role.Core,
    heroes : [
      {
        ...Graveborns.Daimon,
        recommended: true,
        requiredSignature: 20,
        requiredFurniture: 3
      }
    ]
  },
  flexHeroes: [
    {
      role: Role.Tankiness,
      heroes : [
        {
          ...Celestials.Alna,
          recommended: true
        },
        {
          ...Graveborns.Thoran
        },
        {
          ...Hypogeans.Mezoth
        },
        {
          ...Lightbearers.Hendrik
        },
        {
          ...Celestials.Wukong
        },
        {
          ...Dimensionals.Arthur
        },
        {
          ...Maulers.Brutus
        }
      ]
    },
    {
      role: Role.CrowdControl,
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
          ...Celestials.Zaphrael
        },
        {
          ...Celestials.Orthos
        },
        {
          ...Wilders.Eironn
        },
        {
          ...Hypogeans.Ezizh
        },
        {
          ...Wilders.Gorvo
        },
        {
          ...Hypogeans.Khazard
        },
        {
          ...Hypogeans.Mehira
        },
        {
          ...Dimensionals.Nakoruru
        },
        {
          ...Graveborns.Nara
        },
        {
          ...Wilders.Nemora
        }
      ]
    },
    {
      role: Role.Utility,
      heroes : [
        {
          ...Celestials.Talene
        },
        {
          ...Celestials.ElijahLailah
        },
        {
          ...Hypogeans.Zolrath
        },
        {
          ...Dimensionals.Ezio
        },
        {
          ...Wilders.Lorsan
        } ,
        {
          ...Graveborns.Oden
        },
        {
          ...Graveborns.Silas
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
          ...Wilders.Lyca
        },
        {
          ...Lightbearers.Raine
        }
      ]
    }
  ]
};

export default daimon;