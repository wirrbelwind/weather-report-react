// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const weatherApi = createApi({
	reducerPath: 'weather-api',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://api.open-meteo.com/v1/' }),
	endpoints: (builder) => ({
		getPokemonByName: builder.query({
			query: () => `forecast?latitude=46.4857&longitude=30.7438&current=temperature_2m,relative_humidity_2m,apparent_temperature,rain,showers,snowfall,wind_speed_10m&hourly=temperature_2m&timezone=auto`,
		}),
	}),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery } = weatherApi