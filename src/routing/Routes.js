import React from 'react';
import { Route } from 'react-router';

import View from '../pages/View';

export const Routes = (props) => (
  <div>
    <Route path="/view" component={View}/>
    <Route path="/callback" component={() => null}/>
  </div>
);

export default Routes;