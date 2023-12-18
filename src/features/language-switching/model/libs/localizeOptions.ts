import { Language } from "shared/types/Language";
import { Option, RawOption } from "../types/Option";

export const localizeOptions = (
	options: RawOption[],
	getTranslation: (language: Language) => string
): Option[] => {
	const localizedOptions: Option[] = options.map(({ label, value }) => ({
		label: getTranslation(label),
		value
	}))

	return localizedOptions
}
