import React from 'react';
import { Button, Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverBody} from '@chakra-ui/react';
import { ViewIcon } from '@chakra-ui/icons';
import { Hero } from '../../model/heroes';
import HeroCharactericticsTable from './HeroCharactericticsTable';

type HeroCharacteristicsPopoverProps = {
  heroes: Array<Hero>;
};

function HeroCharacteristicsPopover({ heroes }: HeroCharacteristicsPopoverProps):JSX.Element {

  return (
    <Popover isLazy>
      <PopoverTrigger>
        <Button variant='ghost' size='sm' rightIcon={<ViewIcon/>}>{heroes.length}</Button>
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
