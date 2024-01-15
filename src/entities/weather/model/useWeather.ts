import { useGetWeatherForecastQuery } from '../api/weatherApi'
import { mergeValuesWithUnits } from '../libs/mergeValuesWithUnits'

export const useWeather = () => {
	const { data, isError, isLoading, isSuccess } = useGetWeatherForecastQuery()
	// TODO: complete hook
	return {
		data: data ? mergeValuesWithUnits(data) : undefined,
		isError,
		isLoading,
		isSuccess
	}
}
