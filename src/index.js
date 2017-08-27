import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import { initApolloClient } from './state/apolloClient';
import { initStore } from './state/store';
import Routes from './routing/Routes';
import { history } from './routing/history';

import App from './App';
import { substateKey as apolloStateKey } from './substates/apollo/constants';
import { substateKey as routerStateKey } from './substates/router/constants';

const apolloClient = initApolloClient();

const store = initStore({
  reducers: {
    [apolloStateKey]: apolloClient.reducer(),
    [routerStateKey]: routerReducer,
  },
  middleware: [
    apolloClient.middleware(),
    routerMiddleware(history)
  ]
});

const render = () =>
  ReactDOM.render(
    <AppContainer>
      <ApolloProvider client={apolloClient} store={store}>
        <App/>
      </ApolloProvider>
    </AppContainer>,
    document.getElementById('root')
  );

render();
if (module.hot) module.hot.accept('./App', () => render());
