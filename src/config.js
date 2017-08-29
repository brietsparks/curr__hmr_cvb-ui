export const app = {}; {
  app.domain = 'localhost:3000';
  app.url = 'http://' + app.domain;
}

export const graphqlApi = { api: {} }; {
  graphqlApi.domain = 'localhost:3001';
  graphqlApi.url = 'http://' + graphqlApi.domain;
  graphqlApi.api.root = graphqlApi.url + '/graphql';
}

export const builderService = { auth0: {} }; {
  builderService.auth0.identifier = 'builder_service';
}

// export const historyApi = { auth0: {} }; {
//   historyApi.domain = 'localhost:5000';
//   historyApi.url = 'http://' + historyApi.domain;
//   historyApi.auth0.identifier = 'history_service';
// }
//
// export const skillApi = { auth0: {} }; {
//   skillApi.domain = 'localhost:5001';
//   skillApi.url = 'http://' + skillApi.domain;
//   skillApi.auth0.identifier = 'skill_service';
// }