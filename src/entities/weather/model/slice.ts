import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CurrentWeather } from "../types/CurrentWeather";

const initialState: CurrentWeather = {}

export const slice = createSlice({
	name: 'current-weather',
	initialState,
	reducers: {
		setWeather: (_, action: PayloadAction<CurrentWeather>) => {
			return action.payload
		}
	},
})
