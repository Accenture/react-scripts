import gql from 'graphql-tag';
import React from 'react';
import { Query } from 'react-apollo';

const GET_IS_AUTHENTICATED = gql`
  {
    isAuthenticated @client
  }
`;

export const UIIsAuthenticated = ({ children }) => (
  <Query query={GET_IS_AUTHENTICATED}>
    {({ data }) => children(data.isAuthenticated)}
  </Query>
);
