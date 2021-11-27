import React from 'react';
import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Heading, Icon, Button, Link, Text, useDisclosure, IconButton } from '@chakra-ui/react';
import { FiExternalLink, FiHelpCircle } from 'react-icons/fi';
import {HelpTitleStyle, HelpContentStyle } from '../../theme/styles';
import { DeviceStyle } from '../../theme/deviceStyle/deviceStyle';

type HeroDashboardHelpProps = {
  deviceStyle: DeviceStyle;
}

function HeroDashboardHelp({deviceStyle}:HeroDashboardHelpProps):JSX.Element {

  const { isOpen, onOpen, onClose } = useDisclosure();

  const button = deviceStyle.buttonLabel ? (
    <Button leftIcon={<Icon as={FiHelpCircle}/>} variant='outline' colorScheme='whiteAlpha' onClick={onOpen}>Help</Button>
  ) : (
    <IconButton icon={<Icon as={FiHelpCircle}/>} variant='outline' colorScheme='whiteAlpha' onClick={onOpen} aria-label='Help'/>
  );
  return (<>
    {button}

    <Drawer
      isOpen={isOpen}
      placement="left"
      size="xs"
      onClose={onClose}
    >
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Help</DrawerHeader>

          <DrawerBody>
            <Heading {...HelpTitleStyle}>Furniture items :</Heading>
            <Text {...HelpContentStyle}><span>The source and in-depth explanations for each one come from the </span>
              <Link 
                href="https://www.reddit.com/r/afkarena/comments/mc774q/visual_guide_to_furniture_priorities_indepth_by/"
                isExternal>
            Visual Guide to Furniture Priorities In-Depth by Arty & Alpattex (update : Mar 2021) <Icon as={FiExternalLink} mx="2px" />
              </Link>.
            </Text>

            <Heading {...HelpTitleStyle}>Signature items :</Heading>
            <Text {...HelpContentStyle}>
              <span>The main source is </span>
              <Link 
                href="https://www.youtube.com/watch?v=_mBK47GIKlA"
                isExternal>
              Linker&apos;s Signature Item Tierlist (update : Jun 2021) <Icon as={FiExternalLink} mx="2px" />
              </Link>,
              but with some small changes (recommending +30 instead of +20 when they are notably strong, and lower some for bottom tier heroes/SI).
              I decided to do this while waiting for an additional guide to balance out a single opinion.
            </Text>

          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  </>
  );
}

export default HeroDashboardHelp;
