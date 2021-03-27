import { Composition} from '../../../model/compositions';
import * as Role from '../../../model/characteristics/roles';
import * as Lightbearers from '../../heroes/lightbearers';
import * as Wilders from '../../heroes/wilders';
import * as Graveborns from '../../heroes/graveborns';
import * as Celestials from '../../heroes/celestials';
import * as Hypogeans from '../../heroes/hypogeans';
import * as Dimensionals from '../../heroes/dimensionals';

const khazardWilders: Composition = {
  id: 'CAMPAIGN-ARTY-KHAZARDWILDERS',
  name: 'Khazard Wilders',
  tags: ['PvE'],
  author: 'Arty and Alpattex',
  updateDate: 'Feb 2021',
  links: [{
    label: 'Guide', 
    url: 'https://preview.redd.it/brbwlsd0qvf61.png?width=2480&format=png&auto=webp&s=1839ebc0fb9ba15aa071a70976d5c206146f7308',
  }],
  coreHeroes: {
    role: Role.Core,
    heroes : [
      {
        ...Hypogeans.Khazard,
        recommended: true
      },
    ]
  },
  flexHeroes: [
    {
      role: Role.SubDPS,
      heroes : [
        {
          ...Wilders.Saurus,
          recommended: true
        },
        {
          ...Celestials.Wukong
        },
        {
          ...Wilders.Solise
        },
        {
          ...Hypogeans.Zolrath
        },
        {
          ...Wilders.Eironn
        },
        {
          ...Graveborns.Ferael
        },
        {
          ...Celestials.Flora
        },
        {
          ...Dimensionals.JOKER,
        },
        {
          ...Wilders.Kaz
        },
        {
          ...Wilders.Lyca
        },
        {
          ...Graveborns.Oden
        },
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
          ...Hypogeans.Mehira,
          recommended: true
        },
        {
          ...Wilders.Pippa,
          recommended: true
        },
        {
          ...Wilders.Gorvo,
          recommended: true
        },
        {
          ...Celestials.Athalia
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
          ...Celestials.Orthos
        }
      ]

    },
    {
      role: Role.Utility,
      heroes : [
        {
          ...Celestials.ElijahLailah
        },
        {
          ...Celestials.Alna
        },
        {
          ...Hypogeans.Ezizh
        },
        {
          ...Hypogeans.Mezoth
        },
        {
          ...Lightbearers.Rowan
        },
        {
          ...Graveborns.Silas
        },
        {
          ...Celestials.Talene
        }
      ]
    }
  ]
};

export default khazardWilders;