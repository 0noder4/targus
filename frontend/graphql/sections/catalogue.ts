import { gql } from "@apollo/client";

export const GET_CATALOUGE_HEADER = gql`
  query GET_CATALOUGE_HEADER {
    catalouge {
      header {
        internalName
        logo {
          url
          alternativeText
          height
          width
        }
        navigation {
          internalName
          navigationItems {
            important
            link {
              url
              label
              target
              type
              internalName
            }
          }
        }
      }
    }
  }
`;

export const GET_CATALOUGE_SIDEBAR = gql`
  query GET_CATALOUGE_SIDEBAR {
    catalouge {
      sidebar {
        internalName
        title
      }
    }
  }
`;

export const GET_CATALOUGE_VERSION = gql`
  query GET_CATALOUGE_VERSION {
    catalouge {
      isObsolete
    }
  }
`;

export const GET_CATALOUGE_COMPANIES = gql`
  query GET_COMPANIES($filters: CompanyFiltersInput) {
    companies(filters: $filters, pagination: { limit: 100 }) {
      documentId
      internalName
      externalName
      partnershipType
    }
  }
`;
