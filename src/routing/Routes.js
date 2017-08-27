import React from 'react';
import { Route } from 'react-router';

import ViewPage from '../pages/View';
import Callback from '../Pages/Callback';

export const Routes = (props) => (
  <div>
    <Route path="/" render={ props => <ViewPage/> }/>
    <Route path="/callback" render={ (props) => <Callback {...props} /> } />
  </div>
);

export default Routes;