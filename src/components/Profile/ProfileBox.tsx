import React, { useContext } from 'react';
import { HStack, VStack, Button, Heading, Code, Flex, useClipboard} from '@chakra-ui/react';
import { createNewProfile } from '../../data/service/ProfileService';
import { ProfileContext } from './ProfileContext';


function ProfileBox():JSX.Element {

  const {profile} = useContext(ProfileContext);
  const { hasCopied, onCopy } = useClipboard(profile.id || '');

  function saveProfile() {
    console.log(profile);
    
    // const newProfile = {...profile};
    // createNewProfile(newProfile);
  }

  return (
    <HStack>
      <VStack>
        <Heading size='sm'>Profile : {profile.name || 'Unsaved'}</Heading>
        <Flex mb={2}>
          <Code>{profile.id}</Code>
          <Button size="xs" onClick={onCopy} ml={2}>
            {hasCopied ? 'Copied' : 'Copy'}
          </Button>
        </Flex>
      </VStack>
      <Button onClick={saveProfile}>Save</Button>
    </HStack>
  );
}

export default ProfileBox;
