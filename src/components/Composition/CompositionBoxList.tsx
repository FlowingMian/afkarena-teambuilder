import { Composition } from "../../model/compositions";
import { HStack, VStack } from '@chakra-ui/react'
import { Role } from "../../model/characteristics";
import CompositionBox from "./CompositionBox";
import CharactericticBox from "../Characteristic/CharacteristicBox";

type CompositionBoxListProps = {
  compositions: Map<Composition, Role> | Array<Composition>;
};

function CompositionBoxList({ compositions,}: CompositionBoxListProps) {
  const array = compositions instanceof Map ? Array.from(compositions.keys()) : compositions;
  const compositionBoxes = array.map((c) => 
    <HStack key={c.id} width="100%" >
      <CompositionBox composition={c} />
      {compositions instanceof Map && <CharactericticBox characterictic={compositions.get(c) as Role}/>}
    </HStack>
  );

  return <VStack>
    {compositionBoxes}
  </VStack>;
}

export default CompositionBoxList;
