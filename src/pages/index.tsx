import * as React from "react"
import { Heading, SimpleGrid, Square } from "@chakra-ui/react"
import { graphql } from "gatsby"

import { PhoneIcon } from "@chakra-ui/icons"
import Layout from "../components/layout/layout"

const IndexPage = (): JSX.Element => {
  return (
    <Layout>
      <Heading>Let&apos;s do this</Heading>
      <SimpleGrid columns={[1, 2]} gap="20px">
        <Square size="300px" bg="hsl(0, 61%, 39%)" color="white">
          <PhoneIcon />
        </Square>
        <Square size="300px" bg="hsl(50,61%, 44%)" color="white">
          <PhoneIcon />
        </Square>
        <Square size="300px" bg="hsl(21,61%, 49%)" color="white">
          <PhoneIcon />
        </Square>
        <Square size="300px" bg="hsl(100,61%, 54%)" color="white">
          <PhoneIcon />
        </Square>
        <Square size="300px" bg="hsl(125,61%, 59%)" color="white">
          <PhoneIcon />
        </Square>
        <Square size="300px" bg="hsl(150,61%, 64%)" color="white">
          <PhoneIcon />
        </Square>
        <Square size="300px" bg="hsl(175,61%, 69%)" color="white">
          <PhoneIcon />
        </Square>
        <Square size="300px" bg="hsl(200,61%, 39%)" color="white">
          <PhoneIcon />
        </Square>
        <Square size="300px" bg="hsl(225,61%, 39%)" color="white">
          <PhoneIcon />
        </Square>
      </SimpleGrid>
    </Layout>
  )
}

export default IndexPage

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
