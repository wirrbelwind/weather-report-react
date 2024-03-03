import { useState } from "react"
import { DaysView } from "../types/DaysView"
import { defaultDaysView } from "../config/defaultDaysView"

export const useDaysView = () => {
	const [view, setView] = useState<DaysView>(defaultDaysView)

	return {
		view,
		changeView: setView
	}
}