import { WeatherType } from '../types/WeatherType'

// NOTE:
// this helper was made considering WMO codes
// the source of codes: https://www.nodc.noaa.gov/archive/arc0021/0002199/1.1/data/0-data/HTML/WMO-CODE/WMO4677.HTM

export const getWeatherType = (wmoCode: number | undefined): WeatherType => {
	if(wmoCode === undefined) {
		return 'undefined'
	}
	if (wmoCode < 0 || wmoCode > 100) {
		return 'undefined'
	}

	if (wmoCode <= 19) return '0-19'
	if (wmoCode <= 29) return '20-29'
	if (wmoCode <= 39) return '30-39'
	if (wmoCode <= 49) return '40-49'
	if (wmoCode <= 59) return '50-59'
	if (wmoCode <= 69) return '60-69'
	if (wmoCode <= 79) return '70-79'
	if (wmoCode <= 100) return '80-100'

	return 'undefined'
}