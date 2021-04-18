import { extendTheme } from '@chakra-ui/react'

const config = {
	initialColorMode: 'light',
	useSystemColorMode: false,
}

const Container = {
	baseStyle: {
		size: '1200px', // Normally, it is "semibold"
	},
	sizes: {
		xl: '800px',
		sm: '200px',
	},
	variants: {
		testing: {
			maxWidth: '100ch',
			bg: 'red.300',
		},
	},
}

const overrides = {
	config,
	components: {
		Container,
	},
}

export default extendTheme(overrides)
