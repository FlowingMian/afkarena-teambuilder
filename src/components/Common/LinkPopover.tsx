import { Button, Popover, PopoverTrigger, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, UnorderedList, ListItem, Link, LinkOverlay, LinkBox} from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Link as LinkModel, } from "../../model/common";

type LinkPopoverProps = {
  links: Array<LinkModel>;
};

function LinkPopover({ links }: LinkPopoverProps) {

  let content;
  if (links.length === 1) {
    content = <LinkBox>
      <Button variant="outline" size="xs" rightIcon={<ExternalLinkIcon/>}>
        <LinkOverlay href={links[0].url} isExternal>
          Sources
        </LinkOverlay>
      </Button>
    </LinkBox>
  }
  else {
    const linkElements = links.map(link => (
      <ListItem>
        <Link href={link.url} isExternal>
          {link.label} <ExternalLinkIcon mx="2px" />
        </Link>
      </ListItem>
    ))

    content = <Popover>
      <PopoverTrigger>
        <Button variant="outline" size="xs" rightIcon={<ExternalLinkIcon/>}>Sources</Button>
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
    </Popover>    
  }

  return <>
    {content}
  </>;
}

export default LinkPopover;
