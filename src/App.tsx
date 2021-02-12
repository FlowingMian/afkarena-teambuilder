import React from "react";
import { ChakraProvider } from "@chakra-ui/react"
import { Box } from "@chakra-ui/react"
import {BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import heroes from "./data/heroes";
import compositions from "./data/compositions";
import HeroList from "./components/Hero/HeroList";
import CompositionList from "./components/Composition/CompositionList";
import AnalysisByUsage from "./components/AnalysisByUsage/AnalysisByUsage";
import { BoxCardStyle } from './theme/styles';
import theme from "./theme";
import Navbar from "./components/Layout/Navbar";
import Content from "./components/Layout/Content";
import CharactericticsDistribution from "./components/Characteristic/HeroCharacteristicsTable";

function App() {
  return (
    <ChakraProvider theme={theme}>
        <Router>
          <Navbar/>
          <Content>
            <Switch>
              <Route path="/tierlist">
              <AnalysisByUsage heroes={heroes} compositions={compositions}/>
              </Route>
              <Route path="/heroes">
                <Box {...BoxCardStyle}>
                  <CharactericticsDistribution heroes={heroes}/>
                  <HeroList heroes={heroes} />
                </Box>
              </Route>
              <Route path="/compositions">
                <CompositionList compositions={compositions}/>
              </Route>
              <Route path="/">
                <Redirect to="/tierlist" />
              </Route>
            </Switch>            
          </Content>
        </Router>
    </ChakraProvider>
  );
}

export default App;
