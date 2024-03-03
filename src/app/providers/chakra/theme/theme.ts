import { Theme, extendTheme } from '@chakra-ui/react'
import { container } from './components/container'
import { mode } from '@chakra-ui/theme-tools'

export const theme: Theme = extendTheme({
	components: {
		Container: container,
		Box: {
			baseStyle: props => ({
				bg: props.colorMode === 'light' ? 'red' : 'cyan.200'
			})
		},
		Text: {
			baseStyle: props => ({
				color: props.colorMode === 'light' ? 'cyan.900' : 'cyan.50'
			})
		},
		Card: {
			baseStyle: props => ({
				container: {
					bg: props.colorMode === 'light' ? 'cyan.100' : 'cyan.700'
				},
				// body: 
			})
		}
	},
	colors: {
		cyan: {
			50: '#e1fdfb',
			100: '#bff0ec',
			200: '#9be4dd',
			300: '#76d9d5',
			400: '#52cacd',
			500: '#3aa7b3',
			600: '#2a7c8c',
			700: '#1b5364',
			800: '#092c3c',
			900: '#000d16'
		},
		pink: {
			50: '#ffeaf3',
			100: '#ebc7d6',
			200: '#dba4bd',
			300: '#cb819e',
			400: '#bb5c7b',
			500: '#a2445c',
			600: '#7f3442',
			700: '#5b242b',
			800: '#391517',
			900: '#180404'
		}
	},
	config: {
		initialColorMode: 'system'
	}
})