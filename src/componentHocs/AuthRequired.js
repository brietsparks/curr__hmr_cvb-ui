import React from 'react';
import PropTypes from 'prop-types';

import Auth from '../components/Auth';

import { mockAuth } from '../substates/auth/actions';

class AuthRequired extends React.Component {
  static propTypes = {
    userIsAuthenticated: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired,
  };

  render() {
    return this.props.userIsAuthenticated
      ? <div>{ this.props.children }</div>
      : <Auth authenticate={ () => this.props.dispatch(mockAuth()) } />
    ;
  }
}

export default AuthRequired;
