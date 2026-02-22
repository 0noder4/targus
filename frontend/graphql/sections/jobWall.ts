import { gql } from "@apollo/client";

export const GET_JOB_WALL_HEADER = gql`
  query GET_JOB_WALL_HEADER {
    jobWall {
      pageTitle
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

export const GET_JOB_WALL_FOOTER = gql`
  query JobWall {
    jobWall {
      footer {
        internalName
        navigation {
          externalName
          navigationItems {
            link {
              internalName
              url
              label
              target
              type
            }
          }
        }
        contact {
          phone
          email
          adress
        }
        socials {
          link {
            url
            target
            internalName
          }
          image {
            url
            alternativeText
            width
            height
          }
        }
      }
    }
  }
`;
