
import { Composition } from '../../model/compositions';
import bosses from './bosses';
import campaignArty from './campaign-arty';
import pvpArty from './pvp-arty';

const compositions: Array<Composition> = [
  bosses,
  ...campaignArty,
  ...pvpArty
];
export default compositions;