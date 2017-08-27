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
    history(user_id: "${userId}") {
      id,
      user_id,
      parent_id,
      title,
      contributions {
        id,
        skills {
          id,
          canonical_name
        }
      }
    }
  }
`;

const ProjectListWithData = graphql(
  makeProjectListQuery('1')
)(ProjectList);

export default ProjectListWithData;