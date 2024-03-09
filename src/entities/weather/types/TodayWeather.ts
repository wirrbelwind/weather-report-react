import { WeatherForecastResponse } from "./WeatherForecastResponse"
import { WeatherParameter } from "./WeatherParameter"

export type TodayWeather = Record<
	keyof WeatherForecastResponse['current'],
	WeatherParameter
>
