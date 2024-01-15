import { Box } from "@chakra-ui/react"
import { Header } from "widgets/Header"
import { useGetWeatherForecastQuery } from 'entities/weather'
export const App = () => {
	const { data, isLoading } = useGetWeatherForecastQuery()
	console.log(data)
	return (
		<Box>
			<Header />
			{isLoading ? 'is loading' : 'not loading'}
		</Box>
	)
}
