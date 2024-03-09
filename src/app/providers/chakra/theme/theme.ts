import { extendTheme } from '@chakra-ui/react'
import { colors } from './colors'
import { Modal } from './components/Modal'
import { Container } from './components/container'
import { Box } from './components/Box'
import { Text } from './components/Text'

export const theme = extendTheme({
	components: {
		Modal,
		Container,
		Box,
		Text,
	},
	colors,
	config: {
		initialColorMode: 'dark'
	}
})
