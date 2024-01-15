import { configureStore } from "@reduxjs/toolkit";
import { storeReducer } from 'entities/weather'
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { weatherApi } from 'entities/weather'

export const globalStore = configureStore({
	reducer: {
		currentWeather: storeReducer,
		[weatherApi.reducerPath]: weatherApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(weatherApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof globalStore.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof globalStore.dispatch

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector