import { CheckIcon, LockIcon } from "@chakra-ui/icons";
import { Box, Center, Image, position, Tooltip } from "@chakra-ui/react"
import { State } from "../../model/common";
import { Hero } from "../../model/heroes";

type HeroBoxProps = {
  hero: Hero;
  state?: State;
  onClick?:(hero:Hero) => void;
};

const SIZE_SM:string = '2.5rem';
const SIZE:string = '3rem';

function HeroBox({ hero, state = State.AVAILABLE, onClick }: HeroBoxProps) {
  const overlayStyle = {
    position: 'absolute' as 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.75)',
  };

  return (
    <Box boxSize={[SIZE_SM, SIZE]}
      position="relative"
      boxSizing="border-box"
      onClick={onClick && (() => onClick(hero))}
      cursor={onClick && "pointer"}
      >
      <Tooltip label={hero.name} aria-label={hero.name}>
        <Image 
          src={hero.portraitURL}
          alt={hero.name}
          boxSize={[SIZE_SM, SIZE]}
        />
      </Tooltip>
      {state === State.SELECTED && <Center {...overlayStyle}>
        <CheckIcon color="green.300" boxSize={['80%','80%']}/>
      </Center>}
      {state === State.DISABLED && <Center {...overlayStyle}>

      </Center>}
    </Box>
  );
}

export default HeroBox;
