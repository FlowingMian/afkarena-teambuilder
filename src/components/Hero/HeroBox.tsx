import { Box, Image, Tooltip } from "@chakra-ui/react"
import { Hero } from "../../model/heroes";

type HeroBoxProps = {
  hero: Hero;
};

const SIZE_SM:string = '2.5rem';
const SIZE:string = '3rem';

function HeroBox({ hero }: HeroBoxProps) {
  return (
    <Box backgroundColor='rgba(0, 0, 0, 0.125)' width={[SIZE_SM, SIZE]} height={[SIZE_SM, SIZE]} >
      <Tooltip label={hero.name} aria-label={hero.name}>
        <Image 
          src={hero.portraitURL}
          alt={hero.name}
          boxSize={[SIZE_SM, SIZE]}
        />
      </Tooltip>
    </Box>
  );
}

export default HeroBox;
