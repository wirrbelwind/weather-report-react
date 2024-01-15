import { Provider } from "react-redux"
import { globalStore} from "./globalStore"
import { ProviderProps } from "../ProviderProps"

export const ReduxProvider = (props: ProviderProps) => {
	return (
		<Provider store={globalStore}>
			{props.children}
		</Provider>
	)
}
