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
              <span>Today, there is no up-to-date and easy to implement guide about Signature items. 
            As I feel these informations were really missing in this tool, I tried to compile data from olders guides and reddit discussions, 
            with the main source being </span>
              <Link 
                href="https://www.reddit.com/r/afkarena/comments/lnvdwa/prepare_for_endgame_campaign_with_this_signature/"
                isExternal>
              Linker&apos;s latest guide (update : Feb 2020) <Icon as={FiExternalLink} mx="2px" />
              </Link>.
            But it will be replaced with some more legitimate data as soon as possible.
            </Text>

            <Heading {...HelpTitleStyle}>Artifacts :</Heading>
            <Text {...HelpContentStyle}>
              <span>Artifacts displayed below are the first ranked from differents guides. For more details, please see the </span>
              <Link 
                href="/artifacts">
              dedicated Artifact page
              </Link>.
            </Text>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  </>
  );
}

export default HeroDashboardHelp;
