import React from 'react';
import { Alert, AlertIcon, Button, HStack, Icon, IconButton, Input, InputGroup, InputLeftElement, InputRightElement, Spinner, Text, VStack } from '@chakra-ui/react';
import { Composition } from '../../model/compositions';
import { useEffect, useState } from 'react';
import compositions from '../../data/compositions';
import { sendSearch } from '../../useTracking';
import qs from 'qs';
import { useHistory, useLocation } from 'react-router-dom';
import { FiSearch, FiX } from 'react-icons/fi';

type CompositionSearchProps = {
    onChange:(compositionIds:Array<string>) => void;
  };

function CompositionSearch({onChange}:CompositionSearchProps):JSX.Element {
  const history = useHistory();
  const { search, pathname } = useLocation();
  const queryParam = qs.parse(search, {ignoreQueryPrefix: true}).query as string || '';
    
  const [query, setQuery] = useState(queryParam);
  const [searching, setSearching] = useState(false);

  useEffect(startSearch, [query]);

  function startSearch() {
    if (queryParam) {
      history.replace(pathname);
    }
    setSearching(true);
    const timeOutId = setTimeout(runSearch, 300);
    return () => clearTimeout(timeOutId);
  }

  function runSearch() {
    sendSearch('composition', query);
    const searchTerms = query.split(' ');
    const compositionIds = compositions
      .filter(c => query === '' || matchSearch(c, searchTerms.map(t => t.toLowerCase())))
      .map(c => c.id);
    onChange(compositionIds);
    setSearching(false);
  }
  function matchSearch(composition:Composition, searchTerms:Array<string>):boolean {
    let terms = [...composition.name.split(' ')];
    [composition.coreHeroes].forEach(c => {
      terms.push(...c.heroes
        .flatMap(h => [h.id, ...h.name.split(' '), ...h.nickname])
        .flatMap(n => [n, n + '-' + c.role.name])
      );
    });
    [...composition.flexHeroes].forEach(c => {
      terms.push(...c.heroes
        .flatMap(h => [h.id, ...h.name.split(' '), ...h.nickname])
        .flatMap(n => [n, n + '-' + c.role.name, n + '-flex']));
    });
    terms.push(...composition.tags);
    terms.push(...composition.author.split(' '));
    terms = terms.map(t => t.toLowerCase());
        
    return searchTerms.every(st => terms.includes(st));
  }

  return (
    <VStack wrap='wrap' spacing={1}>
      <InputGroup width='100%'>
        {
        // eslint-disable-next-line react/no-children-prop
        }<InputLeftElement pointerEvents="none" children={searching ? <Spinner size="sm"/> : <Icon as={FiSearch} />}/>
        <Input placeholder="Search name, tag, hero, role,..." value={query} onChange={event => setQuery(event.target.value)}/>
        <InputRightElement>
          <IconButton variant="ghost" size="xs" icon={<Icon as={FiX} />} aria-label="Clear" onClick={() => setQuery('')} />
        </InputRightElement>
      </InputGroup>
      <Alert status="info" fontSize="xs" p={1}>
        <AlertIcon />
        <HStack wrap='wrap'>
          <Text>Syntax examples :</Text> 
          <Button variant="link" size='xs' onClick={() => setQuery('Portal')}>Portal</Button>
          <Button variant="link" size='xs' onClick={() => setQuery('PvE')}>PvE</Button>
          <Button variant="link" size='xs' onClick={() => setQuery('Eironn-core')}>Eironn-core</Button>
          <Button variant="link" size='xs' onClick={() => setQuery('Rowan-flex Ezio')}>Rowan-flex Ezio</Button>
          <Button variant="link" size='xs' onClick={() => setQuery('Silas-enabler')}>Silas-enabler</Button>
        </HStack>
      </Alert>
    </VStack>
  );
}

export default CompositionSearch;


