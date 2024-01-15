import globalTranslation from './translation.json'
import header from './header.json'
import weatherParams from './weatherParams.json'
import weatherTypes from './weatherTypes.json'

export const ua = {
	translation: globalTranslation,
	header,
	weatherParams,
	weatherTypes
} as const
