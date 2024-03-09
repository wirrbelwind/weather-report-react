import { WeatherForecastResponse } from "./WeatherForecastResponse"
import { WeatherParameter } from "./WeatherParameter"

export type DailyWeatherItem = Record<keyof WeatherForecastResponse['daily'], WeatherParameter>
