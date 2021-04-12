import React from 'react';
import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Box, IconButton, Link, Text, useDisclosure, Heading, Icon } from '@chakra-ui/react';
import { FiExternalLink, FiHelpCircle } from 'react-icons/fi';
import {HelpTitleStyle, HelpContentStyle } from '../../theme/styles';
import { BoxQuoteStyle } from '../../theme/styles';

function CompositionDashboardHelp():JSX.Element {

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
            <Heading {...HelpTitleStyle}>What is a composition?</Heading>
            <Text {...HelpContentStyle}><span>Composition (or Grouping around a Hero Core / Set / Team / ...) refers to what </span>
              <Link 
                href="https://www.reddit.com/r/afkarena/comments/l7ji8t/introduction_to_hero_cores_an/"
                isExternal>
            /u/aimb defined on Reddit <Icon as={FiExternalLink} />
              </Link>
            </Text>
            <Box {...BoxQuoteStyle}>
              <b>“Core”</b> here refers to function, namely working as a whole towards a <b>specific “win condition.”</b> <br/>
              <b>“Flex”</b> here refers to heroes that capitalize on the strengths, compensate for weaknesses, or modify win conditions more directly.
            </Box>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  </>
  );
}

export default CompositionDashboardHelp;
