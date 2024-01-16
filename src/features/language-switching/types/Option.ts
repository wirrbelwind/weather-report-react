import { Language } from "shared/types/Language"

export interface RawOption {
	label: Language
	value: string
}

export interface Option {
	label: string
	value: string,
	selected?: boolean
}
