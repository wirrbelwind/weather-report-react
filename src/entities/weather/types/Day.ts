import { WeatherForecastResponse } from "./WeatherForecastResponse"

export type Day = Record<keyof WeatherForecastResponse['daily'], {
	value: string
	units: string
}>
