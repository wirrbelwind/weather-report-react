import { Day } from "../types/Day";
import { WeatherForecastResponse } from "../types/WeatherForecastResponse";

export const transformWeatherDaily = (
	days: WeatherForecastResponse['daily'],
	units: WeatherForecastResponse['daily_units']
): Day[] => {
	const transformedData = days?.time.map((time, index) => {
		const day = {
			time: {
				units: units.time,
				value: time
			}
		} as Day

		Object.keys(days).forEach((key) => {
			if (key !== 'time') {
				day[key] = {
					value: String(days[key][index]),
					units: units[key]
				}
			}
		})

		return day
	})

	return transformedData
}
