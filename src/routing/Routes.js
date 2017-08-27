import React from 'react';
import { Route } from 'react-router';

import ViewPage from '../pages/View';
import Callback from '../Pages/Callback';
import authService from '../Auth';

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    authService.handleAuthentication();
  }
};

export const Routes = (props) => (
  <div>
    <Route path="/view" render={ props => <ViewPage/> }/>
    <Route path="/callback" render={(props) => {
      handleAuthentication(props);
      return <Callback {...props} />
    }}/>
    {/*<Route path="/callback" render={ (props) => <Callback {...props} /> } />*/}
  </div>
);

export default Routes;