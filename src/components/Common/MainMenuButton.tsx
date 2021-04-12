import React, { useEffect } from 'react';
import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Heading, HStack, IconButton, Image, Tag, Text, useDisclosure, VStack } from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';
import { useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import { staticDomain } from '../../model/common';
import colors from '../../theme/colors';

const NavlinkActiveStyle = {
  backgroundColor: colors.primary[700],
  color: 'white'
};

export const navLinks = [
  {
    path: '/usages',
    label: 'Usages'
  },
  {
    path: '/multifight',
    label: 'Multi-fight',
  },
  {
    path: '/heroes',
    label: 'Heroes'
  },
  {
    path: '/artifacts',
    label: 'Artifacts',
    new: true,
  },
  {
    path: '/compositions',
    label: 'Compositions'
  }
];

function MainMenuButton():JSX.Element {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { pathname } = useLocation();

  useEffect(() => {
    onClose();
  }, [pathname]);


  const navLinkElements = navLinks.map(nl => 
    <NavLink key={nl.label} activeStyle={NavlinkActiveStyle} to={nl.path}>
      <HStack>
        <Heading size="xs" p='3'>{nl.label}</Heading>
        {nl.new && <Tag colorScheme="red">New feature!</Tag>}
      </HStack>
    </NavLink>
  );

  return (<>
    <IconButton icon={<FiMenu/>} aria-label='Menu' onClick={onOpen}/>

    <Drawer
      isOpen={isOpen}
      placement="left"
      size="md"
      onClose={onClose}
    >
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <HStack>
              <Image src={`${staticDomain}afkarena-logo.png`} height='2rem'/>
              <Text>AFK Team</Text>
            </HStack>
          </DrawerHeader>

          <DrawerBody p={1}>
            <VStack alignItems='stretch'>
              {navLinkElements}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  </>
  );
}

export default MainMenuButton;
