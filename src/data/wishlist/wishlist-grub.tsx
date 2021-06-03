import { WishlistGuide } from '../../model/wishlist';
import * as Lightbearers from '../heroes/lightbearers';
import * as Maulers from '../heroes/maulers';
import * as Wilders from '../heroes/wilders';
import * as Graveborns from '../heroes/graveborns';
import { Graveborn, Lightbearer, Mauler, Wilder } from '../../model/characteristics/factions';

const wishlistGuide: WishlistGuide = {
  id: 'GRUB',
  name: 'Wishlist 1.61',
  author: 'Grub',
  updateDate: 'May 2021',
  links: [{
    label: 'Grub\'s Wishlist 1.61',
    url: 'https://www.afk-analytica.com/wishlists',
  }], 
  wishlist : new Map([
    [Lightbearer, [
      [Lightbearers.Rowan],  
      [Lightbearers.Raine], 
      [Lightbearers.Hendrik], 
      [Lightbearers.Gwyneth],   
      [Lightbearers.Estrilda],  
      [Lightbearers.Rosaline],  
      [Lightbearers.Cecilia],
      [Lightbearers.Fawkes],  
      [Lightbearers.Eluard],   
      [Lightbearers.Peggy],  
    ]],
    [Mauler, [
      [Maulers.Skriath],      
      [Maulers.Tidus],       
      [Maulers.Kren],           
      [Maulers.Numisu],     
      [Maulers.Skreg],          
      [Maulers.Brutus],       
      [Maulers.Safiya],         
      [Maulers.Antandra],
      [Maulers.Anoki],
      [Maulers.Drez],          
    ]],
    [Wilder, [
      [Wilders.Eironn],      
      [Wilders.Raku],           
      [Wilders.Lyca],           
      [Wilders.Tasi],         
      [Wilders.Pippa],          
      [Wilders.Nemora],           
      [Wilders.Saurus],     
      [Wilders.Gorvo],
      [Wilders.Respen],       
      [Wilders.Lorsan],         
    ]],
    [Graveborn, [
      [Graveborns.Thoran],  
      [Graveborns.Daimon],   
      [Graveborns.Silas],      
      [Graveborns.Oden],        
      [Graveborns.Ferael],      
      [Graveborns.Grezhul],   
      [Graveborns.Izold],     
      [Graveborns.Isabella],      
      [Graveborns.Kelthur],  
      [Graveborns.Nara],
    ]],
  ]),
};
export default wishlistGuide;