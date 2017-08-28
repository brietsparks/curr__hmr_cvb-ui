import React from 'react';
import PropTypes from 'prop-types';

import Auth from './Login';

import { loginShow } from '../../substates/auth/actions';

class AuthRequired extends React.Component {
  static propTypes = {
    userIsAuthenticated: PropTypes.bool.isRequired,
    showAuth: PropTypes.bool,
    dispatch: PropTypes.func.isRequired,
  };

  static defaultProps = {
    showAuth: true
  };

  render() {
    const authenticate = () => this.props.dispatch(loginShow());

    return this.props.userIsAuthenticated
      ? <div>{ this.props.children }</div>
      : this.props.showAuth ? <Auth authenticate={authenticate} /> : null
    ;
  }
}

export default AuthRequired;
