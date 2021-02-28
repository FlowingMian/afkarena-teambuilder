import React from "react";
import { ChakraProvider } from "@chakra-ui/react"
import {BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"

import theme from "./theme";
import Navbar from "./components/Layout/Navbar";

import UsageDashboard from "./components/UsageDashboard/UsageDashboard";
import HeroDashboard from "./components/HeroDashboard/HeroDashboard";
import CompositionDashboard from "./components/CompositionDashboard/CompositionDashboard";
import { useTracking } from "./useTracking";
import MultifightDashboard from "./components/MultifightDashboard/MultifightDashboard";

function App() {
  useTracking('G-F2JQMGEBKC');

  return (<>
    <Navbar/>
    <Switch>
      <Route path="/usages">
        <UsageDashboard/>
      </Route>
      <Route path="/multifight">
        <MultifightDashboard/>
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
  </>);
}

function Wrapper() {
  return <ChakraProvider theme={theme}>
      <Router>
        <App/>
      </Router>
  </ChakraProvider>
}

export default Wrapper;
