import * as React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/SEO"
import { graphql } from "gatsby"

import { Heading } from "@chakra-ui/react"

const ContactPage = (): JSX.Element => {
  return (
    <Layout>
      <SEO title="Contact" />
      <Heading>This is the contact page</Heading>
    </Layout>
  )
}

export default ContactPage

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
