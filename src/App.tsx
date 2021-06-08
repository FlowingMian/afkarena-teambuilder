import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import {BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import theme from './theme';
import UsageDashboard from './components/UsageDashboard/UsageDashboard';
import HeroDashboard from './components/HeroDashboard/HeroDashboard';
import CompositionDashboard from './components/CompositionDashboard/CompositionDashboard';
import { useTracking } from './useTracking';
import MultifightDashboard from './components/MultifightDashboard/MultifightDashboard';
import { ProfileContext, ProfileContextProvider } from './components/Profile/ProfileContext';
import ArtifactDashboard from './components/ArtifactDashboard/ArtifactDashboard';
import SignatureItemsDashboard from './components/SignatureItemsDashboard/SignatureItemsDashboard';
import WishlistDashboard from './components/Wishlistdashboard/WishlistDashboard';

function App() {
  useTracking('G-F2JQMGEBKC');

  return (<>
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
          {/* <Route path="/wishlist">
            <WishlistDashboard profile={profile}/>
          </Route>
          <Route path="/signatureItems">
            <SignatureItemsDashboard profile={profile}/>
          </Route> */}
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
