import React from 'react';
import { Box, FormControl, Heading, Switch, Text, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { BoxResultsStyle, BoxControlsStyle } from '../../theme/styles';
import HeroFiltersSelector from '../Characteristic/HeroFiltersSelector';
import ArtifactDashboardHelp from './ArtifactDashboardHelp';
import { setPageTitle } from '../utils';
import { Profile } from '../../model/profile';
import { HeroFilters } from '../Characteristic/HeroFilters';
import Loader from '../Common/Loader';
import LinkPopover from '../Common/LinkPopover';
import { useLocation } from 'react-router';
import ArtifactDashboardTable from './ArtifactDashboardTable';
import artifactGuides from '../../data/artifacts';
import { Hero } from '../../model/heroes';
import { ArtifactGuideHero } from '../../model/artifacts';
import heroes from '../../data/heroes';
import { Artifact } from '../../model/characteristics/characteristics';

type ArtifactDashboardProps = {
  profile: Profile;
};

function ArtifactDashboard({profile}:ArtifactDashboardProps):JSX.Element {

  const [selection, setSelection] = useState<Array<string>>(artifactGuides.map(g => g.id));
  const [artifactResult, setArtifactResult] = useState<Map<Hero, ArtifactGuideHero>>(new Map());
  const [filters, setFilters] = useState<HeroFilters>();
  
  const [rendering, setRendering] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    setRendering(true);
  }, [pathname]);
  useEffect(() => {
    setPageTitle('Artifacts');
    calculateArtifact(artifactGuides.map(g => g.id));
    setTimeout(() => {setRendering(false);}, 1);
  }, []);

  if (rendering) {
    return <Loader/>;
  }

  function filterHeroes(filters:HeroFilters) {
    setFilters(filters);
  }

  function mergeScore(artifactsRanking:Array<Artifact>, artifacts:Array<Artifact>, score:number) {
    artifacts.reduce((res, a) => {
      const found = artifactsRanking.find(ar => ar.id === a.id);
      if (found) {
        found.score = Math.max(found.score||0, score);
      }
      else {
        artifactsRanking.push({...a, score: score});
      }
      return artifactsRanking;
    }, artifactsRanking);
  } 

  function getMapByScore(artifactsRanking: Array<Artifact>): Map<number, Array<Artifact>> {
    return artifactsRanking.reduce(function (map, artifact) {
      if (artifact.score) {
        const artifacts = map.get(artifact.score) || [];
        map.set(artifact.score, artifacts.concat(artifact));
      }
      return map;
    }, new Map<number, Array<Artifact>>());
  }

  function calculateArtifact(selectedGuideIds:Array<string>) {
    setArtifactResult(new Map());
    setTimeout(() => {
      const result = new Map<Hero, ArtifactGuideHero>(
        heroes
          .map(h => {
            // Build artifacts ranking
            const artifactsRanking:Array<Artifact> = [];
            artifactGuides
              .filter(g => selectedGuideIds.includes(g.id))
              .map(g => g.artifacts.get(h))
              .forEach(artifactGuideHero => {
                if (artifactGuideHero) {
                  mergeScore(artifactsRanking, artifactGuideHero.rank1, 3);
                  mergeScore(artifactsRanking, artifactGuideHero.rank2, 2);
                  mergeScore(artifactsRanking, artifactGuideHero.rank3, 1);
                }
              });

            // Sort by score and create result
            const ranking = Array.from(getMapByScore(artifactsRanking).entries())
              .sort(([score1,], [score2,]) => score2 - score1);
            const agh:ArtifactGuideHero = {
              rank1: ranking[0] ? ranking[0][1] : [],
              rank2: ranking[1] ? ranking[1][1] : [],
              rank3: ranking[2] ? ranking[2][1] : [],
            };
            return [h, agh];
          })
      );
      
      setArtifactResult(result);
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
    calculateArtifact(values);
  }

  const guideSwitchs = artifactGuides.map(g => {
    return (
      <FormControl key={g.id} display="flex" alignItems="center"> 
        <Switch value={g.id} isChecked={selection.includes(g.id)} mr="5px" onChange={onChange}/>
        <Text fontSize='xs' mr='0.5rem' >{g.name} by {g.author} ({g.updateDate})</Text>
        <LinkPopover links={g.links}/>
      </FormControl>
    );
  });

  return (<>
    <VStack {...BoxControlsStyle} alignItems='stretch'>
      <Box>
        <Heading size='xs'>Artifact guides :</Heading>
        {guideSwitchs}
      </Box>
      <HeroFiltersSelector onChange={filterHeroes} displaySignature={false} displayFurniture={false}/>
      <ArtifactDashboardHelp/>
    </VStack>
    <Box {...BoxResultsStyle}>
      {artifactResult.size > 0 ? <ArtifactDashboardTable profile={profile} artifactResult={artifactResult} filters={filters}/> : <Loader/>}
    </Box>
  </>);
}

export default ArtifactDashboard;
