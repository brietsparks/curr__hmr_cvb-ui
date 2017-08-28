import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';

import AuthRequired from '../Guard';
import Auth from '../Login';

const AuthenticatedComponent = () => <p>Auth</p>;

const setup = ({ userIsAuthenticated, showAuth }) => {
  return shallow(
    <AuthRequired
      userIsAuthenticated={userIsAuthenticated}
      showAuth={showAuth}
      dispatch={() => null}
    >
      <AuthenticatedComponent/>
    </AuthRequired>
  )
};

it('displays child component when userIsAuthenticated is true', () => {
  const wrapper = setup({ userIsAuthenticated: true, });
  expect(wrapper.find(AuthenticatedComponent).length).toEqual(1);
});

it('displays Auth when userIsAuthenticated is false', () => {
  const wrapper = setup({ userIsAuthenticated: false, });
  expect(wrapper.find(Auth).length).toEqual(1);
});

it('displays Auth when userIsAuthenticated is false and showAuth is false', () => {
  const wrapper = setup({
    userIsAuthenticated: false,
    showAuth: false
  });
  expect(wrapper.find(Auth).length).toEqual(0);
});