import { AsyncSelect, ChakraStylesConfig, GroupBase, SingleValue } from 'chakra-react-select'
import { OpenStreetMapProvider } from 'leaflet-geosearch'
import 'leaflet-geosearch/dist/geosearch.css'
import { useTranslation } from 'react-i18next'

export interface OSMResult {
	x: number
	y: number
	label: string
	bounds: [[number, number], [number, number]]
	raw: {
		place_id: number
		licence: string
		osm_type: string
		osm_id: number
		lat: string
		lon: string
		class: string
		type: string
		place_rank: number
		importance: number
		addresstype: string
		name: string
		display_name: string
		boundingbox: [string, string, string, string]
	}
}

interface SearchInputLocationProps {
	value: OSMResult | null
	onChange: (newValue: OSMResult | null) => void
	chakraStyles: ChakraStylesConfig<OSMResult | null, false, GroupBase<OSMResult | null>>
}

export const SearchInputLocation = (props: SearchInputLocationProps) => {
	const { value, onChange, chakraStyles } = props

	const provider = new OpenStreetMapProvider()


	const handleChange = (newValue: SingleValue<OSMResult | null>) => {
		onChange(newValue as OSMResult)
	}

	const { t } = useTranslation('translation')

	return (
		<AsyncSelect<OSMResult | null>
			cacheOptions
			chakraStyles={chakraStyles}
			placeholder={t('addressInputPlaceholder')}
			className="async-select leaflet-control"
			loadOptions={(inputValue, callback) => {
				provider.search({ query: inputValue }).then(results => {
					callback(results)
				})
			}}
			value={value}
			isMulti={false}
			onChange={handleChange}
			onFocus={() => { }}
			onBlur={() => { }}
		/>
	)
}
