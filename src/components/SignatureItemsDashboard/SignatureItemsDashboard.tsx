import React from 'react';
import { Box, FormControl, Heading, HStack, Switch, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import HeroFiltersSelector from '../HeroFilters/HeroFiltersSelector';
import SignatureItemsDashboardHelp from './SignatureItemsDashboardHelp';
import { setPageTitle } from '../utils';
import { Profile } from '../../model/profile';
import { HeroFilters } from '../HeroFilters/HeroFilters';
import Loader from '../Common/Loader';
import LinkPopover from '../Common/LinkPopover';
import { useLocation } from 'react-router';
import SignatureItemsDashboardTable from './SignatureItemsDashboardTable';
import guides from '../../data/signatureItems';
import { Hero } from '../../model/heroes';
import { SignatureItemsGuideHero } from '../../model/signatureItems';
import ControlBar from '../Common/ControlBar';
import getDeviceStyle from '../../theme/deviceStyle/deviceStyle';

type SignatureItemsDashboardProps = {
  profile: Profile;
};

function SignatureItemsDashboard({profile}:SignatureItemsDashboardProps):JSX.Element {

  const deviceStyle = getDeviceStyle();

  const defaultSelection = guides.map(g => g.id);
  const [selection, setSelection] = useState<Array<string>>(defaultSelection);
  const [signatureItemsResult, setSignatureItemsResult] = useState<Map<Hero, SignatureItemsGuideHero>>(new Map());
  const [filters, setFilters] = useState<HeroFilters>();
  
  const [rendering, setRendering] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    setRendering(true);
  }, [pathname]);
  useEffect(() => {
    setPageTitle('Signature Items');
    calculateSignatureItems(defaultSelection);
    setTimeout(() => {setRendering(false);}, 1);
  }, []);

  if (rendering) {
    return <Loader/>;
  }

  function filterHeroes(filters:HeroFilters) {
    setFilters(filters);
  }

  function calculateSignatureItems(selectedGuideIds:Array<string>) {
    setSignatureItemsResult(new Map());
    setTimeout(() => {
      const result = guides
        .filter(g => selectedGuideIds.includes(g.id))[0].signatureItems;
        
      // const result = new Map<Hero, SignatureItemsGuideHero>(
      //   heroes
      //     .map(h => {
      //       const signatureItemsRating:Rating = Unknown;
      //       return signatureItemsGuides
      //         .filter(g => selectedGuideIds.includes(g.id))
      //         .map(g => g.signatureItems.get(h))
      //         .map(signatureItemsGuideHero => {
      //             const sigh:SignatureItemsGuideHero = {
      //               _10: signatureItemsGuideHero._10,
      //               _20: signatureItemsGuideHero._20,
      //               _30: signatureItemsGuideHero._30,
      //             return [h, agh];
      //           }
      //         });
      //     })
      // );
      setSignatureItemsResult(result);
    }, 1);
  }

  function onChange(e:React.ChangeEvent<HTMLInputElement>) {
    let values:Array<string>;
    if (e.target.checked) {
      values = [...selection, e.target.value];
    }
    else {
      values = selection.filter(id => id !== e.target.value);
    }
    setSelection(values);
    calculateSignatureItems(values);
  }

  const guideSwitchs = guides.map(g => {
    return (
      <FormControl key={g.id} display="flex" alignItems="center"> 
        <Switch value={g.id} isChecked={selection.includes(g.id)} mr="5px" onChange={onChange}/>
        <Text fontSize='xs' mr='0.5rem' >{g.name} by {g.author} ({g.updateDate})</Text>
        <LinkPopover links={g.links}/>
      </FormControl>
    );
  });

  return (<HStack {...deviceStyle.viewport}>
    <ControlBar deviceStyle={deviceStyle}>
      <SignatureItemsDashboardHelp deviceStyle={deviceStyle}/>
      <HeroFiltersSelector onChange={filterHeroes} displayFurniture={false} displayArtifact={false}/>
    </ControlBar>
    <Box {...deviceStyle.dashboard.viewport}>
      <Box {...deviceStyle.dashboard.controls}>
        <Heading size='xs'>SignatureItems guides :</Heading>
        {guideSwitchs}
      </Box>
      <Box {...deviceStyle.dashboard.results}>
        {signatureItemsResult.size > 0 ? <SignatureItemsDashboardTable profile={profile} signatureItemsResult={signatureItemsResult} filters={filters}/> : <Loader/>}
      </Box>
    </Box>
  </HStack>);
}

export default SignatureItemsDashboard;
