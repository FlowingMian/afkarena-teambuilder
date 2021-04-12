import React from 'react';
import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Heading, Icon, IconButton, Link, Text, useDisclosure } from '@chakra-ui/react';
import { FiExternalLink, FiHelpCircle } from 'react-icons/fi';
import {HelpTitleStyle, HelpContentStyle } from '../../theme/styles';

function HeroDashboardHelp():JSX.Element {

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

          <DrawerBody p={1}>
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
