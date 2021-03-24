import React from 'react';
import { HStack, Button, Heading } from '@chakra-ui/react';
import { createClasses } from '../../data/service/ClassService';
import { DataContext } from '../../data/DataContext';

function DataSyncClass():JSX.Element {  

  return (
    <DataContext.Consumer>
      {({classes}) => (
        <HStack>
          <Button onClick={createClasses} disabled={classes.length > 0}>Create Classes</Button>
          <Heading>({classes.length})</Heading>
        </HStack>
      )}
    </DataContext.Consumer>
  );
}
export default DataSyncClass;