import { Box, BoxProps, Grid, HStack } from "@chakra-ui/react"
import { SecondaryWeatherCard } from "entities/weather"
import { useOtherDaysWeather } from "../model/useOtherDaysWeather"
import { useAppSelector } from "app/providers/redux"
import { useIncludeToday } from "../model/useIncludeToday"
import { SwitchIncludeToday } from "./SwitchIncludeToday"

interface OtherDaysWeatherInfoProps extends BoxProps { }

export const OtherDaysWeatherInfo = (props: OtherDaysWeatherInfoProps) => {
	const { showAdvancedWeatherData } = useAppSelector(state => state["user-settings"])

	const {
		isTodayIncluded,
		toggleIncludeToday
	} = useIncludeToday()

	const { days } = useOtherDaysWeather({
		isTodayIncluded
	})

	return (
		<Box>
			<HStack gap='2rem'>
				<SwitchIncludeToday
					isTodayIncluded={isTodayIncluded}
					toggle={toggleIncludeToday}
				/>
			</HStack>

			<Grid
				gap="1rem"
				templateColumns={showAdvancedWeatherData ? "1fr" : "repeat(4, 25%)"}
				{...props}
			>
				{
					days.map(day => {
						const advanced = showAdvancedWeatherData ? {
							sunrise: day.sunrise,
							sunset: day.sunset,
							sunshineDuration: day.sunshine_duration,
							daylightDuration: day.daylight_duration,
							windSpeed: day.wind_speed_10m_max
						} : undefined

						return (
							<SecondaryWeatherCard
								key={day.time.value}
								fullDate={day.time.value}
								minTemperature={day.temperature_2m_min.value}
								maxTemperature={day.temperature_2m_max.value}
								temperatureUnits={day.temperature_2m_min.units}
								weatherCode={day.weather_code.value}
								advanced={advanced}
								isMini={!showAdvancedWeatherData}
							/>
						)
					})
				}
			</Grid>
		</Box>
	)
}
