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

import Head from "../head"
import NavBar from "./navBar"
import MobileNavBar from "./mobileNavBar"
import Footer from "./footer"

const Layout = ({
  page,
  children,
  ...props
}: {
  page?: string
  children: any
}): JSX.Element => {
  const [isLargerThan1340] = useMediaQuery("(min-width: 1340px)")

  return (
    <Flex mx="auto" direction="column">
      <Box>
        <Head page={page} />
        {isLargerThan1340 ? (
          <NavBar bg="teal.300" />
        ) : (
          <MobileNavBar bg="teal.300" />
        )}
        <Flex
          direction="column"
          alignItems="center"
          minH={{ base: "84vh", md: "81vh" }}
          {...props}
        >
          {children}
        </Flex>
      </Box>
      <Footer />
    </Flex>
  )
}

export default Layout
