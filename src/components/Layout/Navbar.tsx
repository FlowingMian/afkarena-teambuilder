import React from 'react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { IconButton, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Heading, HStack, Image, useDisclosure, VStack, Text, Tag } from '@chakra-ui/react';
import { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import colors from '../../theme/colors';
import { staticDomain } from '../../model/common';

const NavbarStyle = {
  backgroundColor: 'primary.700', 
  color: 'whiteAlpha.900',
  paddingLeft: '1rem',
  paddingRight: '1rem',
};

const NavlinkActiveStyle = {
  backgroundColor: colors.primary[700],
  color: 'white'
};

const navLinks = [
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

function Navbar():JSX.Element {
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

  const currentLabel = navLinks.find(nl => nl.path === pathname)?.label;

  return (
    <HStack {...NavbarStyle} alignItems='center'>
      <IconButton icon={<HamburgerIcon/>} aria-label='Menu' onClick={onOpen} size='sm' m={1}/>
      <Image src={`${staticDomain}afkarena-logo.png`} height='2rem'/>
      <Heading size='sm'>{currentLabel}</Heading>

      <Drawer
        isOpen={isOpen}
        placement="left"
        size="xs"
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
    </HStack>     
  );
}

export default Navbar;
