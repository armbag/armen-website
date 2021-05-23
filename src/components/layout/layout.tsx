import * as React from "react"
import {
  Spacer,
  HStack,
  List,
  UnorderedList,
  ListItem,
  Box,
  Slide,
  Flex,
  useMediaQuery,
} from "@chakra-ui/react"

import SEO from "../SEO"
import NavBar from "./navBar"
import MobileNavBar from "./mobileNavBar"
import Footer from "./footer"

const Layout = ({
  children,
  title,
}: {
  title?: string
  children: any
}): JSX.Element => {
  const [isLargerThan1340] = useMediaQuery("(min-width: 1340px)")

  return (
    <Flex mx="auto" direction="column">
      <Box>
        <SEO title={title} />
        {isLargerThan1340 ? (
          <NavBar bg="teal.300" />
        ) : (
          <MobileNavBar bg="teal.300" />
        )}
        <Flex
          direction="column"
          alignItems="center"
          minH={{ base: "83vh", md: "81vh" }}
        >
          {children}
        </Flex>
      </Box>
      <Footer />
    </Flex>
  )
}

export default Layout
