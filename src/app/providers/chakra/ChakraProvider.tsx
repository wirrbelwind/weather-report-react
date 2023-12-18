import { ChakraProvider as Provider } from '@chakra-ui/react'
import { ProviderProps } from '../ProviderProps'
import { theme } from './theme'

export const ChakraProvider = (props: ProviderProps) => {
	return (
		<Provider theme={theme}>
			{props.children}
		</Provider>
	)
}