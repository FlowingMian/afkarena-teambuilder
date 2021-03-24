import React from 'react';
import { HStack, Button, Heading } from '@chakra-ui/react';
import { createHeroes } from '../../data/service/HeroService';
import { DataContext } from '../../data/DataContext';
import HeroList from '../Hero/HeroList';

function DataSyncHeroes():JSX.Element {  

  return (
    <DataContext.Consumer>
      {({heroes}) => (
        <HStack>
          <Button onClick={createHeroes} disabled={heroes.length > 0}>Create Heroes</Button>
          <Heading>({heroes.length})</Heading>
        </HStack>
      )}
    </DataContext.Consumer>
  );
}
export default DataSyncHeroes;