import React from 'react';
import PropTypes from 'prop-types';

import Auth from './Login';

import { loginShow } from '../../substates/auth/actions';

class AuthRequired extends React.Component {
  static propTypes = {
    userIsAuthenticated: PropTypes.bool.isRequired,
    guestComponent: PropTypes.func,
    dispatch: PropTypes.func.isRequired,
  };

  render() {
    const dispatch = this.props.dispatch;

    const guestComponent = this.props.guestComponent === undefined
      ? <Auth authenticate={ () => dispatch(loginShow()) } />
      : null;

    return this.props.userIsAuthenticated
      ? <div>{ this.props.children }</div>
      : guestComponent
    ;
  }
}

export default AuthRequired;
