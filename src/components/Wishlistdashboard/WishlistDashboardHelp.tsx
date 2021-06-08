import React from 'react';
import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Heading, Icon, IconButton, Text, useDisclosure } from '@chakra-ui/react';
import { FiHelpCircle } from 'react-icons/fi';
import {HelpTitleStyle, HelpContentStyle } from '../../theme/styles';
import { DeviceStyle } from '../../theme/deviceStyle/deviceStyle';

type WishlistDashboardHelpProps = {
  deviceStyle: DeviceStyle;
}
function WishlistDashboardHelp({deviceStyle}:WishlistDashboardHelpProps):JSX.Element {

  const { isOpen, onOpen, onClose } = useDisclosure();

  const button = deviceStyle.buttonLabel ? (
    <Button leftIcon={<Icon as={FiHelpCircle}/>} variant='outline' colorScheme='whiteAlpha' onClick={onOpen}>Help</Button>
  ) : (
    <IconButton icon={<Icon as={FiHelpCircle}/>} variant='outline' colorScheme='whiteAlpha' onClick={onOpen} aria-label='Help'/>
  );
  return (<>
    {button}

    <Drawer
      isOpen={isOpen}
      placement="left"
      size="xs"
      onClose={onClose}
    >
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Help</DrawerHeader>

          <DrawerBody>
            <Heading {...HelpTitleStyle}>
              How are defined the Signature items rankings?
            </Heading>
            <Text  {...HelpContentStyle}>
              Each signature item rank for a hero is its <b>highest rank</b> in any of the selected guides.
            </Text>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  </>);
}

export default WishlistDashboardHelp;
