import React from 'react';
import { Composition } from '../../model/compositions';
import { Box, HStack, VStack } from '@chakra-ui/react';
import { Role } from '../../model/characteristics/characteristics';
import CompositionBox from './CompositionBox';
import CharacteristicTable from '../Characteristic/CharacteristicTable';
import CharactericticBox from '../Characteristic/CharacteristicBox';

type CompositionBoxListProps = {
  compositions: Map<Composition, Role>|Array<Composition>;
};

function CompositionBoxList({ compositions}: CompositionBoxListProps):JSX.Element {
  const array = compositions instanceof Map ? Array.from(compositions.keys()) : compositions;
  const compositionBoxes = array.map((c) => {
    
    let charactericticElement = null;
    if (compositions instanceof Map) {
      const a = Array.from(compositions.entries())
        .find(([composition]) => c.id === composition.id);
      
      charactericticElement = a && <Box width='3rem'><CharactericticBox characterictic={a[1]} displayName={true}/></Box>;
    }

    return <HStack key={c.id} width="100%">
      <CompositionBox composition={c} />
      {charactericticElement}
    </HStack>;
  });

  let table = null;
  if (compositions instanceof Map) {
    const roles = new Map<Role, number>();
    compositions.forEach((r) => {
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
