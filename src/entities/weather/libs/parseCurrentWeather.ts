import { TodayWeather } from "../types/TodayWeather";
import { WeatherForecastResponse } from "../types/WeatherForecastResponse";

export const parseCurrentWeather = (
	day?: WeatherForecastResponse['current'],
	units?: WeatherForecastResponse['current_units']
): TodayWeather | null => {
	if (!day || !units) {
		return null
	}

	return Object.keys(day).reduce((res, key) => {
		// @ts-expect-error TS lost type of key inside callback
		res[key] = {
			// @ts-expect-error TS lost type of key inside callback
			value: day[key],
			// @ts-expect-error TS lost type of key inside callback
			units: units[key]
		}
		return res
	}, {} as TodayWeather)
}
