import { Hero } from '../../model/heroes';
import { Profile } from '../../model/profile';
import { Owned, NotOwned, CollectionStatuses } from '../../model/characteristics/collectionStatuses';
import { Factions } from '../../model/characteristics/factions';
import { Classes } from '../../model/characteristics/classes';
import { Attributes } from '../../model/characteristics/attributes';
import { Signatures } from '../../model/characteristics/signatures';
import { Furnitures } from '../../model/characteristics/furnitures';
import { Artifacts } from '../../model/characteristics/artifacts';

export interface HeroFilters {
  factionIds:Array<string>;
  classIds:Array<string>;
  attributeIds:Array<string>;
  collectionStatuses:Array<string>;
  signatures:Array<string>;
  furnitures:Array<string>;
  artifacts:Array<string>;
}

export const defaultFilter:HeroFilters = {
  factionIds: Factions.map(c => c.id),
  classIds: Classes.map(c => c.id),
  attributeIds: Attributes.map(c => c.id),
  collectionStatuses: CollectionStatuses.map(c => c.id),
  signatures: Signatures.map(c => c.id),
  furnitures: Furnitures.map(c => c.id),
  artifacts: Artifacts.map(c => c.id),
};

export function acceptHero(heroFilters:HeroFilters, profile:Profile, hero:Hero):boolean {
  const collectionStatus = profile.heroCollection.includes(hero.id) ? Owned : NotOwned;
  return heroFilters.factionIds.includes(hero.faction.id)
        && heroFilters.classIds.includes(hero.class.id)
        && heroFilters.attributeIds.includes(hero.attribute.id)
        && heroFilters.collectionStatuses.includes(collectionStatus.id)
        && heroFilters.signatures.includes(hero.signature.id)
        && heroFilters.furnitures.includes(hero.furniture.id)
        && heroFilters.artifacts.some(artifactId => hero.artifacts.map(a => a.id).includes(artifactId))
  ;
}