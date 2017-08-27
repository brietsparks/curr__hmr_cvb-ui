import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { substateKey as authStateKey } from '../../substates/auth/constants';
import { authStateShape } from '../../substates/auth/shape';
import { userIsAuthenticated as check} from '../../substates/auth/selectors';

import AuthRequired from '../../components/Auth/Guard';
import Logout from '../../components/Auth/Logout';

export const withLayout = (Component) => class Layout extends Component {
  static propTypes = {
    [authStateKey]: PropTypes.shape(authStateShape).isRequired,
    dispatch: PropTypes.func.isRequired,
  };

  render() {
    const dispatch = this.props.dispatch;
    const userIsAuthenticated = check(this.props[authStateKey]);

    return (
      <div>
        <header>
          <AuthRequired userIsAuthenticated={userIsAuthenticated} dispatch={dispatch}>
            <Logout unauthenticate={() => null}/>
          </AuthRequired>
        </header>

        <Component
          userIsAuthenticated={userIsAuthenticated}
          {...this.props}
        />
      </div>
    );
  }
};
