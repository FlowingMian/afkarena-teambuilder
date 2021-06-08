import { Faction } from './characteristics/characteristics';
import { Link } from './common';
import { Hero } from './heroes';

export interface WishlistGuide {
  id: string;
  name: string;
  author: string,
  updateDate?: string;
  links: Array<Link>;
  wishlist : Map<Faction, Array<Array<Hero>>>;
}