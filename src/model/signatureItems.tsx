import { Rating } from './characteristics/characteristics';
import { Link } from './common';
import { Hero } from './heroes';

export interface SignatureItemsGuide {
  id: string;
  name: string;
  author: string,
  updateDate?: string;
  links: Array<Link>;
  signatureItems : Map<Hero, SignatureItemsGuideHero>;
}

export interface SignatureItemsGuideHero {
  _10: Rating;
  _20: Rating;
  _30: Rating;
}