import React from 'react';
import { UILayoutRoot } from '../../ui-layout/root';

export const text = {
  header: 'Home Page',
};

export const HomePageRoot = () => (
  <UILayoutRoot>
    <h1>{text.header}</h1>
  </UILayoutRoot>
);
