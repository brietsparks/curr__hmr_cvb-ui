import React from 'react';

import AuthRequired from '../../components/Auth/Guard';
import ProjectList from '../../components/ProjectList';

export const Viewer = ({ userIsAuthenticated, dispatch }) => {
  return (
    <AuthRequired dispatch={dispatch} userIsAuthenticated={userIsAuthenticated}>
      <ProjectList userId="1" />
    </AuthRequired>
  );
};

export default Viewer;