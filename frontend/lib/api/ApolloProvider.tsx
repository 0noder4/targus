// ./apollo-wrapper.tsx
"use client";

import { ApolloLink, HttpLink } from "@apollo/client";
import {
  ApolloClient,
  ApolloNextAppProvider,
  InMemoryCache,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support";
import navigateBackend from "./navigateBackend";

function makeClient() {
  const httpLink = new HttpLink({
    uri: navigateBackend("/graphql"),
  });

  return new ApolloClient({
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            homePage: { keyArgs: false },
            businessPage: { keyArgs: false },
            partnersPage: { keyArgs: false },
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
        Catalouge: { keyFields: [] },
      },
    }),
    link:
      typeof window === "undefined"
        ? ApolloLink.from([
            new SSRMultipartLink({
              stripDefer: true,
            }),
            httpLink,
          ])
        : httpLink,
  });
}

export function ApolloProvider({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}
