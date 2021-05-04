import * as React from "react"
import {
  HStack,
  List,
  Heading,
  UnorderedList,
  ListItem,
  LinkBox,
  Text,
  Flex,
} from "@chakra-ui/react"

import { Link, graphql, useStaticQuery } from "gatsby"

export const links = [
  { to: "/blog", text: "Blog" },
  { to: "/about", text: "About" },
  { to: "/contact", text: "Contact" },
]

type PropsInterface = {
  bg: string
}

const Header = (props: PropsInterface): JSX.Element => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const { title } = site.siteMetadata

  return (
    <Flex
      direction="column"
      px={14}
      paddingTop={10}
      paddingBottom={6}
      boxShadow="md"
      {...props}
    >
      <Flex px={4} justifyContent="space-between">
        <Text as={Link} to="/" fontSize={36} fontWeight="700" color="gray.600">
          {title}
        </Text>
        <HStack justify="center" alignItems="center">
          {links.map((link, index) => (
            <LinkBox
              as={Link}
              key={index}
              to={link.to}
              padding={5}
              fontSize={16}
              width="50%"
              color="gray.600"
              fontWeight="700"
              activeStyle={{
                color: "black",
                borderBottom: "5px solid gold",
              }}
              // isActive={(match: unknown) => !!match}
            >
              {link.text}
            </LinkBox>
          ))}
        </HStack>
      </Flex>
    </Flex>
  )
  //
}

export default Header
