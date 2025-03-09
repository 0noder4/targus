import { gql } from "@apollo/client";

export const GET_COMPANIES = gql`
  query GET_COMPANIES($filters: CompanyFiltersInput) {
    companies(filters: $filters, pagination: { limit: 100 }) {
      documentId
      internalName
      externalName
      partnershipType
    }
  }
`;
