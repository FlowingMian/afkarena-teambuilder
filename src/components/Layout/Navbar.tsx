import { Heading, VStack } from '@chakra-ui/react'
import { NavLink } from "react-router-dom"
import colors from '../../theme/colors';

const NavbarStyle = {
  height: '100%',
  width: '150px',
  position: 'fixed' as 'fixed',
  zIndex: 1,
  top: '0',
  left: '0',
  overflowX: 'hidden' as 'hidden',
  backgroundColor: 'primary.700', 
  color: 'whiteAlpha.900',
}

const NavlinkActiveStyle = {
  backgroundColor: colors.primary[900],
  color: colors.secondary[400]
}

function Navbar() {
  return (
    <VStack {...NavbarStyle} alignItems='stretch'>
      <NavLink activeStyle={NavlinkActiveStyle} to="/usages">
        <Heading size="sm" p='4'>Usages</Heading>
      </NavLink>
      <NavLink activeStyle={NavlinkActiveStyle} to="/heroes" >
        <Heading size="sm" p='4'>Heroes</Heading>
      </NavLink>
      <NavLink activeStyle={NavlinkActiveStyle} to="/compositions">
        <Heading size="sm" p='4'>Compositions</Heading>
      </NavLink>
    </VStack>
  );
}

export default Navbar;
