import { Box, Flex } from "rebass";
import { Hero } from "../../model/heroes";
import HeroBox from "./HeroBox";

type HeroListProps = {
  heroes: Array<Hero>;
};

function HeroList({ heroes }: HeroListProps) {
  const heroesList = heroes.map((h) => <Box margin="1px"><HeroBox key={h.id} hero={h}/></Box>);

  return (
    <Flex flexDirection="row" flexWrap="wrap">
      {heroesList}
    </Flex>
  );
}

export default HeroList;
