import * as React from "react"
import { Flex, Text } from "@chakra-ui/react"

import { graphql, useStaticQuery } from "gatsby"

const Footer = (): JSX.Element => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)
  const { title, author } = site.siteMetadata
  return (
    <Flex
      bg="gray.300"
      width="100%"
      justifyContent="center"
      alignItems="center"
      direction="column"
      boxShadow="0 -1px 6px -1px rgba(0, 0, 0, 0.1)"
      padding={4}
    >
      <Flex width="100%" justifyContent="center" wrap="wrap">
        <Text
          width="50%"
          textAlign="center"
          color="gray.600"
          fontSize="sm"
        >{`${title} ©2021 - by ${author}`}</Text>
      </Flex>
    </Flex>
  )
}

export default Footer
