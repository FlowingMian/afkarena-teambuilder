import React from 'react';
import { HStack, Button, Heading } from '@chakra-ui/react';
import { createRoles } from '../../data/service/RoleService';
import { DataContext } from '../../data/DataContext';
import CharacteristicTable from '../Characteristic/CharacteristicTable';

function DataSyncRole():JSX.Element {  

  return (
    <DataContext.Consumer>
      {({roles}) => (
        <HStack>
          <Button onClick={createRoles} disabled={roles.length > 0}>Create Roles</Button>
          <Heading>({roles.length})</Heading>
        </HStack>
      )}
    </DataContext.Consumer>
  );
}
export default DataSyncRole;