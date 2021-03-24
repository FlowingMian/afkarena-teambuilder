import React from 'react';
import { VStack } from '@chakra-ui/react';
import { useEffect, } from 'react';
import { BoxControlsStyle } from '../../theme/styles';
import { setPageTitle } from '../utils';
import DataSyncAttribute from './DataSyncAttributes';
import DataSyncClass from './DataSyncClasses';
import DataSyncFaction from './DataSyncFactions';
import DataSyncHeroes from './DataSyncHeroes';
import DataSyncRole from './DataSyncRoles';

function DataSyncDashboard():JSX.Element {  
  useEffect(() => {
    setPageTitle('DataSync');
  }, []);

  return (<>
    <VStack {...BoxControlsStyle} alignItems='stretch'>
      <DataSyncAttribute/>
      <DataSyncClass/>
      <DataSyncFaction/>
      <DataSyncRole/>
      <DataSyncHeroes/>
    </VStack>
  </>);
}

export default DataSyncDashboard;
