import React from 'react';
import { Accordion, AccordionItem, AccordionButton, Box, AccordionIcon, AccordionPanel, Text } from '@chakra-ui/react';
import { InfoIcon } from '@chakra-ui/icons';


function ArtifactDashboardHelp():JSX.Element {
  return (
    <Accordion allowToggle>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              <InfoIcon color='blue.500'/> How are defined the Artifact rankings?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Text fontSize="sm">
            Each artifact rank for a hero is its <b>highest rank</b> in any of the selected guides.
          </Text>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}

export default ArtifactDashboardHelp;
