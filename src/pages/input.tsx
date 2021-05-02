import * as React from "react"
import {
  Text,
  Flex,
  Input,
  InputGroup,
  InputLeftAddon,
  Button,
  InputRightElement,
} from "@chakra-ui/react"
import { Link } from "gatsby"

import { PhoneIcon } from "@chakra-ui/icons"

function InputComp(): JSX.Element {
  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex direction="column" background="gray.100" p={12} rounded={6}>
        <Button>
          <Link to="/stack">To Stack</Link>
        </Button>
        <InputGroup>
          <InputRightElement mt={2}>
            <PhoneIcon color="teal.700" />
          </InputRightElement>
          <InputLeftAddon p={3} mt={2}>
            <Text>+1</Text>
          </InputLeftAddon>
          <Input
            size="lg"
            placeholder="type here"
            variant="outline"
            mt={2}
            py="0px"
            h="40px"
          />
        </InputGroup>
      </Flex>
    </Flex>
  )
}

export default InputComp
