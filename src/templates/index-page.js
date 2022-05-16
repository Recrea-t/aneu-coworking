import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"

import { useLocale } from "../hooks/locale"

import SEO from "../components/SEO/seo"
import Hero from "../components/sections/Hero"
import Section from "../components/sections/Section"

const IndexPage = props => {
  const {
    markdownRemark,
    hero,
    space,
    services,
    pricing,
    coworkers,
    contact,
  } = props.data
  const { title, description } = markdownRemark.frontmatter
  const { locale } = useLocale()

  return (
    <>
      <SEO title={title} description={description} />

      <Hero title={title} frontmatter={hero.frontmatter} />

      <Section
        images={space.frontmatter.ca.images}
        {...space.frontmatter[locale]}
      />

      <Section {...services.frontmatter[locale]} />

      <Section {...pricing.frontmatter[locale]} />

      {coworkers && <Section {...coworkers.frontmatter[locale]} />}

      <Section {...contact.frontmatter[locale]} />
    </>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const query = graphql`
  query IndexPageTemplateQuery($id: String) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        title
        description
      }
    }
    hero: markdownRemark(fileAbsolutePath: { regex: "/(sections/hero)/" }) {
      id
      frontmatter {
        es {
          hero
        }
        en {
          hero
        }
        ca {
          hero
          images {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
    space: markdownRemark(fileAbsolutePath: { regex: "/(sections/space)/" }) {
      frontmatter {
        es {
          id
          color
          title
          description
        }
        en {
          id
          color
          title
          description
        }
        ca {
          id
          color
          title
          description
          images {
            id
            childImageSharp {
              gatsbyImageData(
                width: 340
                aspectRatio: 1.33
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
    services: markdownRemark(
      fileAbsolutePath: { regex: "/(sections/services)/" }
    ) {
      frontmatter {
        ca {
          id
          title
          color
          description
          table
        }
        es {
          id
          color
          title
          description
          table
        }
        en {
          id
          color
          title
          description
          table
        }
      }
    }
    pricing: markdownRemark(
      fileAbsolutePath: { regex: "/(sections/pricing)/" }
    ) {
      frontmatter {
        ca {
          id
          title
          color
          description
          pricing {
            title
            price
            description
          }
        }
        es {
          id
          color
          title
          description
          pricing {
            title
            price
            description
          }
        }
        en {
          id
          color
          title
          description
          pricing {
            title
            price
            description
          }
        }
      }
    }
    contact: markdownRemark(
      fileAbsolutePath: { regex: "/(sections/contact)/" }
    ) {
      frontmatter {
        ca {
          id
          title
          color
          contact
        }
        es {
          id
          color
          title
          contact
        }
        en {
          id
          color
          title
          contact
        }
      }
    }
    coworkers: markdownRemark(
      fileAbsolutePath: { regex: "/(sections/coworkers)/" }
    ) {
      frontmatter {
        es {
          id
          color
          title
          coworkers {
            title
            description
            url
            phone
            email
            instagram
            facebook
            linkedin
            image {
              childImageSharp {
                gatsbyImageData(
                  width: 110
                  aspectRatio: 1
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
        en {
          id
          color
          title
          coworkers {
            title
            description
            url
            phone
            email
            instagram
            facebook
            linkedin
            image {
              childImageSharp {
                gatsbyImageData(
                  width: 110
                  aspectRatio: 1
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
        ca {
          id
          title
          color
          coworkers {
            title
            description
            url
            phone
            email
            instagram
            facebook
            linkedin
            image {
              childImageSharp {
                gatsbyImageData(
                  width: 110
                  aspectRatio: 1
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
    }
  }
`
