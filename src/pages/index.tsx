import * as React from "react"
import {
  Button,
  Flex,
  Heading,
  Input,
  useColorMode,
  useColorModeValue,
  SimpleGrid,
  Square,
  VStack,
  Wrap,
} from "@chakra-ui/react"

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
