import React from 'react';
import PropTypes from 'prop-types';

export default ({ authenticate }) => (
  <div>
    <button onClick={ () => authenticate() }>Login</button>
  </div>
)