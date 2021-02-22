import { Wrap, WrapItem } from "@chakra-ui/react"
import { Hero } from "../../model/heroes";
import HeroDetails from "./HeroDetails";

type HeroDetailListProps = {
  heroes: Array<Hero>;
};

function HeroDetailList({ heroes }: HeroDetailListProps) {
  const heroesList = heroes.map((h) => <WrapItem key={h.id}><HeroDetails hero={h}/></WrapItem>);

  return (
    <Wrap flexDirection="row" flexWrap="wrap" spacing={1}>
      {heroesList}
    </Wrap>
  );
}

export default HeroDetailList;
