import React from 'react';
import { Heading, Link, Accordion, AccordionItem, AccordionButton, Box, AccordionIcon, AccordionPanel, Text } from '@chakra-ui/react';
import { ExternalLinkIcon, InfoIcon } from '@chakra-ui/icons';


function HeroDashboardHelp():JSX.Element {
  return (
    <Accordion allowToggle>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              <InfoIcon color='blue.500'/> How are defined the Signature, Furniture and Artifact recommendation?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Heading size="sm">Furniture items :</Heading>
          <Text fontSize="sm"><span>The source and in-depth explanations for each one come from the </span>
            <Link 
              href="https://www.reddit.com/r/afkarena/comments/mc774q/visual_guide_to_furniture_priorities_indepth_by/"
              isExternal>
            Visual Guide to Furniture Priorities In-Depth by Arty & Alpattex (update : Mar 2021) <ExternalLinkIcon mx="2px" />
            </Link>.
          </Text>

          <Heading size="sm" mt='0.5rem'>Signature items :</Heading>
          <Text fontSize="sm">
            <span>Today, there is no up-to-date and easy to implement guide about Signature items. 
            As I feel these informations were really missing in this tool, I tried to compile data from olders guides and reddit discussions, 
            with the main source being </span>
            <Link 
              href="https://www.reddit.com/r/afkarena/comments/lnvdwa/prepare_for_endgame_campaign_with_this_signature/"
              isExternal>
              Linker&apos;s latest guide (update : Feb 2020) <ExternalLinkIcon mx="2px" />
            </Link>.
            But it will be replaced with some more legitimate data as soon as possible.
          </Text>

          <Heading size="sm" mt='0.5rem'>Artifacts :</Heading>
          <Text fontSize="sm">
            <span>Artifacts displayed below are the first ranked from differents guides. For more details, please see the </span>
            <Link 
              href="/artifacts">
              dedicated Artifact page
            </Link>.
          </Text>

        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}

export default HeroDashboardHelp;
