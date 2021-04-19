import { Button, IconButton } from '@chakra-ui/button';
import React from 'react';
import { FiSave } from 'react-icons/fi';
import { DeviceStyle } from '../../theme/deviceStyle/deviceStyle';

type SaveButtonProps = {
  deviceStyle: DeviceStyle;
  disabled: boolean;
  onSave: () => void;
}

function SaveButton({deviceStyle, disabled, onSave}:SaveButtonProps):JSX.Element {
  return deviceStyle.buttonLabel ? (
    <Button leftIcon={<FiSave/>} onClick={onSave} colorScheme='red' disabled={disabled}>Save</Button>
  ) : (
    <IconButton icon={<FiSave/>} onClick={onSave} colorScheme='red' disabled={disabled} aria-label='Save'/>
  );
}

export default SaveButton;
