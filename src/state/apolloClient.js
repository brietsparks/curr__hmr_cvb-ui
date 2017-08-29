import { ApolloClient, createNetworkInterface } from 'react-apollo';
import { graphqlApi } from '../config';
import { accessTokenKey } from '../substates/auth/constants';

const networkInterface = createNetworkInterface({
  uri: graphqlApi.api.root
});

networkInterface.use([{
  applyMiddleware(req, next) {
    req.options.headers = req.options.headers || {};

    const token = localStorage.getItem(accessTokenKey);
    req.options.headers.authorization = token ? `Bearer ${token}` : null;

    console.log(req);

    next();
  }
}]);

export const initApolloClient = (initialState = {}) => new ApolloClient({
  initialState,
  dataIdFromObject: o => o.id,
  networkInterface,
  connectToDevTools: true,
});
