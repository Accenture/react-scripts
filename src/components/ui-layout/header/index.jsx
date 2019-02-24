import React from 'react';
import { Link } from 'react-router-dom';
import { rootPath } from '../../../utils/paths';
import { UILayoutNavLinks } from '../nav-links';
import styles from './styles.css';

export const text = {
  brandLink: 'Digital Products Project',
};

export const UILayoutHeader = () => (
  <div className={styles.root}>
    <Link to={rootPath} className={styles.brand}>
      {text.brandLink}
    </Link>
    <UILayoutNavLinks />
  </div>
);
