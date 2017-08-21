import React from 'react';
import { gql, graphql } from 'react-apollo';

const ProjectList = ({ data }) => {
  return (
    <div>
    </div>
  )
};

const makeProjectListQuery = userId => gql`
  query {
    history(userId: "${userId}") {
      id,
      userId,
      parentId,
      title,
      contributions {
        id,
        skills {
          id,
          canonicalName
        }
      }
    }
  }
`;

const ProjectListWithData = graphql(
  makeProjectListQuery('1')
)(ProjectList);

export default ProjectListWithData;