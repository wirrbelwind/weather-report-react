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
						<Text fontWeight="bold">
							{t('withValue.humidity', {
								value: humidity.value,
								unit: humidity.units
							})}
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
										{t('precipitation', {
											value: advanced.precipitation.value,
											unit: advanced.precipitation.units
										})}
									</Text>
								)
							}
							{
								advanced?.rain && (
									<Text>
										{t('rain', {
											value: advanced.rain.value,
											unit: advanced.rain.units
										})}
									</Text>
								)
							}
							{
								advanced?.showers && (
									<Text>
										{t('showers', {
											value: advanced.showers.value,
											unit: advanced.showers.units
										})}
									</Text>
								)
							}
							{
								advanced?.snowfall && (
									<Text>
										{t('snowfall', {
											value: advanced.snowfall.value,
											unit: advanced.snowfall.units
										})}
									</Text>
								)
							}
							{
								advanced?.windSpeed && (
									<Text>
										{t('windSpeed', {
											value: advanced.windSpeed.value,
											unit: advanced.windSpeed.units
										})}
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
