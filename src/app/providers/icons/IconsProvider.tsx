import { IconContext } from "react-icons"
import { ProviderProps } from "../ProviderProps"

export const IconsProvider = (props: ProviderProps) => {
	return (
		<IconContext.Provider value={{
			color: "cyan"
		}} >
			{props.children}
		</IconContext.Provider>
	)
}