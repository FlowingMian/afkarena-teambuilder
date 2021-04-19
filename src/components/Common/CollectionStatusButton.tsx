import { Button, IconButton } from '@chakra-ui/button';
import React from 'react';
import { NotOwned, Owned } from '../../model/characteristics/collectionStatuses';
import { DeviceStyle } from '../../theme/deviceStyle/deviceStyle';

type CollectionStatusButtonProps = {
  deviceStyle: DeviceStyle;
  disableNotOwned: boolean;
  onChange: () => void;
}

function CollectionStatusButton({deviceStyle, disableNotOwned, onChange}:CollectionStatusButtonProps):JSX.Element {
  return deviceStyle.buttonLabel ? (
    <Button 
      variant='outline' 
      leftIcon={disableNotOwned ? NotOwned.iconURL?.() : Owned?.iconURL?.()} 
      colorScheme={disableNotOwned ? 'red' : 'green'} 
      onClick={onChange}>
        Not owned {disableNotOwned ? 'disabled' : 'enabled'} 
    </Button>
  ) : (
    <IconButton 
      variant='outline' 
      icon={disableNotOwned ? NotOwned.iconURL?.() : Owned?.iconURL?.()}
      colorScheme={disableNotOwned ? 'red' : 'green'}
      aria-label='Disabled not owned' 
      onClick={onChange}
    />
  );
}

export default CollectionStatusButton;
