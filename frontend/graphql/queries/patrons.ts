import { gql } from "@apollo/client";

export const GET_PATRONS = gql`
  query GET_PATRONS($filters: PatronFiltersInput) {
    patrons(filters: $filters) {
      internalName
      type
      logo {
        url
        alternativeText
        width
        height
      }
      link {
        url
        label
      }
    }
  }
`;
