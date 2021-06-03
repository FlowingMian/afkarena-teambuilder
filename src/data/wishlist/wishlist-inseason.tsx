import { WishlistGuide } from '../../model/wishlist';
import * as Lightbearers from '../heroes/lightbearers';
import * as Maulers from '../heroes/maulers';
import * as Wilders from '../heroes/wilders';
import * as Graveborns from '../heroes/graveborns';
import { Graveborn, Lightbearer, Mauler, Wilder } from '../../model/characteristics/factions';

const wishlistGuide: WishlistGuide = {
  id: 'INSEASON',
  name: 'Wishlist 1.61',
  author: 'InSeasOn',
  updateDate: 'May 2021',
  links: [{
    label: 'InSeasOn\'s Wishlist 1.61',
    url: 'https://www.afk-analytica.com/wishlists',
  }], 
  wishlist : new Map([
    [Lightbearer, [
      [Lightbearers.Rowan],  
      [Lightbearers.Rosaline],  
      [Lightbearers.Gwyneth],   
      [Lightbearers.Hendrik], 
      [Lightbearers.Raine], 
      [Lightbearers.Estrilda],  
      [Lightbearers.Fawkes],  
      [Lightbearers.Cecilia],
      [Lightbearers.Peggy],  
      [Lightbearers.Eluard],   
    ]],
    [Mauler, [
      [Maulers.Tidus],       
      [Maulers.Kren],           
      [Maulers.Skreg],          
      [Maulers.Skriath],      
      [Maulers.Numisu],     
      [Maulers.Safiya],         
      [Maulers.Brutus],       
      [Maulers.Antandra],
      [Maulers.Drez],          
      [Maulers.Anoki],
    ]],
    [Wilder, [
      [Wilders.Eironn],      
      [Wilders.Raku],           
      [Wilders.Tasi],         
      [Wilders.Lyca],           
      [Wilders.Saurus],     
      [Wilders.Pippa],          
      [Wilders.Respen],       
      [Wilders.Gorvo],
      [Wilders.Nemora],           
      [Wilders.Lorsan],         
    ]],
    [Graveborn, [
      [Graveborns.Daimon],   
      [Graveborns.Silas],      
      [Graveborns.Ferael],      
      [Graveborns.Izold],     
      [Graveborns.Thoran],  
      [Graveborns.Oden],        
      [Graveborns.Grezhul],   
      [Graveborns.Nara],
      [Graveborns.Kelthur],  
      [Graveborns.Isabella],      
    ]],
  ]),
};
export default wishlistGuide;