import { IconContext } from "react-icons"
import { ProviderProps } from "../ProviderProps"
import { useColorMode } from "@chakra-ui/react"

export const IconsProvider = (props: ProviderProps) => {
	const { colorMode } = useColorMode()

	return (
		<IconContext.Provider value={{
			color: colorMode === 'light' ? 'black' : 'white'
		}} >
			{props.children}
		</IconContext.Provider>
	)
}