import { Box, Container, Flex, useColorMode } from "@chakra-ui/react"
import { Header } from "widgets/Header"
import { useRequestCoordinates } from "entities/user-settings/model/useRequestCoordinates"
import { TodayWeatherInfo } from "widgets/TodayWeatherInfo"
import { OtherDaysWeatherInfo } from "widgets/OtherDaysWeatherInfo/ui/OtherDaysWeatherInfo"

export const App = () => {
	useRequestCoordinates()
	const { colorMode } = useColorMode()
	return (
		<Box>
			{colorMode}
			<Header />
			<Container size="md" pos='relative'>
				<Flex align='center' justify='center'>
					<TodayWeatherInfo mt="2rem" w="40%" />
				</Flex>

				<OtherDaysWeatherInfo mt="2rem" />
			</Container>
		</Box>
	)
}
