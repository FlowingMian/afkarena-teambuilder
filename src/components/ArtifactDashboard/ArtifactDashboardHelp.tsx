import React from 'react';
import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Heading, Icon, IconButton, Text, useDisclosure } from '@chakra-ui/react';
import { FiHelpCircle } from 'react-icons/fi';
import {HelpTitleStyle, HelpContentStyle } from '../../theme/styles';

function ArtifactDashboardHelp():JSX.Element {

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (<>
    <IconButton icon={<Icon as={FiHelpCircle} color='white'/>} variant='ghost' aria-label='About' onClick={onOpen}/>

    <Drawer
      isOpen={isOpen}
      placement="right"
      size="md"
      onClose={onClose}
    >
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>About</DrawerHeader>

          <DrawerBody>
            <Heading {...HelpTitleStyle}>
              How are defined the Artifact rankings?
            </Heading>
            <Text  {...HelpContentStyle}>
              Each artifact rank for a hero is its <b>highest rank</b> in any of the selected guides.
            </Text>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  </>);
}

export default ArtifactDashboardHelp;
