import React from 'react';
import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Heading, Icon, Button, Text, useDisclosure, IconButton, List, ListItem } from '@chakra-ui/react';
import { FiHelpCircle } from 'react-icons/fi';
import {HelpTitleStyle, HelpContentStyle } from '../../theme/styles';
import { DeviceStyle } from '../../theme/deviceStyle/deviceStyle';
import { GLOBAL_PERCENT_THRESHOLD, NICHE_PERCENT_THRESHOLD } from './model';

type UsageDashboardHelpProps = {
  deviceStyle: DeviceStyle;
}

function UsageDashboardHelp({deviceStyle}:UsageDashboardHelpProps):JSX.Element {

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
            <Heading {...HelpTitleStyle}>What is the Global Flex tier?</Heading>
            <Text {...HelpContentStyle}>
              {`Heroes that are Flex in more than ${GLOBAL_PERCENT_THRESHOLD * 100}% of compositions`}
            </Text>

            <Heading {...HelpTitleStyle}>What is the Core or Flex tier?</Heading>
            <Text {...HelpContentStyle}>
              {`Heroes that are Core at least once and Flex in more than ${NICHE_PERCENT_THRESHOLD * 100}% of compositions`}
            </Text>

            <Heading {...HelpTitleStyle}>What is the Core or Niche tier?</Heading>
            <Text {...HelpContentStyle}>
              {`Heroes that are Core at least once and Flex in less than ${NICHE_PERCENT_THRESHOLD * 100}% of compositions`}
            </Text>

            <Heading {...HelpTitleStyle}>What is the Flex tier?</Heading>
            <Text {...HelpContentStyle}>
              {`Heroes that are Flex in ${NICHE_PERCENT_THRESHOLD * 100}% to ${GLOBAL_PERCENT_THRESHOLD * 100}% of compositions`}
            </Text>

            <Heading {...HelpTitleStyle}>What is the Niche tier?</Heading>
            <Text {...HelpContentStyle}>
              {`Heroes that are Flex in less than ${NICHE_PERCENT_THRESHOLD * 100}% of compositions`}
            </Text>

            <Heading {...HelpTitleStyle}>What is the Never used tier?</Heading>
            <Text {...HelpContentStyle}>
              :&apos;(
            </Text>

            {/* <ListItem><Heading size='xs'>Core or Flex</Heading>{`Core at least once and Flex in more than ${NICHE_PERCENT_THRESHOLD * 100}% of compositions`}</ListItem>
                <ListItem><Heading size='xs'>Core or Niche</Heading>{`Core at least once and Flex in less than ${NICHE_PERCENT_THRESHOLD * 100}% of compositions`}</ListItem>
                <ListItem><Heading size='xs'>Flex</Heading>{`Flex in ${NICHE_PERCENT_THRESHOLD * 100}% to ${GLOBAL_PERCENT_THRESHOLD * 100}% of compositions`}</ListItem>
                <ListItem><Heading size='xs'>Niche</Heading>{`Flex in less than ${NICHE_PERCENT_THRESHOLD * 100}% of compositions`}</ListItem>
                <ListItem><Heading size='xs'>Never used</Heading>:&apos;(</ListItem>
              </List> */}
            {/* </Text> */}
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  </>
  );
}

export default UsageDashboardHelp;
