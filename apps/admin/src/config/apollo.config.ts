import { ApolloLink } from '@apollo/client';
import {
  ApolloClientOptions,
  retrieveAuthTokenFromContext,
} from '@webbyx/next-js';

import { GRAPHQL_ENDPOINT, GRAPHQL_SUBSCRIPTION_ENDPOINT } from './constant';

const isProduction = process.env.NODE_ENV === 'production';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export const apolloOptions: ApolloClientOptions = {
  graphqlRequest: {
    uri: GRAPHQL_ENDPOINT,
    credentials: 'same-origin',
  },
  websocketRequest: {
    url: GRAPHQL_SUBSCRIPTION_ENDPOINT,
    lazy: true,
    connectionParams: {},
  },
  connectToDevTools: !isProduction && typeof window !== 'undefined',
  getAuthToken: async (ctx) => {
    return retrieveAuthTokenFromContext(ctx);
  },
  constructApolloLinks: ({ errorLink, authLink, httpLink }) => {
    const requestAudienceLink = new ApolloLink((operation, forward) => {
      operation.setContext(({ headers = {} }) => {
        return {
          headers: {
            ...headers,
            // add custom headers to every request
            // ['x-custom-header']: 'abc',
          },
        };
      });
      return forward(operation);
    });
    // apollo links
    return [errorLink, authLink, requestAudienceLink, httpLink];
  },
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export default apolloOptions;
