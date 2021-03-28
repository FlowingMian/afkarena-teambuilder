import { Hero } from '../../model/heroes';
import { Profile } from '../../model/profile';
import { Owned, NotOwned } from '../../model/characteristics/collectionStatuses';

export interface HeroFilters {
  factionIds:Array<string>;
  classIds:Array<string>;
  attributeIds:Array<string>;
  collectionStatuses:Array<string>;
}

export function acceptHero(heroFilters:HeroFilters, profile:Profile, hero:Hero):boolean {
  const collectionStatus = profile.heroCollection.includes(hero.id) ? Owned : NotOwned;
  return heroFilters.factionIds.includes(hero.faction.id)
        && heroFilters.classIds.includes(hero.class.id)
        && heroFilters.attributeIds.includes(hero.attribute.id)
        && heroFilters.collectionStatuses.includes(collectionStatus.id)
  ;
}