import { Box, Image } from "@chakra-ui/react"
import { Hero } from "../../model/heroes";

type HeroBoxProps = {
  hero: Hero;
};

function HeroBox({ hero }: HeroBoxProps) {
  return (
    <Box backgroundColor='rgba(0, 0, 0, 0.125)'>
      <Image 
        src={hero.portraitURL}
        alt={hero.name}
        boxSize="50px"
      />
    </Box>
  );
}

export default HeroBox;
