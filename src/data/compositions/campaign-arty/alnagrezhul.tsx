import { Composition} from '../../../model/compositions';
import * as Role from '../../../model/characteristics/roles';
import * as Lightbearers from '../../heroes/lightbearers';
import * as Maulers from '../../heroes/maulers';
import * as Wilders from '../../heroes/wilders';
import * as Graveborns from '../../heroes/graveborns';
import * as Celestials from '../../heroes/celestials';
import * as Hypogeans from '../../heroes/hypogeans';
import * as Dimensionals from '../../heroes/dimensionals';

const alnagrezhul: Composition = {
  id: 'CAMPAIGN-ARTY-ALNA-GREZHUL',
  name: 'Alna Grezhul',
  tags: ['PvE'],
  author: 'Arty and Alpattex',
  updateDate: 'Apr 2021',
  links: [{
    label: 'Guide', 
    url: 'https://i.redd.it/a0a83h2qhrs61.png',
  }],
  coreHeroes: {
    role: Role.Core,
    heroes : [
      {
        ...Celestials.Alna,
        recommended: true
      },
      {
        ...Graveborns.Grezhul,
        recommended: true
      }
    ]
  },
  flexHeroes: [
    {
      role: Role.SubDPS,
      heroes : [
        {
          ...Graveborns.Daimon,
          recommended: true
        },
        {
          ...Wilders.Raku,
        },
        {
          ...Graveborns.Isabella,
        },
        {
          ...Celestials.Athalia,
        },
        {
          ...Dimensionals.Ainz,
        },
        {
          ...Graveborns.Theowyn,
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
          ...Dimensionals.Nakoruru,
        },
        {
          ...Celestials.Zaphrael,
        },
        {
          ...Wilders.Respen,
        },
        {
          ...Wilders.Pippa,
        },
        {
          ...Celestials.Orthros,
        },
        {
          ...Graveborns.Oden,
        },
        {
          ...Graveborns.Nara,
        },
        {
          ...Hypogeans.Mehira,
        },
        {
          ...Wilders.Gorvo,
        },
        {
          ...Hypogeans.Ezizh,
        },
        {
          ...Graveborns.Ferael,
        },
        {
          ...Hypogeans.Khazard,
        },
        {
          ...Hypogeans.Mezoth,
        },
      ]
    },
    {
      role: Role.Utility,
      heroes : [
        {
          ...Graveborns.Silas,
          recommended: true
        },
        {
          ...Maulers.Numisu,
        },
        {
          ...Lightbearers.Raine,
        },
        {
          ...Lightbearers.Rowan,
        },
        {
          ...Celestials.Talene,
        },
        {
          ...Graveborns.Thoran,
        },
        {
          ...Celestials.ElijahLailah
        },
        {
          ...Wilders.Lyca
        },
        {
          ...Hypogeans.Mortas
        }
      ]
    }
  ]
};

export default alnagrezhul;