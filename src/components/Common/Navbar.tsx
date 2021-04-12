import React from 'react';
import { Heading, HStack, Image } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import { staticDomain } from '../../model/common';
import { navLinks } from './MainMenuButton';

const NavbarStyle = {
  backgroundColor: 'primary.700', 
  color: 'whiteAlpha.900',
  padding: '0.25rem 1rem',
};

function Navbar():JSX.Element {
  const { pathname } = useLocation();

  const currentLabel = navLinks.find(nl => nl.path === pathname)?.label;

  return (
    <HStack {...NavbarStyle} alignItems='center'>
      <Image src={`${staticDomain}afkarena-logo.png`} height='2rem'/>
      <Heading size='sm'>{currentLabel}</Heading>
    </HStack> 
  );
}

export default Navbar;
