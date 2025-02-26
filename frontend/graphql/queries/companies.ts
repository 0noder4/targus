import { gql } from "@apollo/client";

export const GET_PARTNERS = gql`
  query GET_PARTNERS($filters: CompanyFiltersInput) {
    companies(filters: $filters) {
      internalName
      externalName
      partnershipType
      description
      logo {
        alternativeText
        url
        width
        height
      }
    }
  }
`;
