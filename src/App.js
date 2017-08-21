import React, { Component } from 'react';
import { connect } from 'react-redux';

import Viewer from './components/Viewer';

import { userIsAuthenticated as check} from './substates/auth/selectors';

export class App extends Component {
  render() {

    const userIsAuthenticated = check(this.props.auth);
    return (
      <Viewer
        userIsAuthenticated={userIsAuthenticated}
        dispatch={this.props.dispatch}
      />
    );
  }
}

export default connect(state => state)(App);