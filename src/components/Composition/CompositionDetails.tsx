
import { Box, Wrap, WrapItem, Heading } from "@chakra-ui/react";
import { Composition } from "../../model/compositions";
import HeroCategory from "../Hero/HeroCategory";
import { BoxCardProps} from '../style'

type CompositionDetailsProps = {
  composition: Composition;
};

function CompositionDetails({ composition }: CompositionDetailsProps) {
  const coreHeroBoxes = (<WrapItem key={composition.coreHeroes.role.id}>
    <HeroCategory name={composition.coreHeroes.role.name} heroes={composition.coreHeroes.heroes.map(hr => hr.hero)} />
  </WrapItem>);
  const flexHeroBoxes = composition.flexHeroes.map(cr => <WrapItem key={cr.role.id}>
    <HeroCategory name={cr.role.name} heroes={cr.heroes.map(hr => hr.hero)} /></WrapItem>
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
