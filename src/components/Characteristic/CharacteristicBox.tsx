import { HStack, Image, Text, Tooltip } from "@chakra-ui/react"
import { Characterictic } from "../../model/characteristics";

type CharactericticBoxProps = {
  characterictic: Characterictic;
};

const SIZE:string = '20px';

function CharactericticBox({ characterictic }: CharactericticBoxProps) {
  return (
    <HStack spacing="0.25rem">
      <Tooltip label={characterictic.name} aria-label={characterictic.name}>
        <Image 
          src={characterictic.iconURL}
          alt={characterictic.name[0]}
          border='1px solid gray'
          boxSize={SIZE} 
        />
      </Tooltip>
      <Text>{characterictic.name}</Text>
    </HStack>
  );
}

export default CharactericticBox;