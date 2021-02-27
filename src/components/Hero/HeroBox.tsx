import { AddIcon, CheckIcon, LockIcon, StarIcon } from "@chakra-ui/icons";
import { Box, Center, Image, Tooltip } from "@chakra-ui/react"
import { State } from "../../model/common";
import { HeroRequirement } from "../../model/compositions";
import { Hero, isOpenSpot } from "../../model/heroes";

type HeroBoxProps = {
  hero: Hero | HeroRequirement;
  state?: State;
  onClick?:(e:React.MouseEvent, hero:Hero | HeroRequirement) => void;
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
  };

  return (
    <Box boxSize={[SIZE_SM, SIZE]}
      position="relative"
      boxSizing="border-box"
      onClick={(e) => onClick && onClick(e, hero)}
      cursor={onClick && "pointer"}
      >
      <Tooltip label={hero.name} aria-label={hero.name}>
        <Box>
          {isOpenSpot(hero) ? 
            <Center {...overlayStyle} background='rgba(0, 0, 0, 0.1)'>
              <AddIcon color="orange.400" boxSize={['50%','50%']}/>
            </Center>
          : <Image 
            src={hero.portraitURL}
            alt={hero.name}
            boxSize={[SIZE_SM, SIZE]}
          />}
          <Center {...(state ? overlayStyle : null)} background='rgba(0, 0, 0, 0.5)'>
            {state === State.SELECTED && <CheckIcon color="green.300" boxSize={['70%','70%']}/>}
            {state === State.LOCKED && <LockIcon color="gray.300" boxSize={['50%','50%']}/>}
          </Center>
          {'recommended' in hero && hero.recommended && 
            <Box {...overlayStyle} outline='2px solid gold' outlineOffset='-2px'>
              <StarIcon color="gold" boxSize={['40%','40%']} ml='55%' mt={1} display='block'/>
            </Box>
          }
        </Box>
      </Tooltip>
    </Box>
  );
}

export default HeroBox;
