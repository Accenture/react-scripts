import gql from 'graphql-tag';
import React from 'react';
import { Mutation } from 'react-apollo';
import { UILayoutRoot } from '../../ui-layout/root';
import { LogInPageForm } from '../form';

const AUTHENTICATE = gql`
  mutation Authenticate {
    authenticate @client
  }
`;

export const LogInPageRoot = ({ history }) => (
  <UILayoutRoot>
    <Mutation mutation={AUTHENTICATE}>
      {authenticate => (
        <LogInPageForm authenticate={authenticate} history={history} />
      )}
    </Mutation>
  </UILayoutRoot>
);
