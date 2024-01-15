import { useAppDispatch } from "app/providers/redux";
import { userSettingsSlice } from './slice'

export const useRequestCoordinates = () => {
	const dispatch = useAppDispatch()
	const { setCoordinates } = userSettingsSlice.actions

	navigator.geolocation.getCurrentPosition(({ coords }) => {
		dispatch(setCoordinates({
			lattitude: coords.latitude,
			longtitude: coords.longitude
		}))
	});
}