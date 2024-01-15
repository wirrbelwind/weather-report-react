import { WeatherForecastResponse } from '../types/WeatherForecastResponse'

type Property = {
	value: number
	unit: string
}
type WeatherCategory = 'current' | 'daily' | 'hourly'

export const mergeValuesWithUnits = (data: WeatherForecastResponse) => {
	const result: Record<WeatherCategory, Record<string, Property>> = {
		current: {},
		daily: {},
		hourly: {},
	}

	const currentKeys = Object.keys(data.current)
	currentKeys.forEach(key => {
		result.current[key] = {
			value: data.current[key],
			unit: data.current_units[key]
		}
	})

	// dailyKeys = Object.keys(data.daily)

	return result
}

