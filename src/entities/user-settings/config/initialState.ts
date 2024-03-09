import { UserSettingsState } from "../types/UserSettingsState";

export const initialState: UserSettingsState = {
	coordinates: {
		// London's coordinates
		lattitude: 51.509865,
		longtitude: -0.118092
	},
	showAdvancedWeatherData: false
}
