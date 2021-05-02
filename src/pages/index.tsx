import * as React from "react"
import {
  Button,
  Flex,
  Heading,
  Input,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react"
import { Link } from "gatsby"

const IndexPage = (): JSX.Element => {
  const { toggleColorMode } = useColorMode()
  const formBackground = useColorModeValue("gray.100", "gray.700")
  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex direction="column" background={formBackground} p={12} rounded={6}>
        <Link to="/simple-grid">Simple Grid</Link>
        <Heading mb={6}>Log In</Heading>
        <Input
          placeholder="hey@hey.com"
          variant="filled"
          mb={3}
          type="email"
        ></Input>
        <Input
          placeholder="******"
          variant="filled"
          mb={6}
          type="password"
        ></Input>
        <Button mb={6} colorScheme="teal">
          Log in
        </Button>
        <Button onClick={toggleColorMode}>Toggle Color Mode</Button>
      </Flex>
    </Flex>
  )
}

export default IndexPage
