
export interface WeatherForecastResponse {
	latitude: number
	longtitude: number
	generationtime_ms: number
	utc_offset_seconds: number
	timezone: string
	timezone_abbreviation: string
	elevation: number
	// current
	current_units: {
		time: string
		interval: string
		temperature_2m: string
		relative_humidity_2m: string
		apparent_temperature: string
		rain: string
		showers: string
		snowfall: string
		wind_speed_10m: string
		is_day: string
		precipitation: string
		weather_code: string
	}
	current: {
		time: string
		interval: number
		temperature_2m: number
		relative_humidity_2m: number
		rain: number
		showers: number
		snowfall: number
		wind_speed_10m: number
		apparent_temperature: number
		is_day: number
		precipitation: number
		weather_code: number
	}
	// daily
	daily_units: {
		time: string
		temperature_2m_max: string
		temperature_2m_min: string
		sunrise: string
		sunset: string
		daylight_duration: string
		sunshine_duration: string
		uv_index_max: string
		wind_speed_10m_max: string
		wind_guests_10m_max: string

	}
	daily: {
		time: string[],
		temperature_2m_min: number[],
		temperature_2m_max: number[]
		sunrise: number[],
		sunset: number[]
		daylight_duration: number[]
		sunshine_duration: number[]
		uv_index_max: number[]
		wind_speed_10m_max: number[]
		wind_guests_10m_max: number[]
		weather_code: number
	}
	// hour
	hourly_units: {
		time: string
		temperature_2m: string
	}
	hourly: {
		time: string[]
		temperature_2m: number[],
	}
}
