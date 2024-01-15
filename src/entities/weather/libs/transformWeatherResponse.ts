import { WeatherForecastResponse } from '../types/WeatherForecastResponse'
import { mergeValuesWithUnits } from './mergeValuesWithUnits'

export const transformWeatherResponse = (data: WeatherForecastResponse) => {
	const current = mergeValuesWithUnits(data.current, data.current_units)

	return {
		current
	}
}