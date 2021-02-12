import { Table, Tbody, Tr, Td} from "@chakra-ui/react";
import { Characterictic } from "../../model/characteristics";
import CharactericticBox from "./CharacteristicBox";

type CharacteristicTableProps = {
  characterictics: Map<Characterictic, number>;
};

function CharacteristicTable({ characterictics }: CharacteristicTableProps) {

  const charactericticRows =  Array.from(characterictics.keys()).map((c) => (
    <Tr key={c.id}>
      <Td><CharactericticBox characterictic={c}/></Td>    
      <Td isNumeric>{characterictics.get(c)}</Td>    
    </Tr>
  ));

  return (
    <Table size="xs" variant='simple'>
      <Tbody>
        {charactericticRows}
      </Tbody>
    </Table>
  );
}

export default CharacteristicTable;
