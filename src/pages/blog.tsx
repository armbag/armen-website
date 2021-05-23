import * as React from "react"
import SEO from "../components/SEO"
import Layout from "../components/layout/layout"
import { Heading } from "@chakra-ui/react"
import { graphql } from "gatsby"

const BlogPage = (): JSX.Element => {
  return (
    <Layout>
      <SEO title="Blog" />
      <Heading>Blog</Heading>
    </Layout>
  )
}

export default BlogPage

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
