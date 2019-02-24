import ApolloClient from 'apollo-boost';
import { apolloClientURI } from '../constants/environment-variables';
import { getAuthenticationToken } from './authentication-token';

const defaults = {
  isAuthenticated: Boolean(getAuthenticationToken()),
};

const resolvers = {
  Mutation: {
    authenticate: (_, variables, { cache, writeData }) => {
      cache.writeData({ data: { isAuthenticated: true } });
      return true;
    },
    logOff: (_, variables, { cache, writeData }) => {
      cache.writeData({ data: { isAuthenticated: false } });
      return true;
    },
  },
};

const typeDefs = `
  type Mutation {
    authenticate: Boolean!
    logOff: Boolean!
  }

  type Query {
    isAuthenticated: Boolean!
  }
`;

const request = async operation => {
  const token = await getAuthenticationToken();

  if (token) {
    operation.setContext({
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  }
};

export const createApolloClient = () =>
  new ApolloClient({
    clientState: {
      defaults,
      resolvers,
      typeDefs,
    },
    request,
    uri: apolloClientURI,
  });
