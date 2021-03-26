import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"

import SEO from "../components/SEO/seo"
import Hero from "../components/sections/Hero"
import Section from "../components/sections/Section"

const IndexPage = props => {
  const { sections, markdownRemark } = props.data
  const { title, description } = markdownRemark.frontmatter

  return (
    <>
      <SEO title={title} description={description} />
      <Hero frontmatter={markdownRemark.frontmatter} />

      {sections.edges.map(({ node: { id, frontmatter, fields: { slug } } }) => (
        <Section key={id} id={slug} {...frontmatter} />
      ))}
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
  query IndexPageTemplateQuery($id: String, $locale: String) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        title
        description
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
    sections: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/(sections)/" }
        fields: { locale: { eq: $locale } }
      }
      sort: { fields: frontmatter___order }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            color
            description
            images {
              id
              childImageSharp {
                gatsbyImageData(
                  width: 350
                  aspectRatio: 1.33
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
            table
            pricing {
              title
              price
              description
            }
            coworkers {
              title
              url
              description
              image {
                childImageSharp {
                  gatsbyImageData(
                    width: 200
                    aspectRatio: 1
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
            }
          }
          fields {
            slug
            locale
          }
        }
      }
    }
  }
`
