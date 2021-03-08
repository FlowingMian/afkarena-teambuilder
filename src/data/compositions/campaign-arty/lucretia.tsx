import { Composition} from '../../../model/compositions';
import * as Role from '../../characteristics/role';
import * as Lightbearers from '../../heroes/lightbearers';
import * as Maulers from '../../heroes/maulers';
import * as Wilders from '../../heroes/wilders';
import * as Graveborns from '../../heroes/graveborns';
import * as Celestials from '../../heroes/celestials';
import * as Hypogeans from '../../heroes/hypogeans';

const lucretia: Composition = {
  id: 'CAMPAIGN-ARTY-LUCRETIA',
  name: 'Lucretia Cheese',
  tags: ['PvE'],
  author: 'Arty and Alpattex',
  updateDate: 'Feb 2021',
  links: [{
    label: 'Guide', 
    url: 'https://preview.redd.it/j4dtfgk1pvf61.png?width=2480&format=png&auto=webp&s=7714c6ed57f13a91509f6917af7aff31d644fa3a',
  }],
  coreHeroes: {
    role: Role.Core,
    heroes : [
      {
        ...Hypogeans.Lucretia,
        recommended: true
      }
    ]
  },
  flexHeroes: [
    {
      role: Role.Enabler,
      heroes : [
        {
          ...Maulers.Brutus,
          recommended: true
        },
        {
          ...Maulers.Skriath,
          recommended: true
        },
        {
          ...Wilders.Eironn,
          recommended: true
        },
        {
          ...Celestials.Alna
        },
        {
          ...Hypogeans.Mezoth
        },
        {
          ...Lightbearers.Hendrik
        },
        {
          ...Maulers.Skreg
        },
        {
          ...Maulers.Anoki
        },
                
      ]
    },
    {
      role: Role.Energy,
      heroes : [
        {
          ...Lightbearers.Rowan
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
    },
    {
      role: Role.SubDPS,
      heroes : [
        {
          ...Celestials.Talene
        },
        {
          ...Wilders.Lorsan
        },
        {
          ...Graveborns.Ferael
        },
        {
          ...Celestials.Athalia
        }
      ]
    },
    {
      role: Role.CrowdControl,
      heroes : [
        {
          ...Maulers.Safiya,
          recommended: true
        },
        {
          ...Graveborns.Nara
        },
        {
          ...Celestials.Zaphrael
        },
        {
          ...Wilders.Pippa
        },
        {
          ...Graveborns.Oden
        }
      ]
    }
  ]
};

export default lucretia;