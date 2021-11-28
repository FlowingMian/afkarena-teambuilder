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
            <Text {...HelpContentStyle}>
              Most informations on this page are coming from the <b>in-game encyclopedia from the Community Tab</b>, 
              where a lot of content was created by some of our trusted Community Supporter&nbsp;
              <Link 
                href="https://www.reddit.com/r/afkarena/comments/owu53x/ingame_wiki_guides/"
                isExternal>
               (see related Reddit post)<Icon as={FiExternalLink} mx="2px" />
              </Link>.
            </Text>

            <Text {...HelpContentStyle}>
              A majority of heroes have an In-depth Review, and for the one who didn&apos;t, I gathered informations elsewhere.
            </Text>

            <Text {...HelpContentStyle}>
              So I&apos;m aware that there might be some errors (aggregating everything was tedious), so feel free to point them to me with a source.
            </Text>

            <Heading {...HelpTitleStyle}>Signature items :</Heading>
            <Text {...HelpContentStyle}>
              <ul>
                <li>In-game encyclopedia</li>
                <li><Link 
                  href="https://www.afk-analytica.com/visual-guides"
                  isExternal>
                AFK Analytica Wishlist guide (update : Sep 2021) <Icon as={FiExternalLink} mx="2px" />
                </Link></li>
                <li><Link 
                  href="https://www.reddit.com/r/afkarena/comments/p7kh1h/endgame_pve_formations_by_umeymenetsiz/"
                  isExternal>
                Endgame PVE Formations by u/Meymenetsiz (update : Aug 2021) <Icon as={FiExternalLink} mx="2px" />
                </Link></li>
                <li><Link 
                  href="https://www.reddit.com/r/afkarena/comments/o65o24/investments_for_prince_of_persia_merlin_other_new/"
                  isExternal>
                Investments for Prince of Persia, Merlin, &amp; Other New Heroes by Arty (update : Jun 2021) <Icon as={FiExternalLink} mx="2px" />
                </Link></li>
                <li><Link 
                  href="https://www.youtube.com/watch?v=_mBK47GIKlA"
                  isExternal>
                Linker&apos;s Signature Item Tierlist (update : Jun 2021) <Icon as={FiExternalLink} mx="2px" />
                </Link></li>
              </ul>
            </Text>

            <Heading {...HelpTitleStyle}>Furniture items :</Heading>
            <Text {...HelpContentStyle}>
              <ul>
                <li>In-game encyclopedia</li>
                <li><Link 
                  href="https://www.reddit.com/r/afkarena/comments/mc774q/visual_guide_to_furniture_priorities_indepth_by/"
                  isExternal>
                  Visual Guide to Furniture Priorities In-Depth by Arty & Alpattex (update : Mar 2021) <Icon as={FiExternalLink} mx="2px" />
                </Link></li>
              </ul>
            </Text>

            <Heading {...HelpTitleStyle}>Engravings :</Heading>
            <Text {...HelpContentStyle}>
              <ul>
                <li>In-game encyclopedia</li>
                <li><Link 
                  href="https://www.afk-analytica.com/visual-guides/engravements"
                  isExternal>
                  AFK Analytica Engravings guide (update : Oct 2021) <Icon as={FiExternalLink} mx="2px" />
                </Link></li>
                <li><Link 
                  href="https://www.reddit.com/r/afkarena/comments/q3xly2/eternal_engravings_tierlist/"
                  isExternal>
                  Eternal Engravings Tierlist by XapySlenderMan (update : Oct 2021) <Icon as={FiExternalLink} mx="2px" />
                </Link></li>
              </ul>
            </Text>

            <Heading {...HelpTitleStyle}>Artifacts :</Heading>
            <Text {...HelpContentStyle}>
              <ul>
                <li>In-game encyclopedia</li>
                <li><Link 
                  href="https://www.reddit.com/r/afkarena/comments/kw5hko/crowdsourced_artifact_guide_new_class_specific/"
                  isExternal>
                  Crowdsourced Artifact Guide by SilentBobUS (update : Apr 2021) <Icon as={FiExternalLink} mx="2px" />
                </Link></li>
                <li>In-game Popularity hero data</li>
              </ul>
            </Text>

          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  </>
  );
}

export default HeroDashboardHelp;
