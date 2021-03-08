import React from 'react';
import { VStack } from '@chakra-ui/react';
import { useEffect, } from 'react';
import { BoxControlsStyle } from '../../theme/styles';
import { setPageTitle } from '../utils';
import DataSyncAttribute from './DataSyncAttributes';

function DataSyncDashboard():JSX.Element {  
  useEffect(() => {
    setPageTitle('DataSync');
  }, []);

  return (<>
    <VStack {...BoxControlsStyle} alignItems='stretch'>
      <DataSyncAttribute/>
    </VStack>
  </>);
}

export default DataSyncDashboard;
