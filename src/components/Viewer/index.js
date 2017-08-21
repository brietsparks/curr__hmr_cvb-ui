import React, { Component } from 'react';

import AuthRequired from '../../componentHocs/AuthRequired';

import ProjectList from '../../components/ProjectList';

export default ({ userIsAuthenticated, dispatch }) => {
  return (
    <AuthRequired userIsAuthenticated={userIsAuthenticated} dispatch={dispatch}>
      <ProjectList userId="1" />
    </AuthRequired>
  );
}
