import React from 'react';
import { HStack, Button, Heading } from '@chakra-ui/react';
import { createAttributes } from '../../data/service/AttributeService';
import { DataContext } from '../../data/DataContext';

function DataSyncAttribute():JSX.Element {  

  return (
    <DataContext.Consumer>
      {({attributes}) => (
        <HStack>
          <Button onClick={createAttributes} disabled={attributes.length > 0}>Create Attributes</Button>
          <Heading>({attributes.length})</Heading>
        </HStack>
      )}
    </DataContext.Consumer>
  );
}
export default DataSyncAttribute;