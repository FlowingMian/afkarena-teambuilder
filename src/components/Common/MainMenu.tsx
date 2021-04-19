import React, { useEffect } from 'react';
import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Heading, HStack, Icon, IconButton, Image, Tag, Text, useDisclosure, VStack } from '@chakra-ui/react';
import { FiBarChart2, FiMenu, FiUserCheck, FiUsers } from 'react-icons/fi';
import { GiAbstract100, GiCrossedSwords } from 'react-icons/gi';
import { useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import { staticDomain } from '../../model/common';
import { DeviceStyle } from '../../theme/deviceStyle/deviceStyle';

export const navLinks = [
  {
    path: '/usages',
    icon: FiBarChart2,
    label: 'Usages'
  },
  {
    path: '/multifight',
    icon: GiCrossedSwords,
    label: 'Multi-fight',
  },
  {
    path: '/heroes',
    icon: FiUserCheck,
    label: 'Heroes'
  },
  {
    path: '/artifacts',
    icon: GiAbstract100,
    label: 'Artifacts',
    new: true,
  },
  {
    path: '/compositions',
    icon: FiUsers,
    label: 'Compositions'
  }
];
type MainMenuButtonProps = {
  deviceStyle: DeviceStyle;
}

function MainMenu({deviceStyle}:MainMenuButtonProps):JSX.Element {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { pathname } = useLocation();

  useEffect(() => {
    onClose();
  }, [pathname]);


  const navLinkElements = navLinks.map(nl => 
    <NavLink key={nl.label} to={nl.path}>
      <HStack p='3'>
        <Icon as={nl.icon}/>
        <Heading size="xs">{nl.label}</Heading>
        {nl.new && <Tag colorScheme="red">New feature!</Tag>}
      </HStack>
    </NavLink>
  );

  const currentNavLink = navLinks.find(nl => nl.path === pathname);

  return (<>
    <HStack {...deviceStyle.controlBar.titlebar}>
      <IconButton icon={<FiMenu/>} aria-label='Menu' onClick={onOpen}/>
      {deviceStyle.buttonLabel && <Image src={`${staticDomain}afkarena-logo.png`} height='2rem'/>}
      <Icon as={currentNavLink?.icon}/>
      <Heading size='sm'>{currentNavLink?.label}</Heading>

    </HStack>

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
  </>
  );
}

export default MainMenu;
