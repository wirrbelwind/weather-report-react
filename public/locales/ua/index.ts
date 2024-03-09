import globalTranslation from './translation.json'
import header from './header.json'
import weatherParams from './weatherParams.json'
import weatherTypes from './weatherTypes.json'
import langs from './langs.json'
import week from './week.json'
import months from './months.json'

export const ua = {
	translation: globalTranslation,
	header,
	weatherParams,
	weatherTypes,
	langs,
	week,
	months
} as const
