import { useAppSelector } from "app/providers/redux"
import { isToday } from "date-fns"
import { useGetWeatherForecastQuery } from "entities/weather/api/weatherApi"
import { transformWeatherDaily } from "entities/weather/libs/transformWeatherDaily"

interface UseOtherDaysWeatherArgs {
	isTodayIncluded: boolean
}

export const useOtherDaysWeather = (options: UseOtherDaysWeatherArgs) => {
	const {
		isTodayIncluded
	} = options

	const { coordinates } = useAppSelector(state => state["user-settings"])

	const query = useGetWeatherForecastQuery(coordinates)

	const days = query.isSuccess ? transformWeatherDaily(query.data?.daily, query.data.daily_units) : []

	const filteredDays = days.filter(day => {
		if (!isTodayIncluded && isToday(day.time.value)) return false
		return true
	})

	return {
		days: filteredDays
	}
}