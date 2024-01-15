
// NOTE:
// this helper was made considering WMO codes
// the source of codes: https://www.nodc.noaa.gov/archive/arc0021/0002199/1.1/data/0-data/HTML/WMO-CODE/WMO4677.HTM

export const getWeatherType = (wmoCode: number) => {
	if(wmoCode < 0 || wmoCode > 99) {
		return ''
	}

	if(wmoCode <= 19) return 'Sunny'
	if(wmoCode <= 29) return 'Ice fog or thunderstorm'
	if(wmoCode <= 39) return 'Duststorm, sandstorm, drifting or blowing snow'
	if(wmoCode <= 49) return 'Fog or ice fog at the time of observation'
	if(wmoCode <= 59) return 'Drizzle'
	if(wmoCode <= 69) return 'Rain'
	if(wmoCode <= 79) return 'Solid precipitation not in showers'
	if(wmoCode <= 99) return 'Showery precipitation, or precipitation with current or recent thunderstorm'
}