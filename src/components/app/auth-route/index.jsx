import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { loginPath } from '../../../utils/paths';
import { UIIsAuthenticated } from '../../ui-is-authenticated/root';

export const Authenticate = ({ children }) => (
  <UIIsAuthenticated>
    {isAuthenticated =>
      isAuthenticated ? children : <Redirect to={loginPath} />
    }
  </UIIsAuthenticated>
);

export const AuthRoute = ({
  children,
  component: Component,
  render,
  ...props
}) => {
  if (Component) {
    return (
      <Route
        {...props}
        render={routeProps => (
          <Authenticate>
            <Component {...routeProps} />
          </Authenticate>
        )}
      />
    );
  }

  if (render) {
    return (
      <Route
        {...props}
        render={routeProps => <Authenticate>{render(routeProps)}</Authenticate>}
      />
    );
  }

  if (children) {
    return (
      <Route
        {...props}
        children={routeProps => (
          <Authenticate>{children(routeProps)}</Authenticate>
        )}
      />
    );
  }

  return null;
};
