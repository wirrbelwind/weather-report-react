import { useTranslation } from "react-i18next";
import { Select, SingleValue } from 'chakra-react-select'
import { options } from "../consts/options";
import { Option } from "../model/types/Option";
import { localizeOptions } from "../model/libs/localizeOptions";

export const LangSwitcher = () => {
	const { t, i18n } = useTranslation()

	const handleChange = (selectedOption: SingleValue<Option>) => {
		if (!selectedOption) {
			return;
		}

		i18n.changeLanguage(selectedOption.value)
	}

	const localizedOptions = localizeOptions(options, t)

	return (
		<Select
			options={localizedOptions}
			onChange={handleChange}
		/>
	)
}
