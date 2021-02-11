import { Box, Flex, Heading } from '@chakra-ui/react'
import { CSSObject } from '@emotion/react';

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
