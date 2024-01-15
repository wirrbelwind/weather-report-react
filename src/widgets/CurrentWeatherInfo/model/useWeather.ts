import { useAppSelector } from "app/providers/redux"
import { useGetWeatherForecastQuery } from "entities/weather"

export const useWeather = () => {
	const { coordinates } = useAppSelector(store => store["user-settings"])
	const { data, isError, isLoading, isSuccess } = useGetWeatherForecastQuery(coordinates)

	return {
		data,
		isError,
		isLoading,
		isSuccess
	}
}
