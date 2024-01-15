// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_URL } from '../config/API_URL'
import { WeatherForecastResponse } from '../types/WeatherForecastResponse'

// Define a service using a base URL and expected endpoints
export const weatherApi = createApi({
	reducerPath: 'weather-api',
	baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
	endpoints: (builder) => ({
		getWeatherForecast: builder.query<WeatherForecastResponse, void>({
			query: () => ({
				url: 'forecast',
				params: {
					"latitude": 16.4857,
					"longitude": 30.7438,
					"current": ["temperature_2m", "relative_humidity_2m", "apparent_temperature", "is_day", "precipitation", "rain", "showers", "snowfall", "weather_code", "wind_speed_10m"],
					"hourly": "temperature_2m",
					"daily": ["temperature_2m_max", "temperature_2m_min", "sunrise", "sunset", "daylight_duration", "sunshine_duration", "uv_index_max", "wind_speed_10m_max", "wind_gusts_10m_max"],
					// "timeformat": "unixtime",
					"timezone": "auto"
				}
			})
		}),
	}),
})

export const { useGetWeatherForecastQuery } = weatherApi