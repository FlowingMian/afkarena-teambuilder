import React from "react";
import { ChakraProvider } from "@chakra-ui/react"
import { Box } from "@chakra-ui/react"
import heroes from "./data/heroes";
import compositions from "./data/compositions";
import HeroList from "./components/Hero/HeroList";
import CompositionList from "./components/Composition/CompositionList";
import AnalysisByUsage from "./components/AnalysisByUsage/AnalysisByUsage";
import { BoxCardProps } from "./components/style";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <AnalysisByUsage heroes={heroes} compositions={compositions}/>
        <Box {...BoxCardProps}>
          <HeroList heroes={heroes} />
        </Box>
        <CompositionList compositions={compositions}/>
      </div>
    </ChakraProvider>
  );
}

export default App;
