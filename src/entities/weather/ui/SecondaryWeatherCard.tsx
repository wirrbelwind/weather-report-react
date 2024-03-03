import { Box, HStack, StackProps, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react"
import { getWeatherType } from "../libs/getWeatherType"
import { iconsMap } from "../config/iconsMap"
import { format, secondsToHours } from "date-fns"
import { WeatherParameter } from "../types/WeatherParameter"
import { useTranslation } from "react-i18next"
import { CustomTypeOptions } from 'i18next'

type DayOfWeek = keyof CustomTypeOptions['resources']['week']

interface SecondaryWeatherCardProps extends StackProps {
	fullDate: string
	weatherCode: string

	minTemperature: string
	maxTemperature: string
	temperatureUnits: string

	advanced?: {
		sunrise: WeatherParameter,
		sunset: WeatherParameter,
		sunshineDuration: WeatherParameter,
		daylightDuration: WeatherParameter,
		windSpeed: WeatherParameter
	}
}

export const SecondaryWeatherCard = (props: SecondaryWeatherCardProps) => {
	const {
		fullDate,
		weatherCode,
		minTemperature,
		maxTemperature,
		temperatureUnits,
		advanced,
		...styleProps
	} = props

	const { t } = useTranslation('weatherParams')

	const iconType = getWeatherType(Number(weatherCode))
	const Icon = iconsMap[iconType]

	const day = t(
		format(fullDate, 'eeee') as DayOfWeek,
		{ ns: 'week' }
	)

	return (
		<HStack
			bg="rgba(0, 0, 0, 0.27)"
			borderRadius="0.7rem"
			p="1.2rem 1rem"
			{...styleProps}

		>
			<Box w="10%" fontSize="1.3rem">
				<Text>{day}</Text>
				<Text>{format(fullDate, 'dd MMM')}</Text>
			</Box>

			<Icon size="5rem" />

			<TableContainer fontSize="2rem" w="100%">
				<Table>
					<Thead>
						<Tr>
							<Th>{t('temperature')}</Th>
							{advanced && (<>
								<Th>{t('windSpeed')}</Th>
								<Th>{t('sunrise')}</Th>
								<Th>{t('sunshineDuration')}</Th>
								<Th>{t('sunset')}</Th>
							</>)}
						</Tr>
					</Thead>
					<Tbody>
						<Tr>
							<Td>{
								`${minTemperature} — ${maxTemperature} ${temperatureUnits}`
							}</Td>
							{
								advanced && (<>
									<Td>{`${advanced.windSpeed.value} ${advanced?.windSpeed.units}`}</Td>
									<Td>{format(advanced.sunrise.value, 'hh:mm')}</Td>
									<Td>{`${secondsToHours(Number(advanced.sunshineDuration.value))} ${t('units.h')}`}</Td>
									<Td>{
										format(advanced.sunset.value, 'hh:mm')
									}</Td>
								</>)
							}
						</Tr>
					</Tbody>
				</Table>
			</TableContainer>
		</HStack>
	)
}
