import React from 'react';
import { Button, Popover, PopoverTrigger, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, UnorderedList, ListItem, Link, LinkOverlay, LinkBox, Icon} from '@chakra-ui/react';
import { Link as LinkModel, } from '../../model/common';
import { FiExternalLink } from 'react-icons/fi';

type LinkPopoverProps = {
  links: Array<LinkModel>;
};

function LinkPopover({ links }: LinkPopoverProps):JSX.Element {

  let content;
  if (links.length === 0) {
    content = null;
  }
  else if (links.length === 1) {
    content = <LinkBox>
      <Button variant="outline" size="xs" rightIcon={<Icon as={FiExternalLink} />}>
        <LinkOverlay href={links[0].url} isExternal>
          Sources
        </LinkOverlay>
      </Button>
    </LinkBox>;
  }
  else {
    const linkElements = links.map(link => (
      <ListItem key={link.label}>
        <Link href={link.url} isExternal>
          {link.label} <Icon as={FiExternalLink} />
        </Link>
      </ListItem>
    ));

    content = <Popover>
      <PopoverTrigger>
        <Button variant="outline" size="xs" rightIcon={<Icon as={FiExternalLink} />}>Sources</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody>
          <UnorderedList>
            {linkElements}
          </UnorderedList>
        </PopoverBody>
      </PopoverContent>
    </Popover>;    
  }

  return <>
    {content}
  </>;
}

export default LinkPopover;
