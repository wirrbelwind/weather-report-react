import { Box, BoxProps, HStack } from "@chakra-ui/react"
import { SecondaryWeatherCard } from "entities/weather"
import { useOtherDaysWeather } from "../model/useOtherDaysWeather"
import { useAppSelector } from "app/providers/redux"
import { useDaysView } from "../model/useDaysView"
import { useIncludeToday } from "../model/useIncludeToday"
import { DaysViewOptions } from "./DaysViewOptions"
import { SwitchIncludeToday } from "./SwitchIncludeToday"

interface OtherDaysWeatherInfoProps extends BoxProps { }

export const OtherDaysWeatherInfo = (props: OtherDaysWeatherInfoProps) => {
	const {  showAdvancedWeatherData } = useAppSelector(state => state["user-settings"])

	const {
		view,
		changeView
	} = useDaysView()

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
				{/* <DaysViewOptions
					view={view}
					changeView={changeView}
				/> */}
				<SwitchIncludeToday
					isTodayIncluded={isTodayIncluded}
					toggle={toggleIncludeToday}
				/>
			</HStack>
			
			<Box
				gap="1rem"
				display={view === 'columns' ? "grid" : 'flex'}
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
								fullDate={day.time.value}
								minTemperature={day.temperature_2m_min.value}
								maxTemperature={day.temperature_2m_max.value}
								temperatureUnits={day.temperature_2m_min.units}
								weatherCode={day.weather_code.value}
								advanced={advanced}
							/>
						)
					})
				}
			</Box>
		</Box>
	)
}
