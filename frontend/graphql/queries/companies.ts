import { gql } from "@apollo/client";

export const GET_PARTNERS = gql`
  query Companies($filters: CompanyFiltersInput) {
    companies(filters: $filters) {
      internalName
      externalName
      partnershipType
      logo {
        alternativeText
        url
        width
        height
      }
    }
  }
`;
