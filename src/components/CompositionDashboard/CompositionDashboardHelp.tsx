import React from 'react';
import { Link, Accordion, AccordionItem, AccordionButton, Box, AccordionIcon, AccordionPanel, Text } from '@chakra-ui/react';
import { ExternalLinkIcon, InfoIcon } from '@chakra-ui/icons';
import { BoxQuoteStyle } from '../../theme/styles';


function CompositionDashboardHelp():JSX.Element {
  return (
    <Accordion allowToggle>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              <InfoIcon color='blue.500'/> What is a composition?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Text fontSize="sm"><span>Composition (or Grouping around a Hero Core / Set / Team / ...) refers to what </span>
            <Link 
              href="https://www.reddit.com/r/afkarena/comments/l7ji8t/introduction_to_hero_cores_an/"
              isExternal>
            /u/aimb defined on Reddit <ExternalLinkIcon mx="2px" />
            </Link>
          </Text>
          <Box {...BoxQuoteStyle}>
            <b>“Core”</b> here refers to function, namely working as a whole towards a <b>specific “win condition.”</b> <br/>
            <b>“Flex”</b> here refers to heroes that capitalize on the strengths, compensate for weaknesses, or modify win conditions more directly.
          </Box>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}

export default CompositionDashboardHelp;
