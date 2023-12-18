import { CustomTypeOptions } from 'i18next'

export type Language = keyof CustomTypeOptions['resources']['translation']['languages']
