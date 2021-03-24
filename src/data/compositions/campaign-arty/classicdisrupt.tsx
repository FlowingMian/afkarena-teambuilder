import { Composition} from '../../../model/compositions';
import * as Role from '../../characteristics/roles';
import * as Lightbearers from '../../heroes/lightbearers';
import * as Wilders from '../../heroes/wilders';
import * as Graveborns from '../../heroes/graveborns';
import * as Celestials from '../../heroes/celestials';
import * as Hypogeans from '../../heroes/hypogeans';
import * as Dimensionals from '../../heroes/dimensionals';

const classicDisrupt: Composition = {
  id: 'CAMPAIGN-ARTY-CLASSICDISRUPT',
  name: 'Classic Disrupt',
  tags: ['PvE'],
  author: 'Arty and Alpattex',
  updateDate: 'Feb 2021',
  links: [{
    label: 'Guide', 
    url: 'https://preview.redd.it/2zry5krcpvf61.png?width=2480&format=png&auto=webp&s=8ed960ef8b38604202f3b6fadefb66b674cc7927',
  }],
  coreHeroes: {
    role: Role.Core,
    heroes : [
      {
        ...Graveborns.Ferael,
        recommended: true
      }
    ]
  },
  flexHeroes: [
    {
      role: Role.CrowdControl,
      heroes : [
        {
          ...Hypogeans.Mezoth,
          recommended: true
        },
        {
          ...Celestials.Orthos,
          recommended: true
        },
        {
          ...Wilders.Tasi,
          recommended: true
        },
        {
          ...Wilders.Gorvo
        },
        {
          ...Hypogeans.Khazard
        },
        {
          ...Dimensionals.Nakoruru
        },
        {
          ...Graveborns.Nara
        },
        {
          ...Graveborns.Oden
        },
      ]
    },
    {
      role: Role.SubDPS,
      heroes : [
        {
          ...Celestials.Zaphrael,
          recommended: true
        },
        {
          ...Graveborns.Thoran
        },
        {
          ...Celestials.Wukong
        },
        {
          ...Celestials.Flora
        },
        {
          ...Hypogeans.Zolrath
        },
        {
          ...Graveborns.Daimon
        }
      ]
    },
    {
      role: Role.Enabler,
      heroes : [
        {
          ...Celestials.Alna
        },
        {
          ...Lightbearers.Rowan
        },
        {
          ...Celestials.Talene
        },
        {
          ...Graveborns.Silas
        }
      ]
    }
  ]
};

export default classicDisrupt;