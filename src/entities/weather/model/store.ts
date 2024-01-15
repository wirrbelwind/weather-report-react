import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CurrentWeather } from "../types/CurrentWeather";

const initialState: CurrentWeather = {}

const store = createSlice({
	name: 'current-weather',
	initialState,
	reducers: {
		setWeather: (_, action: PayloadAction<CurrentWeather>) => {
			return action.payload
		}
	},
})

export const {reducer, actions} = store
