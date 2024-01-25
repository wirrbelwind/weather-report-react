import { Box } from "@chakra-ui/react"
import { Header } from "widgets/Header"
import { CurrentWeatherInfo } from "widgets/CurrentWeatherInfo"
import { useAppSelector } from "./providers/redux"
import { ForecastInfo } from "widgets/ForecastInfo"

export const App = () => {
	// useRequestCoordinates()

	const coordinates = useAppSelector(state => state["user-settings"].coordinates)
	console.log(coordinates)

	return (
		<Box>
			<Header />
			<CurrentWeatherInfo />
			<ForecastInfo />
		</Box>
	)
}
