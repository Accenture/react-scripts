import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.css';

export const UILayoutNavLink = ({ children, ...props }) => (
  <li className={styles.root}>
    <Link {...props} className={styles.link}>
      {children}
    </Link>
  </li>
);
