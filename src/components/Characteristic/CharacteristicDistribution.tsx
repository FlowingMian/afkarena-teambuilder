import { Flex, Table, Tbody, Tr, Td, Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverBody, Button } from "@chakra-ui/react";
import { Hero } from "../../model/heroes";
import { getCharactericticsDistribution } from "../../model/stats";

type CharactericticsDistributionProps = {
  heroes: Array<Hero>;
};

function CharactericticsDistribution({ heroes }: CharactericticsDistributionProps) {

  const heroCharactericticsDistribution = getCharactericticsDistribution(heroes);
  const factionRows =  Array.from(heroCharactericticsDistribution.factions.keys()).map((f) => (
      <Tr key={f.id}>
        <Td>{f.name}</Td>    
        <Td>{heroCharactericticsDistribution.factions.get(f)}</Td>    
      </Tr>
    )
  );
  const classRows =  Array.from(heroCharactericticsDistribution.classes.keys()).map((c) => (
      <Tr key={c.id}>
        <Td>{c.name}</Td>    
        <Td>{heroCharactericticsDistribution.classes.get(c)}</Td>    
      </Tr>
    )
  );
  const attributeRows =  Array.from(heroCharactericticsDistribution.attributes.keys()).map((a) => (
      <Tr key={a.id}>
        <Td>{a.name}</Td>    
        <Td>{heroCharactericticsDistribution.attributes.get(a)}</Td>    
      </Tr>
    )
  );
  
  return (
    <Popover>

      <PopoverTrigger>
        <Button variant='ghost'>{heroes.length}</Button>
      </PopoverTrigger>

      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody>
          <Flex direction='row'>
            <Table size="xs">
              <Tbody>
                {factionRows}
              </Tbody>
            </Table>

            <Table size="xs">
              <Tbody>
                {classRows}
                </Tbody>
            </Table>

            <Table size="xs">
              <Tbody>
                {attributeRows}
                </Tbody>
            </Table>
          </Flex>
        </PopoverBody>
      </PopoverContent>

    </Popover>
    
  );
}

export default CharactericticsDistribution;
