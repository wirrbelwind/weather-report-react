import { useGetWeatherForecastQuery } from '../api/weatherApi'

export const useWeather = () => {
	const { data, isError, isLoading, isSuccess } = useGetWeatherForecastQuery()

	// TODO: complete hook
}