import { Coordinates } from 'shared/types/Coordinates'
import { useGetWeatherForecastQuery } from '../api/weatherApi'
import { getWeatherType } from '../libs/getWeatherType'
import { ICONS_MAP } from '../config/ICONS_MAP'
import { parseCurrentWeather } from '../libs/parseCurrentWeather'
import { useAppSelector } from 'app/providers/redux'

export const useCurrentWeather = (coordinates: Coordinates) => {
	const forecast = useGetWeatherForecastQuery(coordinates)
	const wmoCode = forecast.data?.current.weather_code
	const weatherType = getWeatherType(wmoCode)
	const WeatherIcon = ICONS_MAP[weatherType]
	const timezone = forecast.data?.timezone
	const weather = parseCurrentWeather(forecast.data?.current, forecast.data?.current_units)

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
