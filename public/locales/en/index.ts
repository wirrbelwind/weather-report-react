import globalTranslation from './translation.json'
import header from './header.json'
import weatherParams from './weatherParams.json'
import weatherTypes from './weatherTypes.json'
import langs from './langs.json'
import week from './week.json'
import months from './months.json'

export const en = {
	translation: globalTranslation,
	header: header,
	weatherParams,
	weatherTypes,
	week,
	langs,
	months
} as const
