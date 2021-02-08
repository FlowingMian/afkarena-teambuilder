
import { Box, Wrap, WrapItem, Heading } from "@chakra-ui/react";
import { Composition } from "../../model/compositions";
import HeroCategory from "../Hero/HeroCategory";
import { BoxCardProps} from '../style'

type CompositionDetailsProps = {
  composition: Composition;
};

function CompositionDetails({ composition }: CompositionDetailsProps) {
  const coreHeroBoxes = (<WrapItem>
    <HeroCategory name={composition.coreHeroes.role.name} heroes={composition.coreHeroes.heroes.map(hr => hr.hero)} />
  </WrapItem>);
  const flexHeroBoxes = composition.flexHeroes.map(cc => <WrapItem>
    <HeroCategory name={cc.role.name} heroes={cc.heroes.map(hr => hr.hero)} /></WrapItem>
  );

  return (
    <Box {...BoxCardProps}>
      <Heading size="lg">{composition.name}</Heading>
      <Wrap direction="column">
        {coreHeroBoxes}
        {flexHeroBoxes}
      </Wrap>
    </Box>
  );
}

export default CompositionDetails;
