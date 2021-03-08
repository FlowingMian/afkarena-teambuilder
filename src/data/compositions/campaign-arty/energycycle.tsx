import { Composition} from '../../../model/compositions';
import * as Role from '../../characteristics/role';
import * as Lightbearers from '../../heroes/lightbearers';
import * as Wilders from '../../heroes/wilders';
import * as Graveborns from '../../heroes/graveborns';
import * as Celestials from '../../heroes/celestials';
import * as Hypogeans from '../../heroes/hypogeans';
import * as Dimensionals from '../../heroes/dimensionals';

const energycycle: Composition = {
  id: 'CAMPAIGN-ARTY-ENERGYCYCLE',
  name: 'Energy Cycle',
  tags: ['PvE'],
  author: 'Arty and Alpattex',
  updateDate: 'Feb 2021',
  links: [{
    label: 'Guide', 
    url: 'https://preview.redd.it/6yl5v7cgpvf61.png?width=2480&format=png&auto=webp&s=e7fec64234605d3f0c338995ef112d97385d343e',
  }],
  coreHeroes: {
    role: Role.Core,
    heroes : [
      {
        ...Celestials.ElijahLailah,
        recommended: true
      },
      {
        ...Lightbearers.Rowan,
        recommended: true
      },
      {
        ...Hypogeans.Ezizh,
        recommended: true
      }
    ]
  },
  flexHeroes: [
    {
      role: Role.CrowdControl,
      heroes : [
        {
          ...Hypogeans.Mehira,
          recommended: true
        },
        {
          ...Wilders.Tasi
        },
        {
          ...Celestials.Alna
        },
        {
          ...Lightbearers.Fawkes
        },
        {
          ...Graveborns.Ferael
        },
        {
          ...Hypogeans.Khazard
        },
        {
          ...Hypogeans.Mezoth
        },
        {
          ...Graveborns.Oden
        }
      ]
    },
    {
      role: Role.SubDPS,
      heroes : [
        {
          ...Celestials.Athalia
        },
        {
          ...Hypogeans.Lucretia
        },
        {
          ...Hypogeans.Mortas
        },
        {
          ...Lightbearers.Rosaline
        },
        {
          ...Celestials.Wukong
        },
        {
          ...Dimensionals.Ezio
        },
        {
          ...Dimensionals.Ainz
        },
        {
          ...Dimensionals.Albedo
        },
        {
          ...Graveborns.Daimon
        }
      ]
    },
    {
      role: Role.Sustain,
      heroes : [
        {
          ...Celestials.Talene,
          recommended: true
        },
        {
          ...Graveborns.Silas
        },
        {
          ...Wilders.Saurus
        }
      ]
    }
  ]
};

export default energycycle;