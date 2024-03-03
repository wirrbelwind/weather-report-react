import { Coordinates } from 'shared/types/Coordinates'
import { useGetWeatherForecastQuery } from '../api/weatherApi'
import { getWeatherType } from '../libs/getWeatherType'
import { iconsMap } from '../config/iconsMap'
import { transformWeatherCurrent } from '../libs/transformWeatherCurrent'
import { useAppSelector } from 'app/providers/redux'

export const useCurrentWeather = (coordinates: Coordinates) => {
	const forecast = useGetWeatherForecastQuery(coordinates)
	const wmoCode = forecast.data?.current.weather_code
	const weatherType = getWeatherType(wmoCode)
	const WeatherIcon = iconsMap[weatherType]
	const timezone = forecast.data?.timezone
	const weather = transformWeatherCurrent(forecast.data?.current, forecast.data?.current_units)

	const showAdvancedWeatherData = useAppSelector(state => state["user-settings"].showAdvancedWeatherData)

	const advanced = (showAdvancedWeatherData && weather) ? {
		isDay: Boolean(weather.is_day.value),
		precipitation: weather.precipitation,
		rain: weather.rain,
		showers: weather.showers,
		snowfall: weather.snowfall,
		windSpeed: weather.wind_speed_10m
	} : undefined


	return {
		...forecast,
		data: {
			weather,
			WeatherIcon,
			weatherType,
			timezone,
			advanced
		},
	}
}
