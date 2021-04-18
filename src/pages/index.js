import * as React from 'react'
import {
	Box,
	Text,
	Button,
	Flex,
	Image,
	Center,
	Square,
	Container,
	Link,
	useColorMode,
	useColorModeValue,
} from '@chakra-ui/react'

// markup
const IndexPage = () => {
	const { colorMode, toggleColorMode } = useColorMode()
	const bg = useColorModeValue('red.600', 'red.100')
	const color = useColorModeValue('white', 'gray.800')
	return (
		<Container variant="testing" centerContent>
			<Flex
				flexDir="column"
				bg="gray.300"
				bgPosition="center"
				my="5"
				border="1px"
				borderRadius="2"
				p={8}
				w="100%"
			>
				<Text fontSize={{ base: '24px', md: '40px', lg: '56px' }}>Hello</Text>
				<Text>Congratulations</Text>
				<Center>
					<Square bg="blue.500" size="150px">
						Hey
					</Square>
				</Center>
				<Button size="xl" p="2" m="2">
					Click
				</Button>
				<Button onClick={toggleColorMode} mb={4}>
					Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
				</Button>
				<Box mb={4} bg={bg} color={color}>
					This box's style will change based on the color mode.
				</Box>
				<Box mb={4} bg="green.500" color="green.100">
					This box will not change
				</Box>
			</Flex>
			<Flex p={4} align="center">
				<Box flexShrink={0}>
					<Image
						borderRadius="lg"
						width={{ md: 40 }}
						src="https://bit.ly/2jYM25F"
						alt="Woman paying for a purchase"
					/>
				</Box>
				<Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
					<Text
						fontWeight="bold"
						textTransform="uppercase"
						fontSize="sm"
						letterSpacing="wide"
						color="teal.600"
					>
						Marketing
					</Text>
					<Link
						mt={1}
						display="block"
						fontSize="lg"
						lineHeight="normal"
						fontWeight="semibold"
						href="#"
					>
						Finding customers for your new business
					</Link>
					<Text mt={2} color="gray.500">
						Getting a new business off the ground is a lot of hard work. Here
						are five ideas you can use to find your first customers.
					</Text>
				</Box>
			</Flex>
			<Center height="200px" width="800px" bg="blackAlpha.300">
				Hey
			</Center>
		</Container>
	)
}

export default IndexPage
