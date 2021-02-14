import { Box, Flex, Heading } from '@chakra-ui/react'
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
    <Box {...NavbarStyle}>
      <Flex direction='column'>
        <NavLink activeStyle={NavlinkActiveStyle} to="/usages">
          <Heading size="sm" p='4'>Tier List</Heading>
        </NavLink>
        <NavLink activeStyle={NavlinkActiveStyle} to="/heroes" >
          <Heading size="sm" p='4'>Heroes</Heading>
        </NavLink>
        <NavLink activeStyle={NavlinkActiveStyle} to="/compositions">
          <Heading size="sm" p='4'>Compositions</Heading>
        </NavLink>
      </Flex>
    </Box>
  );
}

export default Navbar;
