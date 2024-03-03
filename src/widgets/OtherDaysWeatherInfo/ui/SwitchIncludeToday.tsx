import { FormControl, FormLabel, FormLabelProps, Switch, SwitchProps } from "@chakra-ui/react"
import { useTranslation } from "react-i18next"

interface SwitchIncludeTodayProps {
	isTodayIncluded: boolean
	toggle: () => void
	labelProps?: FormLabelProps
	switchProps?: Omit<SwitchProps, 'isChecked' | 'onChange'>
}

export const SwitchIncludeToday = (props: SwitchIncludeTodayProps) => {
	const {
		isTodayIncluded,
		toggle,
		labelProps,
		switchProps,
		...containerProps
	} = props

	const { t } = useTranslation()

	return (
		<FormControl {...containerProps} display='flex'>
			<FormLabel {...labelProps}>
				{t('includeToday')}
			</FormLabel>
			<Switch
				isChecked={isTodayIncluded}
				onChange={toggle}
				{...switchProps}
			/>
		</FormControl>
	)
}
