import React, { useEffect } from 'react';
import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Heading, HStack, Icon, IconButton, Image, Tag, Text, useDisclosure, VStack } from '@chakra-ui/react';
import { FiBarChart2, FiMenu, FiUserCheck, FiUsers } from 'react-icons/fi';
import { GiAbstract100, GiCrossedSwords } from 'react-icons/gi';
import { useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import { staticDomain } from '../../model/common';
import { DeviceStyle } from '../../theme/deviceStyle/deviceStyle';
import colors from '../../theme/colors';

const NavlinkActiveStyle = {
  backgroundColor: colors.primary[700],
  color: 'white'
};

export const navLinks = [
  {
    path: '/usages',
    icon: FiBarChart2,
    label: 'Usages',
    new: false,
  },
  {
    path: '/multifight',
    icon: GiCrossedSwords,
    label: 'Multi-fight',
    new: false,
  },
  {
    path: '/heroes',
    icon: FiUserCheck,
    label: 'Heroes',
    new: false,
  },
  {
    path: '/artifacts',
    icon: GiAbstract100,
    label: 'Artifacts',
    new: false,
  },
  {
    path: '/compositions',
    icon: FiUsers,
    label: 'Compositions',
    new: false,
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

  const currentNavLink = navLinks.find(nl => nl.path === pathname);

  const navLinkElements = navLinks.map(nl => {
    console.log(currentNavLink, nl);
    
    return <NavLink key={nl.label} to={nl.path} activeStyle={NavlinkActiveStyle}>
      <HStack p='3'>
        <Icon as={nl.icon}/>
        <Heading size="xs">{nl.label}</Heading>
        {nl.new && <Tag colorScheme="red">New feature!</Tag>}
      </HStack>
    </NavLink>;
  });


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
