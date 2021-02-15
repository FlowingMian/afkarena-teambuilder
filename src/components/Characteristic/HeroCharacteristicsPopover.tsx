import { Button, Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverBody, Box} from "@chakra-ui/react";
import { ViewIcon } from '@chakra-ui/icons'
import { Hero } from "../../model/heroes";
import HeroCharactericticsTable from "./HeroCharactericticsTable";

type HeroCharacteristicsPopoverProps = {
  heroes: Array<Hero>;
};

function HeroCharacteristicsPopover({ heroes }: HeroCharacteristicsPopoverProps) {

  return (
    <Popover isLazy>
      <PopoverTrigger>
        <Button variant='ghost' rightIcon={<ViewIcon/>} minWidth='4rem' maxWidth='4rem'>{heroes.length}</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverBody background="primary.50">
          <HeroCharactericticsTable heroes={heroes} />
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export default HeroCharacteristicsPopover;