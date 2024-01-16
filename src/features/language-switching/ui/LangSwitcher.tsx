import { useTranslation } from "react-i18next";
import { options } from "../consts/options";
import { Select, SelectProps } from "@chakra-ui/react";

export const LangSwitcher = (selectProps: Omit<SelectProps, 'onChange'>) => {
	const { t, i18n } = useTranslation('langs')

	const handleChange: React.ChangeEventHandler<HTMLSelectElement> = e => {
		const lang = e.target.value
		if (!lang) {
			return;
		}

		i18n.changeLanguage(lang)
	}

	const localizedOptions = options.map(({ label, value }) => ({
		label: t(label),
		value,
		selected: value === i18n.language
	}))

	return (
		<Select
			{...selectProps}
			onChange={handleChange}
			fontSize="1.3rem"
		>
			{
				localizedOptions.map(opt => (
					<option   {...opt}/>
				))
			}
		</Select>

	)
}
