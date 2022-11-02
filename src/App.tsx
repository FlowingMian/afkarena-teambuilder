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
import { DataSourceContext, DataSourceContextProvider } from './components/DataSource/DataSourceContext';

function App() {
  useTracking('G-F2JQMGEBKC');

  return (<>
    <DataSourceContext.Consumer>
      {(datasource) => 
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
                <HeroDashboard datasource={datasource} profile={profile}/>
              </Route>
              <Route path="/compositions">
                <CompositionDashboard/>
              </Route>
              <Route path="/">
                <Redirect to="/heroes" />
              </Route>
            </Switch>            
          }
        </ProfileContext.Consumer>
      }
    </DataSourceContext.Consumer>
  </>);
}

function Wrapper():JSX.Element {
  return <ChakraProvider theme={theme}>
    <DataSourceContextProvider>
      <ProfileContextProvider>
        <Router>
          <App/>
        </Router>
      </ProfileContextProvider>
    </DataSourceContextProvider>
  </ChakraProvider>;
}

export default Wrapper;
