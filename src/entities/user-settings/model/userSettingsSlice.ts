import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialState } from "../config/initialState";
import { Coordinates } from "shared/types/Coordinates";

export const userSettingsSlice = createSlice({
	name: 'user-settings',
	initialState,
	reducers: {
		setCoordinates: (state, action: PayloadAction<Coordinates>) => {
			state.coordinates = action.payload
		},
		setShowAdvancedWeatherData: (state, action: PayloadAction<boolean>) => {
			state.showAdvancedWeatherData = action.payload
		}
	}
})
