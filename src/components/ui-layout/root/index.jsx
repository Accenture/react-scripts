import React from 'react';
import { UILayoutHeader } from '../header';

export const UILayoutRoot = ({ children }) => (
  <div>
    <UILayoutHeader />
    {children}
  </div>
);
