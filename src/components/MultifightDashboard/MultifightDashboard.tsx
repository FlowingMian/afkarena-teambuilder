import React, { useContext } from 'react';
import { Alert, AlertIcon, AlertTitle, Box, Center, HStack, Icon, IconButton, ListItem, UnorderedList } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { BoxResultsStyle } from '../../theme/styles';
import CompositionSelector from '../Composition/CompositionSelector';
import MultifightDashboardResults from './MultifightDashboardResults';
import compositions from '../../data/compositions';
import { sendViewItems } from '../../useTracking';
import { setPageTitle } from '../utils';
import { CompositionHeroes, Profile } from '../../model/profile';
import Loader from '../Common/Loader';
import { useLocation } from 'react-router';
import { isCustomComposition } from '../../model/customComposition';
import ControlBar from '../Common/ControlBar';
import { FiSave, FiUsers } from 'react-icons/fi';
import { ProfileContext } from '../Profile/ProfileContext';
import { NotOwned, Owned } from '../../model/characteristics/collectionStatuses';

type MultifightDashboardProps = {
  profile: Profile;
};

function MultifightDashboard({profile}:MultifightDashboardProps):JSX.Element {
  const {updateProfile} = useContext(ProfileContext);
  const { pathname } = useLocation();

  const [selectedCompositions, setSelectedCompositions] = useState<CompositionHeroes>(profile.compositions);
  
  const [rendering, setRendering] = useState<boolean>(true);
  const [disableNotOwned, setDisableNotOwned] = useState<boolean>(false);
  const [hasChanged, setHasChanged] = useState<boolean>(false);

  useEffect(() => {
    setRendering(true);
  }, [pathname]);
  useEffect(() => {
    setPageTitle('Multi-fight');
    setTimeout(() => {setRendering(false);}, 1);
  }, []);

  if (rendering) {
    return <Loader/>;
  }

  function filterCompositions(compositionIds:Array<string>) {
    sendViewItems('composition', compositionIds);

    const result = compositions
      .filter(c => compositionIds.includes(c.id))
      .reduce((res, c) => (res[c.id] = c.coreHeroes.heroes, res), {} as CompositionHeroes);

    Object.entries(selectedCompositions).forEach(([cId, heroes]) => {
      if (compositionIds.includes(cId) || isCustomComposition(cId)) {
        result[cId] = heroes;
      }
    });

    setSelectedCompositions(result);
  }

  function onChangeDisableNotOwned() {
    setDisableNotOwned(!disableNotOwned);
  }

  function onCompositionHeroesChange(compositionHeroes:CompositionHeroes) {
    setSelectedCompositions(compositionHeroes);
    setHasChanged(true);
  }

  function onSave() {
    updateProfile({
      ...profile,
      compositions: selectedCompositions
    });
    setHasChanged(false);
  }


  return (<>
    <ControlBar>
      <CompositionSelector defaultSelection={Object.keys(profile.compositions)} onValidate={filterCompositions}/>
      <IconButton 
        variant='outline' 
        icon={disableNotOwned ? NotOwned.iconURL?.() : Owned?.iconURL?.()}
        colorScheme={disableNotOwned ? 'red' : 'green'}
        aria-label='Disabled not owned' 
        onClick={onChangeDisableNotOwned}
      />
      <IconButton icon={<FiSave/>} aria-label='Save' onClick={onSave} colorScheme='red' disabled={!hasChanged}/>
    </ControlBar>
    <Box {...BoxResultsStyle}>
      {Object.keys(selectedCompositions).length === 0 && <Center>
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
            <ListItem>
              Start by clicking on the <b>button <Icon as={FiUsers}/></b> to select some compositions
            </ListItem>
            <ListItem>
              You can then <b>fill remaining spots</b> with heroes still available.
            </ListItem>
          </UnorderedList>
        </Alert>
      </Center>}

      {Object.keys(selectedCompositions).length > 0 && 
        <MultifightDashboardResults profile={profile} compositionHeroes={selectedCompositions} disableNotOwned={disableNotOwned} onCompositionHeroesChange={onCompositionHeroesChange}/>
      }
    </Box>
  </>);
}

export default MultifightDashboard;
