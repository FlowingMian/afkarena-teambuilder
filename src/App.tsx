import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import {BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import theme from './theme';
import Navbar from './components/Layout/Navbar';

import UsageDashboard from './components/UsageDashboard/UsageDashboard';
import HeroDashboard from './components/HeroDashboard/HeroDashboard';
import CompositionDashboard from './components/CompositionDashboard/CompositionDashboard';
import { useTracking } from './useTracking';
import MultifightDashboard from './components/MultifightDashboard/MultifightDashboard';
import Amplify from 'aws-amplify';
import awsExports from './aws-exports';
import { ProfileContextProvider } from './components/Profile/ProfileContext';
Amplify.configure(awsExports);

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
        <Redirect to="/heroes" />
      </Route>
    </Switch>            
  </>);
}

function Wrapper():JSX.Element {
  return <ChakraProvider theme={theme}>
    <ProfileContextProvider>
      <Router>
        <App/>
      </Router>
    </ProfileContextProvider>
  </ChakraProvider>;
}

export default Wrapper;
