import { Box } from "@chakra-ui/react"
import { Header } from "widgets/Header"
import { CurrentWeatherInfo } from "widgets/CurrentWeatherInfo"
import { useRequestCoordinates } from "entities/user-settings/model/useRequestCoordinates"
import { useAppSelector } from "./providers/redux"

export const App = () => {
	useRequestCoordinates()
	

	const coordinates = useAppSelector(state => state["user-settings"].coordinates)
	console.log(coordinates)
	
	return (
		<Box>
			<Header />
			<CurrentWeatherInfo />
		</Box>
	)
}
