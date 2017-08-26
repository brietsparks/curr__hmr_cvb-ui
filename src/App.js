import React from 'react';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import Routes from './routing/Routes';
import { history } from './routing/history';

import AuthRequired from './components/Auth/Guard';

export const App = (props) => {
  return (
    <div>
      {/*<AuthRequired userIsAuthenticated="" dispatch=""/>*/}

      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
    </div>
  );
};

export default App;