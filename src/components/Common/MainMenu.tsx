import React, { useEffect } from 'react';
import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Heading, HStack, Icon, IconButton, Image, Spacer, Tag, Text, useDisclosure, VStack, Link, Divider } from '@chakra-ui/react';
import { FiBarChart2, FiExternalLink, FiMenu, FiUserCheck, FiUsers } from 'react-icons/fi';
import { GiAbstract100, GiCrossedSwords, GiSpikedHalo } from 'react-icons/gi';
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
    path: '/signatureitems',
    icon: GiSpikedHalo,
    label: 'Signature items',
    new: true,
  },
  // {
  //   path: '/furnitureitems',
  //   icon: GiWoodenChair,
  //   label: 'Furniture items',
  //   new: true,
  // },
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
            <Flex direction='column' height='100%'> 
              <VStack alignItems='stretch'>
                {navLinkElements}
              </VStack>

              <Spacer/>

              <VStack>
                <Text fontSize='xs'>
                  <span>This tool is provided to you by </span>
                  <Link href="https://www.reddit.com/user/Mian_reddit" isExternal>
                    /u/Mian_reddit
                  </Link>
                </Text>
                <Divider/>
                <Text fontSize='xs'>
                  <span>AFK Team has no affiliation with </span><br/>
                  <Link href="https://www.lilithgames.com/" isExternal>
                    Lilith Games <Icon as={FiExternalLink} mx="2px" />
                  </Link>
                  <span> or </span>
                  <Link href="https://www.afkarena.com/" isExternal>
                    AFK Arena <Icon as={FiExternalLink} mx="2px" />
                  </Link>
                </Text>
                <Text fontSize='xs'>Copyright © 2021</Text>
              </VStack>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  </>
  );
}

export default MainMenu;
