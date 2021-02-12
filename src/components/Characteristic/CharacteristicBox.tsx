import { Box, Image, Tooltip } from "@chakra-ui/react"
import { Characterictic } from "../../model/characteristics";

type CharactericticBoxProps = {
  characterictic: Characterictic;
};

const SIZE:string = '1.25rem';

function CharactericticBox({ characterictic }: CharactericticBoxProps) {
  return (
    <Box backgroundColor='rgba(0, 0, 0, 0.125)' width={SIZE} height={SIZE} >
      <Tooltip label={characterictic.name} aria-label={characterictic.name}>
        <Image 
          src={characterictic.iconURL}
          alt={characterictic.name[0]}
          boxSize={SIZE} 
        />
      </Tooltip>
    </Box>
  );
}

export default CharactericticBox;