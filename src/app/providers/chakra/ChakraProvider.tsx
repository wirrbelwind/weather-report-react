import { ChakraProvider as Provider } from '@chakra-ui/react'
import { ProviderProps } from '../ProviderProps'

export const ChakraProvider = (props: ProviderProps) => {
	return (
		<Provider>
			{props.children}
		</Provider>
	)
}