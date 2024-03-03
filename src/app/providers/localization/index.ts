import { initReactI18next } from 'react-i18next'

import i18n from 'i18next'
import { resources } from '../../../../public/locales'

import { I18N_DEFAULT_NS } from './constants'
import { detectLanguage } from './detectLanguage'

i18n.use(initReactI18next).init({
	resources: resources,
	// Remove on connect language detector
	lng: detectLanguage(),
	interpolation: {
		escapeValue: false
	},
	defaultNS: I18N_DEFAULT_NS
})
