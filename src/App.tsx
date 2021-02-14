import React from "react";
import { ChakraProvider } from "@chakra-ui/react"
import {BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"

import theme from "./theme";
import Navbar from "./components/Layout/Navbar";
import Content from "./components/Layout/Content";

import UsageDashboard from "./components/UsageDashboard/UsageDashboard";
import HeroDashboard from "./components/HeroDashboard/HeroDashboard";

import CompositionList from "./components/Composition/CompositionList";
import compositions from "./data/compositions";

function App() {
  return (
    <ChakraProvider theme={theme}>
        <Router>
          <Navbar/>
          <Content>
            <Switch>
              <Route path="/usages">
                <UsageDashboard/>
              </Route>
              <Route path="/heroes">
                <HeroDashboard/>
              </Route>
              <Route path="/compositions">
                <CompositionList compositions={compositions}/>
              </Route>
              <Route path="/">
                <Redirect to="/usages" />
              </Route>
            </Switch>            
          </Content>
        </Router>
    </ChakraProvider>
  );
}

export default App;
