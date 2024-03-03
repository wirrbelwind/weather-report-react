import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_URL } from '../config/API_URL'
import { API_CONFIG } from '../config/API_CONFIG'
import { WeatherForecastResponse } from '../types/WeatherForecastResponse'
import { Coordinates } from 'shared/types/Coordinates'


export const weatherApi = createApi({
	reducerPath: 'weather-api',
	baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
	endpoints: (builder) => ({
		getWeatherForecast: builder.query<WeatherForecastResponse, Coordinates>({
			query: (coordinates) => ({
				url: 'forecast',
				params: {
					...API_CONFIG,
					"latitude": coordinates.lattitude,
					"longitude": coordinates.longtitude,
				}
			})
		}),
	}),
})

export const { useGetWeatherForecastQuery } = weatherApi