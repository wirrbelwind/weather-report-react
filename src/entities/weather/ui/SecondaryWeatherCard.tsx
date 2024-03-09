import { Box, HStack, StackProps, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react"
import { getWeatherType } from "../libs/getWeatherType"
import { ICONS_MAP } from "../config/ICONS_MAP"
import { format, secondsToHours } from "date-fns"
import { WeatherParameter } from "../types/WeatherParameter"
import { useTranslation } from "react-i18next"
import { DayOfWeek } from "../types/DayOfWeek"
import { Month } from "../types/Month"

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

	isMini?: boolean
}

export const SecondaryWeatherCard = (props: SecondaryWeatherCardProps) => {
	const {
		fullDate,
		weatherCode,
		minTemperature,
		maxTemperature,
		temperatureUnits,
		advanced,
		isMini,
		...styleProps
	} = props

	const { t } = useTranslation('weatherParams')

	const iconType = getWeatherType(Number(weatherCode))
	const Icon = ICONS_MAP[iconType]

	const day = format(fullDate, 'eeee') as DayOfWeek
	const month = format(fullDate, 'MMM') as Month
	const dayOfMonth = format(fullDate, 'dd')

	if (isMini) return (
		<HStack
			bg="rgba(0, 0, 0, 0.27)"
			borderRadius="0.7rem"
			p="0.9rem 0.6rem"
			fontSize="1.4rem"
		>
			<Box>
				<Text>{t(day, { ns: 'week' })}</Text>
				<Text>
					{`
					${t(month, { ns: 'months' })} ${dayOfMonth}
					`}
				</Text>
			</Box>
			<Icon size="5rem" />
			<Text fontSize="1.4rem">{
				`${minTemperature} — ${maxTemperature} ${temperatureUnits}`
			}</Text>
		</HStack>
	)

	return (
		<HStack
			bg="rgba(0, 0, 0, 0.27)"
			borderRadius="0.7rem"
			p="1.2rem 1rem"
			{...styleProps}

		>
			<Box
				w={"30%"}
				fontSize="1.3rem"
			>
				<Text>{t(day, { ns: 'week' })}</Text>
				<Text>
					{`
					${t(month, { ns: 'months' })} ${dayOfMonth}
					`}
				</Text>
			</Box>

			<Icon size="5rem" />

			<TableContainer
				fontSize="2rem"
				w="100%"
			>
				<Table>
					{
						!isMini && (
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
						)
					}
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
