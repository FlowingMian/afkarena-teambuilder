import { Artifact } from './characteristics/characteristics';
import { Link } from './common';
import { Hero } from './heroes';

export interface ArtifactGuide {
  id: string;
  name: string;
  author: string,
  updateDate?: string;
  links: Array<Link>;
  artifacts : Map<Hero, ArtifactGuideHero>;
}

export interface ArtifactGuideHero {
  rank1: Array<Artifact>;
  rank2: Array<Artifact>;
  rank3: Array<Artifact>;
}