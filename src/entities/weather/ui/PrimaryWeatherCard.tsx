import { Box, Card, CardBody, CardFooter, CardProps, HStack, Text } from "@chakra-ui/react"
import { IconType } from 'react-icons'
import { WeatherParameter } from "../types/WeatherParameter"
import { useTranslation } from "react-i18next"
import { WeatherType } from "../types/WeatherType"


interface PrimaryWeatherCardProps extends CardProps {
	temperature: string
	apparentTemperature: string
	temperatureUnits: string
	humidity: WeatherParameter

	weatherType: WeatherType
	Icon: IconType
	slotBottom?: React.ReactNode

	advanced?: {
		isDay?: boolean
		precipitation?: WeatherParameter
		rain?: WeatherParameter
		showers?: WeatherParameter
		snowfall?: WeatherParameter
		windSpeed?: WeatherParameter
	}
}

export const PrimaryWeatherCard = (props: PrimaryWeatherCardProps) => {
	const {
		temperature,
		Icon,
		weatherType,
		slotBottom,
		apparentTemperature,
		humidity,
		temperatureUnits,
		advanced,
		...cardProps
	} = props

	const { t } = useTranslation('weatherParams')


	return (
		<Card {...cardProps}>
			<CardBody>
				<HStack gap={2} align="flex-start">
					<Icon
						size="13rem"
					/>
					<Box>
						<Text fontSize="5rem" fontWeight="bold">
							{`${temperature} ${temperatureUnits}`}
						</Text>
						<Text fontWeight="bold">
							{t(weatherType, { ns: 'weatherTypes' })}
						</Text>
						<Text fontWeight="bold">
							{t('withValue.apparentTemperature', {
								value: apparentTemperature,
								unit: temperatureUnits
							})}
						</Text>
						<Text fontWeight="bold">{`
								${t('withValue.humidity', {
							value: humidity.value
						})}
						${humidity.units}
							`}
						</Text>

						<Box>
							{
								typeof advanced?.isDay === 'boolean' && (
									<Text>
										{advanced.isDay ? t('day') : t('night')}
									</Text>
								)
							}
							{
								advanced?.precipitation && (
									<Text>
										{`
										${t('withValue.precipitation', {
											value: advanced.precipitation.value,
										})}
										${t('units.mm')}
										`}
									</Text>
								)
							}
							{
								advanced?.rain && (
									<Text>
										{`${t('withValue.rain', {
											value: advanced.rain.value
										})} ${t('units.mm')}`}
									</Text>
								)
							}
							{
								advanced?.showers && (
									<Text>
										{`${t('withValue.showers', {
											value: advanced.showers.value
										})} ${t('units.mm')}`}
									</Text>
								)
							}
							{
								advanced?.snowfall && (
									<Text>
										{`${t('withValue.snowfall', {
											value: advanced.snowfall.value,
											unit: advanced.snowfall.units
										})} ${t('units.cm')}`}
									</Text>
								)
							}
							{
								advanced?.windSpeed && (
									<Text>
										{`${t('withValue.windSpeed', {
											value: advanced.windSpeed.value,
										})} ${t('units.km/h')}`}
									</Text>
								)
							}
						</Box>
					</Box>
				</HStack>
			</CardBody>
			{
				slotBottom && (
					<CardFooter display="block">
						{slotBottom}
					</CardFooter>
				)
			}
		</Card>
	)
}
