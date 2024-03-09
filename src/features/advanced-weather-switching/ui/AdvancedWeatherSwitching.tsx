import { FormControlProps, FormLabel, FormLabelProps, HStack, Switch, SwitchProps } from "@chakra-ui/react"
import { useAppDispatch, useAppSelector } from "app/providers/redux"
import { userSettingsSlice } from "entities/user-settings"
import { ChangeEvent, useCallback } from "react"

interface AdvancedWeatherSwitchingProps extends FormControlProps {
	label?: string
	labelProps?: FormLabelProps
	switchProps?: SwitchProps
}

export const AdvancedWeatherSwitching = (props: AdvancedWeatherSwitchingProps) => {
	const {
		label,
		labelProps,
		switchProps,
		...containerProps
	} = props

	const showAdvancedWeatherData = useAppSelector(state => state["user-settings"].showAdvancedWeatherData)

	const { setShowAdvancedWeatherData } = userSettingsSlice.actions

	const dispatch = useAppDispatch()

	const handleChange = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			dispatch(setShowAdvancedWeatherData(e.target.checked))
		},
		[]
	)

	return (
		<HStack
			alignItems='center'
			{...containerProps}
		>

			{
				label && (
					<FormLabel {...labelProps}>
						{label}
					</FormLabel>
				)
			}

			<Switch
				isChecked={showAdvancedWeatherData}
				onChange={handleChange}
				{...switchProps}
			/>
		</HStack>
	)
}