import { Composition} from '../../../model/compositions';
import * as Role from '../../../model/characteristics/roles';
import * as Lightbearers from '../../heroes/lightbearers';
import * as Maulers from '../../heroes/maulers';
import * as Wilders from '../../heroes/wilders';
import * as Graveborns from '../../heroes/graveborns';
import * as Celestials from '../../heroes/celestials';
import * as Hypogeans from '../../heroes/hypogeans';
import * as Dimensionals from '../../heroes/dimensionals';

const composition: Composition = {
  id: 'XAPYSLENDERMAN-AINZ',
  name: 'Ainz',
  tags: ['PvE'],
  author: 'XapySlenderman',
  updateDate: 'May 2021',
  links: [{
    label: 'Comprehensive Review of Chapter 41 by CASUALS and XapySlenderman', 
    url: 'https://www.reddit.com/r/afkarena/comments/nn09tm/comprehensive_review_of_chapter_41_by_casuals_and/',
  }],
  coreHeroes: {
    role: Role.Core,
    heroes : [
      {
        ...Dimensionals.Ainz,
        recommended: true
      },
    ]
  },
  flexHeroes: [
    {
      role: Role.Tankiness,
      heroes : [
        {
          ...Dimensionals.Albedo,
          recommended: true
        },
        {
          ...Dimensionals.Arthur,
        },
        {
          ...Maulers.Brutus,
        },
        {
          ...Hypogeans.Mezoth,
        },
        {
          ...Celestials.Alna
        },
      ] 
    },
    {
      role: Role.Sustain,
      heroes : [
        {
          ...Lightbearers.Rowan
        },
        {
          ...Celestials.Talene
        },
        {
          ...Graveborns.Silas
        },
        {
          ...Graveborns.Desira
        },
        {
          ...Maulers.Numisu
        },
      ]
    },
    {
      role: Role.CrowdControl,
      heroes : [
        {
          ...Wilders.Tasi
        },
        {
          ...Hypogeans.Mehira
        },
        {
          ...Graveborns.Ferael
        },
        {
          ...Wilders.Pippa
        },
        {
          ...Graveborns.Oden
        },
        {
          ...Celestials.Athalia
        },
        {
          ...Graveborns.Nara
        },
        {
          ...Hypogeans.Khazard
        },
        {
          ...Dimensionals.Nakoruru
        },
        {
          ...Dimensionals.Ukyo
        },
        {
          ...Dimensionals.JOKER
        },
        {
          ...Hypogeans.Leofric
        },
        {
          ...Dimensionals.PrinceOfPersia
        },
      ]
    },
    {
      role: Role.Enabler,
      heroes : [
        {
          ...Hypogeans.Mortas
        },
        {
          ...Lightbearers.Raine
        },
        {
          ...Wilders.Lorsan
        },
        {
          ...Celestials.Zaphrael
        },
        {
          ...Wilders.Lyca
        },
        {
          ...Dimensionals.Ezio
        },
      ]
    },
  ]
};

export default composition;