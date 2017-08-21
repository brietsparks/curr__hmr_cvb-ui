import { ApolloClient, createNetworkInterface } from 'react-apollo';
import { graphqlEndpoint } from '../config';

export const initApolloClient = (initialState = {}) => new ApolloClient({
  initialState,
  dataIdFromObject: o => o.id,
  networkInterface: createNetworkInterface({ uri: graphqlEndpoint }),
  connectToDevTools: true,
});
