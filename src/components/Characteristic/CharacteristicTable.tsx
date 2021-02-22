import { VStack, HStack, Text} from "@chakra-ui/react";
import { Characterictic } from "../../model/characteristics";
import CharactericticBox from "./CharacteristicBox";

type CharacteristicTableProps = {
  characterictics: Map<Characterictic, number> | Array<Characterictic>;
  displayName?: boolean;
};

function CharacteristicTable({ characterictics, displayName = true }: CharacteristicTableProps) {

  const array = characterictics instanceof Map ? Array.from(characterictics.keys()) : characterictics;
  const charactericticRows =  array.map((c) => (
    <HStack key={c.id} width="100%" justifyContent='space-between'>
      <CharactericticBox characterictic={c} displayName={displayName}/>   
      {characterictics instanceof Map && <Text fontSize="xs">{characterictics.get(c)}</Text>}
    </HStack>
  ));

  return (
    <VStack alignItems='start'>
        {charactericticRows}
    </VStack>
  );
}

export default CharacteristicTable;
