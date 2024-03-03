import { useBoolean } from "@chakra-ui/react"

export const useIncludeToday = () => {
	const [isTodayIncluded, { toggle: toggleIncludeToday }] = useBoolean(true)

	return {
		isTodayIncluded,
		toggleIncludeToday
	}
}
