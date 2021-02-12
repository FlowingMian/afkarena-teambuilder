import { Box, Image, Tooltip } from "@chakra-ui/react"
import { Hero } from "../../model/heroes";

type HeroBoxProps = {
  hero: Hero;
};

const SIZE:string = '3rem';

function HeroBox({ hero }: HeroBoxProps) {
  return (
    <Box backgroundColor='rgba(0, 0, 0, 0.125)' width={SIZE} height={SIZE} >
      <Tooltip label={hero.name} aria-label={hero.name}>
        <Image 
          src={hero.portraitURL}
          alt={hero.name}
          boxSize={SIZE}
        />
      </Tooltip>
    </Box>
  );
}

export default HeroBox;
