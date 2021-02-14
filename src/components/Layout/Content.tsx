import { Box, } from '@chakra-ui/react'

const ContentStyle = {
  marginLeft: '150px'
}

type Props = {
  children?: React.ReactNode;
};

function Content({children}:Props) {
  return (
    <Box {...ContentStyle}>
      {children}
    </Box>
  );
}

export default Content;
