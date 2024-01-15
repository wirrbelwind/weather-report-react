import { WeatherProperty } from "./WeatherProperty"

export interface CurrentWeather {
	temperature?: WeatherProperty<number>
	humidity?: WeatherProperty<number>
}
