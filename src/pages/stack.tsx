import * as React from "react"
import { VStack, Box, Flex } from "@chakra-ui/react"
import { Link } from "gatsby"

function StackPage(): JSX.Element {
  return (
    <Flex alignItems="center" justifyContent="center">
      <VStack direction={["column", "row"]} spacing={["10px", "30px"]}>
        <Box boxSize={["60px", "300px"]} bg="blue.300" />
        <Box boxSize={["80px", "40px"]} bg="cyan.400" />
        <Box boxSize={["50px", "100px"]} bg="blue.700" />
        <Box boxSize={["100px", "600px"]} bg="cyan.800" />
      </VStack>
    </Flex>
  )
}

export default StackPage
