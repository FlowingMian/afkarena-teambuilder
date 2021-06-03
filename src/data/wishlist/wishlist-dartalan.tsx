import { WishlistGuide } from '../../model/wishlist';
import * as Lightbearers from '../heroes/lightbearers';
import * as Maulers from '../heroes/maulers';
import * as Wilders from '../heroes/wilders';
import * as Graveborns from '../heroes/graveborns';
import { Graveborn, Lightbearer, Mauler, Wilder } from '../../model/characteristics/factions';

const wishlistGuide: WishlistGuide = {
  id: 'DARTALAN',
  name: 'Build Order & Meta',
  author: 'Dartalan',
  updateDate: 'May 2021',
  links: [{
    label: 'Dartalan Build Order & Meta',
    url: 'https://www.reddit.com/r/afkarena/comments/n1ht8d/dartalans_updated_build_order_meta_commentary/',
  }], 
  wishlist : new Map([
    [Lightbearer, [
      [Lightbearers.Rowan],  
      [Lightbearers.Eluard],  
      [Lightbearers.Rosaline],  
      [Lightbearers.Raine], 
      [Lightbearers.Hendrik], 
      [Lightbearers.Cecilia], 
      [Lightbearers.Gwyneth],
      [Lightbearers.Estrilda],
    ]],
    [Mauler, [
      [Maulers.Tidus],
      [Maulers.Skriath],
      [Maulers.Kren],
      [Maulers.Skreg],
      [Maulers.Numisu],
      [Maulers.Brutus],
      [Maulers.Anoki],
      [Maulers.Satrana],
      [Maulers.Antandra],
    ]],
    [Wilder, [
      [Wilders.Lyca],
      [Wilders.Tasi],
      [Wilders.Eironn],
      [Wilders.Pippa],
      [Wilders.Raku],
      [Wilders.Saurus],
      [Wilders.Gorvo],
      [Wilders.Nemora],
    ]],
    [Graveborn, [
      [Graveborns.Daimon],
      [Graveborns.Ferael],
      [Graveborns.Thoran],
      [Graveborns.Oden],
      [Graveborns.Izold],
      [Graveborns.Grezhul],
      [Graveborns.Silas],
    ]],
  ]),
};
export default wishlistGuide;