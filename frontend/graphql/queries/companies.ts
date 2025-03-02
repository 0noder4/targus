import { gql } from "@apollo/client";

export const GET_PARTNERS = gql`
  query GET_PARTNERS {
    companies(filters: { partnershipType: { in: ["main", "partner"] } }) {
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

export const GET_COMPANIES_BRIEF = gql`
  query GET_COMPANIES_BRIEF($filters: CompanyFiltersInput) {
    companies(filters: $filters, pagination: { limit: 100 }) {
      documentId
      internalName
      externalName
      partnershipType
    }
  }
`;

export const GET_COMPANY = gql`
  query GET_COMPANY($documentId: ID!) {
    company(documentId: $documentId) {
      internalName
      externalName
      partnershipType
      logo {
        url
        alternativeText
        width
        height
      }
      description
      jobs {
        internalName
        documentId
        title
      }
      stand {
        firstDay
        secondDay
      }
    }
  }
`;
