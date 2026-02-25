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
        ... on ComponentSectionsPartnersDisplay {
          internalName
          mainPartnerLabel
          partnersLabel
          image {
            url
            alternativeText
            width
            height
          }
        }
        ... on ComponentSectionsHomeHero {
          internalName
          upperTop
          upperBottom
          lowerTop
          lowerBottom
          eventDate
          icon {
            url
            alternativeText
          }
          backgroundImage {
            url
          }
        }
        ... on ComponentSectionsAboutBanner {
          internalName
          scrollingLabel
          leftText
          rightText
        }
        ... on ComponentSectionsAboutEssentials {
          internalName
          catalogueLinkLabel
          date
          time
          location
          description
        }
        ... on ComponentSectionsAboutOffer {
          internalName
          cards {
            title
            content
            cta {
              link {
                url
                label
                target
                type
              }
              type
              disabled
            }
          }
        }
        ... on ComponentSectionsOrganization {
          internalName
          title
          paragraphs
          cta {
            link {
              url
              label
              target
              type
            }
            type
            disabled
          }
          image {
            url
            alternativeText
            width
            height
          }
          images {
            url
            alternativeText
            width
            height
          }
        }
        ... on ComponentSectionsFooter {
          internalName
          navigation {
            externalName
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
          contact {
            phone
            email
            adress
          }
          socials {
            link {
              url
              target
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
        ... on ComponentSectionsBusinessHero {
          internalName
          date
          heading
          asideLetters
          barcodeImage {
            url
            alternativeText
          }
          focusImage {
            url
            alternativeText
          }
        }
        ... on ComponentSectionsForBusiness {
          internalName
          stats {
            value
            label
          }
          cardTitle
          cardContent
          benefits {
            text
          }
        }
        ... on ComponentSectionsContactFormSection {
          internalName
          testimonials {
            content
            authorName
          }
          successTitle
          successMessage
        }
        ... on ComponentSectionsOurTeam {
          internalName
          sectionTitle
          members {
            name
            surname
            tel
            email
            avatar {
              url
              alternativeText
              width
              height
            }
          }
        }
        ... on ComponentSectionsFooter {
          internalName
          navigation {
            externalName
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
          contact {
            phone
            email
            adress
          }
          socials {
            link {
              url
              target
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
  }
`;

export const GET_PARTNERS_SECTIONS = gql`
  query GET_PARTNERS_SECTIONS {
    partnersPage {
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
            internalName
            navigationItems {
              link {
                internalName
                url
                label
                target
                type
              }
              important
            }
          }
        }
        ... on ComponentSectionsPartnersHero {
          internalName
          mainHeroText
          secondaryHeroText
          cta {
            internalName
            link {
              internalName
              url
              label
              target
              type
            }
            type
            disabled
          }
        }
        ... on ComponentSectionsPartnersDisplay {
          internalName
          mainPartnerLabel
          partnersLabel
          image {
            url
            alternativeText
            width
            height
          }
        }
        ... on ComponentSectionsPartnersDescription {
          internalName
          mainPartnerLabel
          partnersLabel
          image {
            url
            alternativeText
            width
            height
          }
        }
        ... on ComponentSectionsPatronsDisplay {
          internalName
          # mediaPatronsLabel
          # contentPatronsLabel
          # honorablePatronsLabel
        }
        ... on ComponentSectionsFooter {
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
  }
`;
