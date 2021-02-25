import { Box, HStack, Tag } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { generateOpenSlot } from "../../data/heroes";
import { Composition } from "../../model/compositions";
import { Hero } from "../../model/heroes";
import colors from "../../theme/colors";
import HeroCategory from "../Hero/HeroCategory";
import HeroList from "../Hero/HeroList";
type CompositionBuilderProps = {
  composition: Composition;
  onChange:(value: Array<string>) => void;
};

function CompositionBuilder({ composition, onChange }: CompositionBuilderProps) {

  useEffect(() => {
    updateFlexHeroes(getDefaultFlexHeroes());
  }, [composition]);

  const [flexHeroes, setFlexHeroes] = useState<Array<Hero>>(getDefaultFlexHeroes());

  function getDefaultFlexHeroes() {
      const defaultFlex = [];
      for (let index = 0; index < 5 - composition.coreHeroes.heroes.length; index++) {
        defaultFlex.push(generateOpenSlot())
      }
      return defaultFlex;
  }

  const coreHeroes = composition.coreHeroes.heroes.map(hr => hr.hero);
  function updateFlexHeroes(flexHeroes:Array<Hero>) {
    setFlexHeroes(flexHeroes);
    onChange([...coreHeroes, ...flexHeroes].map(h => h.id));
  }

  const tags = composition.tags.map(t => <Tag key={t} size="sm">{t}</Tag>);
  return (
    <HStack>
      <Box width="18rem">
        <HeroCategory name={composition.name} tags={tags} heroes={coreHeroes} colorScheme={colors.gold[500]}/>
      </Box>
      <Box width="13rem">
        <HeroList heroes={flexHeroes}/>
      </Box>
    </HStack>
  );
}

export default CompositionBuilder;
