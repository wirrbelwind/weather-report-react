// import { WeatherKey } from "../types/WeatherKey"

type Property = {
	value: unknown
	unit: string
}

export const mergeValuesWithUnits = (values: Record<string, unknown>, units: Record<string, string>): Record<string, Property> => {

	const result: Record<string, Property> = {}

	// TODO: refactor
	// Object.keys(values).forEach(key => {
	// 	const propKey = key
	// 	result[key] = {
	// 		value: values[propKey],
	// 		unit: units[propKey]
	// 	}
	// })

	return result
}
