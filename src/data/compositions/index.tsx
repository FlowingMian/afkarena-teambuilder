
import { Composition } from '../../model/compositions';
import campaignArty from './campaign-arty';
import pvpArty from './pvp-arty';

const compositions: Array<Composition> = [
    ...campaignArty,
    ...pvpArty
]
export default compositions;