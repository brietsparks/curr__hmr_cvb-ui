import React from 'react';
import PropTypes from 'prop-types';

export const Logout = ({ unauthenticate }) => (
  <div>
    <button onClick={ () => unauthenticate() }>Logout</button>
  </div>
);

export default Logout;