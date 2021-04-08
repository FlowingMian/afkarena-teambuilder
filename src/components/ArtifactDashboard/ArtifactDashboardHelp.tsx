import React from 'react';
import { Heading, Link, Accordion, AccordionItem, AccordionButton, Box, AccordionIcon, AccordionPanel, Text } from '@chakra-ui/react';
import { ExternalLinkIcon, InfoIcon } from '@chakra-ui/icons';


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
            The artifact ranking is the highest of this artifat in any of the selected guide.
          </Text>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}

export default ArtifactDashboardHelp;
