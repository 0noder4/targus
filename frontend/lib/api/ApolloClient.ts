import { from, HttpLink } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { CombinedGraphQLErrors } from "@apollo/client/errors";
import {
  registerApolloClient,
  ApolloClient,
  InMemoryCache,
} from "@apollo/client-integration-nextjs";
import navigateBackend from "./navigateBackend";

const errorLink = onError(({ error, operation, forward }) => {
  if (CombinedGraphQLErrors.is(error)) {
    error.errors.forEach(({ message }) =>
      console.error(`[GraphQL error]: ${message}`)
    );
  } else {
    console.error(`[Network error]: ${error}`);
  }
  return forward(operation);
});

const token = process.env.BACKEND_API_TOKEN;
const httpLink = new HttpLink({
  uri: navigateBackend("/graphql"),
  headers: {
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  },
});

export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            homePage: { keyArgs: false },
            businessPage: { keyArgs: false },
            partnersPage: { keyArgs: false },
            jobWall: { keyArgs: false },
            catalouge: {
              keyArgs: false,
              merge(existing = {}, incoming) {
                return { ...existing, ...incoming };
              },
            },
          },
        },
        HomePage: { keyFields: [] },
        BusinessPage: { keyFields: [] },
        PartnersPage: { keyFields: [] },
        JobWall: { keyFields: [] },
        Catalouge: { keyFields: [] },
      },
    }),
    link: from([errorLink, httpLink]),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: "network-only", // Skip cache for critical queries
      },
    },
  });
});
