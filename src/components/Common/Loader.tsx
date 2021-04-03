import { Center } from '@chakra-ui/layout';
import { Spinner } from '@chakra-ui/spinner';
import React from 'react';

function Loader():JSX.Element {
  return (
    <Center mt='5rem'>
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        size="xl"
      />
    </Center>
  );
}

export default Loader;
