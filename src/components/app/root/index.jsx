import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from '../routes';
import { ApolloProvider } from 'react-apollo';

export const AppRoot = ({ client }) => (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </ApolloProvider>
);
