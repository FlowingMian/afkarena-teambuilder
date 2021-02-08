
import { Card, Flex, Heading } from "rebass";
import { Composition } from "../../model/compositions";
import HeroCategory from "../Hero/HeroCategory";

type CompositionDetailsProps = {
  composition: Composition;
};

function CompositionDetails({ composition }: CompositionDetailsProps) {
  const coreHeroBoxes = <HeroCategory name={composition.coreHeroes.role.name} heroes={composition.coreHeroes.heroes.map(hr => hr.hero)} />;
  const flexHeroBoxes = composition.flexHeroes.map(cc => <HeroCategory name={cc.role.name} heroes={cc.heroes.map(hr => hr.hero)} />);

  return (
    <Card>
      <Flex flexDirection="column">
        <Heading>{composition.name}</Heading>
        {coreHeroBoxes}
        {flexHeroBoxes}
      </Flex>
    </Card>
  );
}

export default CompositionDetails;
