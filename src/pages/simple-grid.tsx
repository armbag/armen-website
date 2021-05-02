import * as React from "react"
import { SimpleGrid, Box, Button } from "@chakra-ui/react"
import { Link } from "gatsby"

function GridSimple(): JSX.Element {
  return (
    <SimpleGrid minChildWidth="130px" spacing="8px">
      <Box
        bg="tomato"
        h="80px"
        m={3}
        d="flex"
        alignItems="center"
        justifyContent="center"
      >
        1
      </Box>
      <Box
        bg="green"
        h="80px"
        m={3}
        d="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          as="button"
          borderRadius="md"
          bg="blue"
          color="white"
          px={4}
          h={8}
          w="50px"
        >
          2
        </Box>
      </Box>
      <Box
        bg="tomato"
        h="80px"
        m={3}
        d="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Button>
          <Link to="/input">To Input</Link>
        </Button>
      </Box>
      <Box bg="tomato" h="80px" m={3}>
        4
      </Box>
      <Box bg="tomato" h="80px" m={3}>
        5
      </Box>
      <Box bg="tomato" h="80px" m={3}>
        6
      </Box>
      <Box bg="tomato" h="80px" m={3}>
        7
      </Box>
    </SimpleGrid>
  )
}

export default GridSimple
