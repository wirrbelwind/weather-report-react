import { useAppDispatch, useAppSelector } from "app/providers/redux"
import { userSettingsSlice } from "entities/user-settings"
import { useCallback, useEffect, useState } from "react"
import { Coordinates } from "shared/types/Coordinates"
import { OSMResult } from "../ui/SearchLocationInput/SearchInputLocation"

export const useCoordinates = () => {
	const coordinates = useAppSelector(state => state["user-settings"].coordinates)
	const dispatch = useAppDispatch()
	const { setCoordinates } = userSettingsSlice.actions
	const [selectedLocation, setSelectedLocation] = useState<null | OSMResult>(null)

	const changeCoordinates = useCallback((coordinates: Coordinates) => {
		dispatch(setCoordinates(coordinates))
	}, [])

	useEffect(() => {
		if (selectedLocation) {
			const { raw: { lat, lon } } = selectedLocation

			changeCoordinates({
				lattitude: Number(lat),
				longtitude: Number(lon)
			})
		}
	}, [selectedLocation])

	const onBackToUserCoordinates = useCallback(() => {
		navigator.geolocation.getCurrentPosition(({ coords }) => {
			dispatch(setCoordinates({
				lattitude: coords.latitude,
				longtitude: coords.longitude
			}))
		})
	}, [])

	return {
		coordinates,
		onBackToUserCoordinates,
		changeCoordinates,
		selectedLocation,
		setSelectedLocation
	}
}
