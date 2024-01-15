
export interface WeatherForecastResponse {
	latitude: number
	longtitude: number
	generationtime_ms: number
	utc_offset_seconds: number
	timezone: string
	timezone_abbreviation: string
	elevation: number

	current_units: {
		time: string
		interval: string
		temperature_2m: string
		relative_humidity_2m: string
	}
	current: {
		time: string
		interval: number
		temperature_2m: number
		relative_humidity_2m: number
	}

	daily_units: {
		time: string
		temperature_2m_max: string
		temperature_2m_min: string
	}
	daily: {
		time: string[],
		temperature_2m_min: number[],
		temperature_2m_max: number[]
	}
}



