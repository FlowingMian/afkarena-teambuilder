import { Hero } from '../../model/heroes';
import { Profile } from '../../model/profile';
import { Owned, NotOwned } from '../../model/characteristics/collectionStatuses';

export interface HeroFilters {
  factionIds:Array<string>;
  classIds:Array<string>;
  attributeIds:Array<string>;
  collectionStatuses:Array<string>;
  signatures:Array<string>;
  furniture3Ratings:Array<string>;
  furniture9Ratings:Array<string>;
}

export function acceptHero(heroFilters:HeroFilters, profile:Profile, hero:Hero):boolean {
  const collectionStatus = profile.heroCollection.includes(hero.id) ? Owned : NotOwned;
  return heroFilters.factionIds.includes(hero.faction.id)
        && heroFilters.classIds.includes(hero.class.id)
        && heroFilters.attributeIds.includes(hero.attribute.id)
        && heroFilters.collectionStatuses.includes(collectionStatus.id)
        && heroFilters.signatures.includes(hero.signature.id)
        && heroFilters.furniture3Ratings.includes(hero.furniture.F3.id)
        && heroFilters.furniture9Ratings.includes(hero.furniture.F9.id)
  ;
}