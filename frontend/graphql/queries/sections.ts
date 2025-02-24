import { gql } from "@apollo/client";

export const GET_HOME_SECTIONS = gql`
  query GET_HOME_SECTIONS {
    homePage {
      sections {
        ... on ComponentSectionsHeader {
          internalName
          logo {
            url
            alternativeText
            width
            height
          }
          navigation {
            navigationItems {
              link {
                url
                label
                target
                type
              }
              important
            }
          }
        }
      }
    }
  }
`;

export const GET_BUSINESS_SECTIONS = gql`
  query GET_BUSINESS_SECTIONS {
    businessPage {
      sections {
        ... on ComponentSectionsHeader {
          internalName
          logo {
            url
            alternativeText
            width
            height
          }
          navigation {
            navigationItems {
              link {
                url
                label
                target
                type
              }
              important
            }
          }
        }
      }
    }
  }
`;
