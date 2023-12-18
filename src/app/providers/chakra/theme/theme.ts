import { extendTheme } from '@chakra-ui/react'
import { container } from './components/container'

export const theme = extendTheme({
	components: {
		Container: container
	},
})
