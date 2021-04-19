import React from 'react';
import { Box, Flex, IconButton, Spacer, Stack } from '@chakra-ui/react';
import { FiChevronsUp } from 'react-icons/fi';
import MainMenu from './MainMenu';
import { DeviceStyle } from '../../theme/deviceStyle/deviceStyle';

type ControlBarProps = {
  deviceStyle: DeviceStyle;
  children: React.ReactNode;
}

function ControlBar({deviceStyle, children}:ControlBarProps):JSX.Element {

  return (
    <Box {...deviceStyle.controlBar.viewport}>
      <Flex {...deviceStyle.controlBar.box}>
        <MainMenu deviceStyle={deviceStyle}/>

        <Spacer />

        <Stack  {...deviceStyle.controlBar.actionBar}>
          {children}
        </Stack>

        {/* <Spacer /> */}
        {/* <IconButton icon={<FiChevronsUp/>} colorScheme='whiteAlpha' variant='ghost' aria-label='Scroll to top' onClick={scrollToTop}/> */}
      </Flex>
    </Box>
  );
}

export default ControlBar;
