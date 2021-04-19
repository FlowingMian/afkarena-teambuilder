import React, { useContext } from 'react';
import { Alert, AlertIcon, AlertTitle, Box, Center, HStack, Icon, ListItem, UnorderedList } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
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
import { FiUsers } from 'react-icons/fi';
import { ProfileContext } from '../Profile/ProfileContext';
import getDeviceStyle from '../../theme/deviceStyle/deviceStyle';
import SaveButton from '../Common/SaveButton';
import CollectionStateButton from '../Common/CollectionStatusButton';

type MultifightDashboardProps = {
  profile: Profile;
};

function MultifightDashboard({profile}:MultifightDashboardProps):JSX.Element {
  
  const deviceStyle = getDeviceStyle();
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


  return (<HStack {...deviceStyle.viewport}>
    <ControlBar deviceStyle={deviceStyle}>
      <CollectionStateButton deviceStyle={deviceStyle} onChange={onChangeDisableNotOwned} disableNotOwned={disableNotOwned}/>
      <SaveButton deviceStyle={deviceStyle} onSave={onSave} disabled={!hasChanged}/>
      <CompositionSelector deviceStyle={deviceStyle} defaultSelection={Object.keys(profile.compositions)} onValidate={filterCompositions}/>
    </ControlBar>
    <Box {...deviceStyle.dashboard.viewport}>
      <Box {...deviceStyle.dashboard.results}>
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
    </Box>
  </HStack>);
}

export default MultifightDashboard;
