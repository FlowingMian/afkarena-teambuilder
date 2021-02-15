import { Code, HStack, Input, InputGroup, InputLeftElement, Spinner, Text } from "@chakra-ui/react";
import { InfoIcon, SearchIcon } from '@chakra-ui/icons'
import { Composition } from "../../model/compositions";
import { useEffect, useState } from "react";
import compositions from "../../data/compositions";

type CompositionSearchProps = {
    onChange:(compositionIds:Array<string>) => void;
  };

function CompositionSearch({onChange}:CompositionSearchProps) {
    const [query, setQuery] = useState("");
    const [searching, setSearching] = useState(false);

    useEffect(startSearch, [query]);

    function startSearch() {
        setSearching(true)
        const timeOutId = setTimeout(runSearch, 300);
        return () => clearTimeout(timeOutId);
    }

    function runSearch() {
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
                .flatMap(h => [h.hero.name, ...h.hero.nickname])
                .flatMap(n => [n, n + '-' + c.role.name])
            );
        });
        [...composition.flexHeroes].forEach(c => {
            terms.push(...c.heroes
                .flatMap(h => [h.hero.name, ...h.hero.nickname])
                .flatMap(n => [n, n + '-' + c.role.name, n + '-flex']));
        });
        terms.push(...composition.tags);
        terms = terms.map(t => t.toLowerCase());
        
        return searchTerms.every(st => terms.includes(st));
    }

  return (
    <HStack>
        <InputGroup width='25%'>
            <InputLeftElement pointerEvents="none"children={searching ? <Spinner size="sm"/> :<SearchIcon />}/>
            <Input placeholder="Search..." onChange={event => setQuery(event.target.value)}/>
        </InputGroup>
        <Text width='75%'>
            <InfoIcon mr='0.25rem'/>
            Try these examples : <Code>portal</Code> / <Code>Raine</Code> / <Code>Eironn-core</Code> / <Code>Skreg-flex</Code> / <Code>Silas-enabler</Code>
        </Text>
    </HStack>
  );
}

export default CompositionSearch;


