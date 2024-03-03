import { Day } from "../types/Day";
import { WeatherForecastResponse } from "../types/WeatherForecastResponse";

export const transformWeatherCurrent = (
	day?: WeatherForecastResponse['current'],
	units?: WeatherForecastResponse['current_units']
) => {
	if (!day || !units) {
		return null
	}

	const result: Record<
		keyof WeatherForecastResponse['current'], {
			value: string
			units: string
		}> = Object.keys(day).reduce((res, key) => {
			res[key as keyof WeatherForecastResponse['current']] = {
				value: day[key as keyof WeatherForecastResponse['current']],
				units: units[key as keyof WeatherForecastResponse['current_units']]
			}
			return res
		}, {})

	return result
	// const transformedData = days?.time.map((time, index) => {
	// 	const day = {
	// 		time: {
	// 			units: units.time,
	// 			value: time
	// 		}
	// 	} as Day

	// 	Object.keys(days).forEach((key) => {
	// 		if (key !== 'time') {
	// 			day[key] = {
	// 				value: String(days[key][index]),
	// 				units: units[key]
	// 			}
	// 		}
	// 	})

	// 	return day
	// })

	// return transformedData
}
