import React from 'react';
import PropTypes from 'prop-types';

export const Login = ({ authenticate }) => (
  <div>
    <button onClick={ () => authenticate() }>Login</button>
  </div>
);

export default Login;