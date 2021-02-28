import { Tag } from "@chakra-ui/react";
import { Composition } from "../../model/compositions";
import HeroCategory from "../Hero/HeroCategory";
import CompositionModal from "./CompositionModal";

type CompositionBoxProps = {
  composition: Composition;
};

function CompositionBox({ composition }: CompositionBoxProps) {
  const tags = composition.tags.map(t => <Tag key={t} size="sm">{t}</Tag>);
  const adornment = <CompositionModal composition={composition} />
  return (
    <HeroCategory name={composition.name} adornment={adornment} tags={tags} heroes={composition.coreHeroes.heroes} />
  );
}

export default CompositionBox;
