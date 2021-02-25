import { Alert, AlertIcon, AlertTitle, Box, Center, HStack, Link, ListItem, UnorderedList, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { BoxControlsStyle, BoxResultsStyle } from '../../theme/styles';
import CompositionSelector from '../Composition/CompositionSelector';
import MultifightDashboardResults from './MultifightDashboardResults';
import compositions from '../../data/compositions';
import { sendViewItems } from '../../useTracking';
import { setPageTitle } from '../utils';
import { Composition } from '../../model/compositions';

function MultifightDashboard() {
  const [selectedCompositions, setSelectedCompositions] = useState<Array<Composition>>([]);

  function filterCompositions(compositionIds:Array<string>) {
    // sendViewItems('composition', compositionIds);
    setSelectedCompositions(compositions.filter(c => compositionIds.includes(c.id)));
  }
  
  useEffect(() => {
    setPageTitle("Multifight");
  }, []);

  return (<>
      <VStack {...BoxControlsStyle} alignItems='stretch'>
        <CompositionSelector onValidate={filterCompositions}/>
      </VStack>
      <Box {...BoxResultsStyle}>
        {selectedCompositions.length === 0 && <Center>
          <Alert 
            status="info" 
            width={[null, '60rem']}
            flexDirection="column"
            alignItems="start"
            fontSize="sm">
              <HStack mb={3}>
                <AlertIcon /><AlertTitle>How does it work?</AlertTitle>
              </HStack>
              <UnorderedList>
                <ListItem>Start by <b>selecting some compositions </b><Link href='/compositions'>(Click for more information)</Link></ListItem>
                <ListItem>You can then <b>fill remaining spots</b> with heroes sill availble.</ListItem>
              </UnorderedList>
          </Alert>
        </Center>}
        {selectedCompositions.length > 0 && <MultifightDashboardResults compositions={selectedCompositions}/>}
      </Box>
  </>);
}

export default MultifightDashboard;
