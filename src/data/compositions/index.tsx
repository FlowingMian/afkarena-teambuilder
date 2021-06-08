
import { Composition } from '../../model/compositions';
import bosses from './bosses';
import pettingzoo from './greedtolead-pettingzoo';
import portalparty from './obsidianqqtt-portalparty';
import campaignArty from './campaign-arty';
import slumber from './immrblueboy-slumber';
import pvpArty from './pvp-arty';
import yomanitos from './yomanitos';
import xapyslenderman from './xapyslenderman';

const compositions: Array<Composition> = [
  bosses,
  ...xapyslenderman,
  ...yomanitos,
  pettingzoo,
  portalparty,
  slumber,
  ...campaignArty,
  ...pvpArty
];
export default compositions;