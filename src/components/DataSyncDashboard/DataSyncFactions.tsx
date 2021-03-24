import React from 'react';
import { HStack, Button, Heading } from '@chakra-ui/react';
import { createFactions } from '../../data/service/FactionService';
import { DataContext } from '../../data/DataContext';

function DataSyncFaction():JSX.Element {  

  return (
    <DataContext.Consumer>
      {({factions}) => (
        <HStack>
          <Button onClick={createFactions} disabled={factions.length > 0}>Create Factions</Button>
          <Heading>({factions.length})</Heading>
        </HStack>
      )}
    </DataContext.Consumer>
  );
}
export default DataSyncFaction;