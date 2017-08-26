import React from 'react';
import PropTypes from 'prop-types';

export default ({ logout }) => (
  <div>
    <button onClick={ () => logout() }>Logout</button>
  </div>
)