import { useAppDispatch } from "app/providers/redux";
import { userSettingsSlice } from './userSettingsSlice'

export const useRequestCoordinates = () => {
	const dispatch = useAppDispatch()
	const { setCoordinates } = userSettingsSlice.actions

	navigator.geolocation.getCurrentPosition(({ coords }) => {
		dispatch(setCoordinates({
			lattitude: coords.latitude,
			longtitude: coords.longitude
		}))
	})
}
