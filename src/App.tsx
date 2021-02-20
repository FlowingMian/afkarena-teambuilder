import React from "react";
import { ChakraProvider } from "@chakra-ui/react"
import {BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"

import theme from "./theme";
import Navbar from "./components/Layout/Navbar";

import UsageDashboard from "./components/UsageDashboard/UsageDashboard";
import HeroDashboard from "./components/HeroDashboard/HeroDashboard";
import CompositionDashboard from "./components/CompositionDashboard/CompositionDashboard";

function App() {
  return (
    <ChakraProvider theme={theme}>
        <Router>
          <Navbar/>
          <Switch>
            <Route path="/usages">
              <UsageDashboard/>
            </Route>
            <Route path="/heroes">
              <HeroDashboard/>
            </Route>
            <Route path="/compositions">
              <CompositionDashboard/>
            </Route>
            <Route path="/">
              <Redirect to="/usages" />
            </Route>
          </Switch>            
        </Router>
    </ChakraProvider>
  );
}

export default App;
