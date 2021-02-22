import { HStack, Image, Text, Tooltip } from "@chakra-ui/react"
import { Characterictic } from "../../model/characteristics";

type CharactericticBoxProps = {
  characterictic: Characterictic;
  displayName?: boolean;
};

const SIZE:string = '20px';

function CharactericticBox({ characterictic, displayName = false }: CharactericticBoxProps) {
  return (
    <HStack spacing="0.25rem">
      <Tooltip label={characterictic.name} aria-label={characterictic.name}>
        <Image 
          src={characterictic.iconURL}
          alt={characterictic.name[0]}
          boxSize={SIZE} 
        />
      </Tooltip>
      {displayName && <Text fontSize='xs'>{characterictic.name}</Text>}
    </HStack>
  );
}

export default CharactericticBox;