import * as React from "react"
import { Heading } from "@chakra-ui/react"
import SEO from "../components/SEO"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"

const AboutPage = (): JSX.Element => {
  return (
    <Layout>
      <SEO title="About" />
      <Heading>This is the about page</Heading>
    </Layout>
  )
}

export default AboutPage

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
