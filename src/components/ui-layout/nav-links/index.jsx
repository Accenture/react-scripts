import React from 'react';
import { loginPath } from '../../../utils/paths';
import { UIIsAuthenticated } from '../../ui-is-authenticated/root';
import { UILayoutLogOutButton } from '../log-out-button';
import { UILayoutNavLink } from '../nav-link';
import styles from './styles.css';

export const text = {
  logIn: 'Log In',
  logOut: 'Log Out',
};

export const UILayoutNavLinks = () => (
  <nav>
    <ul className={styles.root}>
      <UIIsAuthenticated>
        {isAuthenticated =>
          isAuthenticated ? (
            <UILayoutLogOutButton />
          ) : (
            <UILayoutNavLink to={loginPath}>{text.logIn}</UILayoutNavLink>
          )
        }
      </UIIsAuthenticated>
    </ul>
  </nav>
);
