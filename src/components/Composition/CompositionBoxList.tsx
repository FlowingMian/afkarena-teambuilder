import { Composition } from "../../model/compositions";
import { HStack, VStack } from '@chakra-ui/react'
import { Role } from "../../model/characteristics";
import CompositionBox from "./CompositionBox";
import CharactericticBox from "../Characteristic/CharacteristicBox";
import CharacteristicTable from "../Characteristic/CharacteristicTable";

type CompositionBoxListProps = {
  compositions: Map<Composition, Role> | Array<Composition>;
};

function CompositionBoxList({ compositions,}: CompositionBoxListProps) {
  const array = compositions instanceof Map ? Array.from(compositions.keys()) : compositions;
  const compositionBoxes = array.map((c) => 
    <HStack key={c.id} width="100%">
      <CompositionBox composition={c} />
      {/* {compositions instanceof Map && <CharactericticBox characterictic={compositions.get(c) as Role}/>} */}
    </HStack>
  );

  let table = null;
  if (compositions instanceof Map) {
    const roles = new Map<Role, number>();
    compositions.forEach((r, c) => {
      roles.set(r, roles.has(r) ? roles.get(r) as number + 1 : 1);
    });
    table = <CharacteristicTable characterictics={roles} />;
  }

  return <VStack>
    {table}
    {compositionBoxes}
  </VStack>;
}

export default CompositionBoxList;
