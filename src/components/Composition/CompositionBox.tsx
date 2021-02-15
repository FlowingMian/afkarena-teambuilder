import { Tag } from "@chakra-ui/react";
import { Composition } from "../../model/compositions";
import HeroCategory from "../Hero/HeroCategory";

type CompositionBoxProps = {
  composition: Composition;
};

function CompositionBox({ composition }: CompositionBoxProps) {
  const tags = undefined //composition.tags.map(t => <Tag key={t} size="sm">{t}</Tag>);
  return (
    <HeroCategory name={composition.name} tags={tags} charactericticsDistribution={false} heroes={composition.coreHeroes.heroes.map(hr => hr.hero)} />
  );
}

export default CompositionBox;
