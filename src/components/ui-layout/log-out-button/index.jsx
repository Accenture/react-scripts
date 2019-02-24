import gql from 'graphql-tag';
import React, { useCallback } from 'react';
import { Mutation } from 'react-apollo';
import { rootPath } from '../../../utils/paths';
import { UILayoutNavLink } from '../nav-link';
import { invalidateAuthenticationToken } from '../../../utils/authentication-token';

export const text = {
  button: 'Log Out',
};

const LOG_OFF = gql`
  mutation LOG_OFF {
    logOff @client
  }
`;

export const UILayoutLogOutButtonBase = ({ logOff }) => {
  const onClick = useCallback(async () => {
    await logOff();
    invalidateAuthenticationToken();
  }, [logOff]);

  return (
    <UILayoutNavLink onClick={onClick} to={rootPath}>
      {text.button}
    </UILayoutNavLink>
  );
};

export const UILayoutLogOutButton = () => (
  <Mutation mutation={LOG_OFF}>
    {logOff => <UILayoutLogOutButtonBase logOff={logOff} />}
  </Mutation>
);
