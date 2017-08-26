import React from 'react';
import PropTypes from 'prop-types';

import Auth from './Login';

import { mockAuth } from '../../substates/auth/actions';

class AuthRequired extends React.Component {
  static propTypes = {
    userIsAuthenticated: PropTypes.bool.isRequired,
    guestComponent: PropTypes.func,
    dispatch: PropTypes.func.isRequired,
  };

  render() {
    const guestComponent = this.props.guestComponent === undefined
      ? <Auth authenticate={ () => this.props.dispatch(mockAuth()) } />
      : null;

    return this.props.userIsAuthenticated
      ? <div>{ this.props.children }</div>
      : guestComponent
    ;
  }
}

export default AuthRequired;
