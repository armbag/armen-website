import * as React from "react"
import { Button, Flex, Heading, Input } from "@chakra-ui/react"

const IndexPage = (): JSX.Element => (
  <Flex height="100vh" alignItems="center" justifyContent="center">
    <Flex direction="column" background="gray.100" p={12} rounded={6}>
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
      <Button colorScheme="teal">Log in</Button>
    </Flex>
  </Flex>
)

export default IndexPage
