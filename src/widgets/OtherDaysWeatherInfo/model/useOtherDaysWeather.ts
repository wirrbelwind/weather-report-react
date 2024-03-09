import { useAppSelector } from "app/providers/redux"
import { isToday } from "date-fns"
import { useGetWeatherForecastQuery } from "entities/weather/api/weatherApi"
import { parseDailyWeather } from "entities/weather/libs/parseDailyWeather"

interface UseOtherDaysWeatherArgs {
	isTodayIncluded: boolean
}

export const useOtherDaysWeather = (options: UseOtherDaysWeatherArgs) => {
	const { coordinates } = useAppSelector(state => state["user-settings"])

	const query = useGetWeatherForecastQuery(coordinates)

	const days = query.isSuccess ? parseDailyWeather(query.data?.daily, query.data.daily_units) : []

	const filteredDays = days.filter(day => {
		if (!options.isTodayIncluded && isToday(day.time.value)) return false
		return true
	})

	return {
		days: filteredDays
	}
}
