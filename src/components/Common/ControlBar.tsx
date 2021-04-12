import React from 'react';
import { Flex, HStack, IconButton, Spacer } from '@chakra-ui/react';
import { FiChevronsUp } from 'react-icons/fi';
import { BoxControlBarStyle } from '../../theme/styles';
import MainMenuButton from './MainMenuButton';

type ControlBarProps = {
  children: React.ReactNode
}

function ControlBar({children}:ControlBarProps):JSX.Element {

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <Flex {...BoxControlBarStyle}>
      <MainMenuButton/>
      <Spacer />
      <HStack spacing='1rem'>
        {children}
      </HStack>
      <Spacer />
      <IconButton icon={<FiChevronsUp/>} colorScheme='whiteAlpha' variant='ghost' aria-label='Scroll to top' onClick={scrollToTop}/>
    </Flex>
  );
}

export default ControlBar;
