import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const rootEl = document.getElementById('root');

import { ApolloProvider } from 'react-apollo';
import { initApolloClient } from './state/apolloClient';
import { initStore } from './state/store';

const apolloClient = initApolloClient();
const store = initStore({
  reducers: { apollo: apolloClient.reducer() },
  middleware: [ apolloClient.middleware() ]
});

const render = Component =>
  ReactDOM.render(
    <AppContainer>
      <ApolloProvider client={apolloClient} store={store}>
        <Component />
      </ApolloProvider>
    </AppContainer>,
    rootEl
  );

render(App);
if (module.hot) module.hot.accept('./App', () => render(App));
