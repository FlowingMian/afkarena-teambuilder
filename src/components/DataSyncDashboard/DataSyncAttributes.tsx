import React from 'react';
import { HStack, Button } from '@chakra-ui/react';
import { createAttributes } from '../../data/service/AttributeService';
import { DataContext } from '../../data/DataContext';
import CharacteristicTable from '../Characteristic/CharacteristicTable';

function DataSyncAttribute():JSX.Element {  

  return (
    <DataContext.Consumer>
      {({attributes}) => (
        <HStack>
          <CharacteristicTable characterictics={attributes}/> 
          <Button onClick={createAttributes}>Create Attributes</Button>
        </HStack>
      )}
    </DataContext.Consumer>
  );
}
export default DataSyncAttribute;