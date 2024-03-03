import { I18N_DEFAULT_LANGUAGE, languages } from "./constants";

export const detectLanguage = (): string => {
	const browserLanguage = navigator.language

	const lang = languages.find(lang => {
		const regex = new RegExp(`^${lang}`, 'i')
		return regex.test(browserLanguage)
	});

	if (!lang) {
		return I18N_DEFAULT_LANGUAGE
	}

	return lang
}
