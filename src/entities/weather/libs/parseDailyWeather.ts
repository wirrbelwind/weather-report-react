import { DailyWeatherItem } from "../types/DayWeather";
import { WeatherForecastResponse } from "../types/WeatherForecastResponse";

export const parseDailyWeather = (
	days: WeatherForecastResponse['daily'],
	units: WeatherForecastResponse['daily_units']
): DailyWeatherItem[] => {
	const transformedData = days?.time.map((time, index) => {
		const day: Partial<DailyWeatherItem> = {
			time: {
				units: units.time,
				value: time
			}
		}

		Object.keys(days).forEach((key) => {
			if (key === 'time') {
				return
			}

			// @ts-expect-error TS lost type of key inside callback
			day[key] = {
				// @ts-expect-error TS lost type of key inside callback
				value: String(days[key][index]),
				// @ts-expect-error TS lost type of key inside callback
				units: units[key]
			}
		})

		return day
	})

	return transformedData as DailyWeatherItem[]
}
