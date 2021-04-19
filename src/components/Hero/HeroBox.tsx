import React from 'react';
import { Box, Center, Icon, Image, Tooltip } from '@chakra-ui/react';
import { State } from '../../model/common';
import { Hero, isOpenSpot } from '../../model/heroes';
import { FiCheck, FiLock, FiPlus } from 'react-icons/fi';

type HeroBoxProps = {
  hero: Hero;
  state?: State;
  onClick?:(e:React.MouseEvent, hero:Hero) => void;
};

const SIZE_SM = '2.5rem';
const SIZE = '3rem';

function HeroBox({ hero, state = State.AVAILABLE, onClick }: HeroBoxProps):JSX.Element {
  const overlayStyle = {
    position: 'absolute' as const,
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
      cursor={onClick && 'pointer'}
    >
      <Tooltip label={hero.name} aria-label={hero.name}>
        <Box>
          {isOpenSpot(hero) ? 
            <Center {...overlayStyle} background='rgba(0, 0, 0, 0.1)'>
              <Icon as={FiPlus} color="orange.400" boxSize={['50%','50%']}/>
            </Center>
            : <Image 
              src={hero.portraitURL}
              alt={hero.name}
              boxSize={[SIZE_SM, SIZE]}
            />}
          <Center {...(state ? overlayStyle : null)} background='rgba(0, 0, 0, 0.6)'>
            {state === State.SELECTED && <Icon as={FiCheck} color="green.300" boxSize={['70%','70%']}/>}
            {state === State.LOCKED && <Icon as={FiLock} color="gray.300" boxSize={['50%','50%']}/>}
          </Center>
          {hero.recommended && 
            <Box {...overlayStyle} outline='3px solid gold' outlineOffset='-3px'>
            </Box>
          }
        </Box>
      </Tooltip>
    </Box>
  );
}

export default HeroBox;
