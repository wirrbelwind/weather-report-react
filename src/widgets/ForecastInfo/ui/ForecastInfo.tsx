import { Box, Card, Flex, Heading, Text } from "@chakra-ui/react"
import { useAppDispatch, useAppSelector } from "app/providers/redux"
import { useGetWeatherForecastQuery } from "entities/weather/api/weatherApi"

export const ForecastInfo = () => {
	const { coordinates } = useAppSelector(state => state["user-settings"])
	const query = useGetWeatherForecastQuery(coordinates)

	const data = {
		values: query.data?.daily,
		units: query.data?.daily_units,
	}

	return (
		<Flex
			gap="1.5rem"

		>
			<Card>
				<Text>
					Temperature from
					{' '}
					{data.values?.temperature_2m_min[0]}
					{' '}
					{data.units?.temperature_2m_min}
					{' '}
					to
					{' '}
					{data.values?.temperature_2m_max[0]}
					{' '}
					{data.units?.temperature_2m_max}
				</Text>
			</Card>
			<Card>
				<Text>
					Temperature from
					{' '}
					{data.values?.temperature_2m_min[1]}
					{' '}
					{data.units?.temperature_2m_min}
					{' '}
					to
					{' '}
					{data.values?.temperature_2m_max[1]}
					{' '}
					{data.units?.temperature_2m_max}
				</Text>
			</Card>
		</Flex>
	)
}
