import { Box, Image } from "rebass";
import { Hero } from "../../model/heroes";

type HeroBoxProps = {
  hero: Hero;
};

function HeroBox({ hero }: HeroBoxProps) {
  return (
    <Box p={1}
      width='50px'
      height='50px'
      backgroundColor='rgba(255, 255, 255, 0.125)'
    >
      <Image 
        src={hero.portraitURL}
        alt={hero.name}
        width="50px"
        height="50px"
      />
    </Box>
  );
}

export default HeroBox;
