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
import { ProfileContext, ProfileContextProvider } from './components/Profile/ProfileContext';
import ArtifactDashboard from './components/ArtifactDashboard/ArtifactDashboard';

function App() {
  useTracking('G-F2JQMGEBKC');

  return (<>
    <Navbar/>
    <ProfileContext.Consumer>
      {({profile}) => 
        <Switch>
          <Route path="/usages">
            <UsageDashboard profile={profile}/>
          </Route>
          <Route path="/multifight">
            <MultifightDashboard profile={profile}/>
          </Route>
          <Route path="/heroes">
            <HeroDashboard profile={profile}/>
          </Route>
          <Route path="/compositions">
            <CompositionDashboard/>
          </Route>
          <Route path="/artifacts">
            <ArtifactDashboard profile={profile}/>
          </Route>
          <Route path="/">
            <Redirect to="/heroes" />
          </Route>
        </Switch>            
      }
    </ProfileContext.Consumer>
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
