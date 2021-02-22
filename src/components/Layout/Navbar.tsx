import { Center, Heading, HStack, Image } from '@chakra-ui/react'
import { NavLink } from "react-router-dom"
import colors from '../../theme/colors';

const NavbarStyle = {
  backgroundColor: 'primary.700', 
  color: 'whiteAlpha.900',
  paddingLeft: '1rem',
  paddingRight: '1rem',
}

const NavlinkActiveStyle = {
  backgroundColor: colors.primary[900],
  color: colors.secondary[400]
}

function Navbar() {
  return (
    <HStack {...NavbarStyle} alignItems='stretch'>
      <Center>
        <Image src='./afkarena-logo.png' height='2rem'/>
        <NavLink activeStyle={NavlinkActiveStyle} to="/usages">
          <Heading size="xs" p='3'>Usages</Heading>
        </NavLink>
        <NavLink activeStyle={NavlinkActiveStyle} to="/heroes" >
          <Heading size="xs" p='3'>Heroes</Heading>
        </NavLink>
        <NavLink activeStyle={NavlinkActiveStyle} to="/compositions">
          <Heading size="xs" p='3'>Compositions</Heading>
        </NavLink>
      </Center>
    </HStack>     
  );
}

export default Navbar;
