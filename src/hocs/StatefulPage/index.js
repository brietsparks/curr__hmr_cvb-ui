import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { initUser } from '../../substates/auth/actions';
import { userIsAuthenticated } from '../../substates/auth/selectors';
import { accessTokenKey } from '../../substates/auth/constants';

const enhancer = Component => class WithUser extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  };

  componentWillMount() {
    const idToken = localStorage.getItem(accessTokenKey);

    if (idToken && !userIsAuthenticated(this.props)) {
      this.props.dispatch(initUser());
    }
  }

  render() {
    return <Component {...this.props} />
  }
};

const withState = (Component, mapStateToProps) =>
  connect(mapStateToProps)(enhancer(Component));

export default withState;