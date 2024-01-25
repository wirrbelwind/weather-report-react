import { Coordinates } from 'shared/types/Coordinates'
import { useGetWeatherForecastQuery } from '../api/weatherApi'
import { getWeatherType } from '../libs/getWeatherType'
import { iconsMap } from '../config/iconsMap'

export const useCurrentWeather = (coordinates: Coordinates) => {
	const forecast = useGetWeatherForecastQuery(coordinates)
	const wmoCode = forecast.data?.current.weather_code
	const weatherType = getWeatherType(wmoCode)
	const WeatherIcon = iconsMap[weatherType]

	return {
		...forecast,
		weather: {
			values: forecast.data?.current,
			units: forecast.data?.current_units
		},
		// TODO: how to give them properly
		global: forecast.data,
		WeatherIcon,
		weatherType
	}
}
