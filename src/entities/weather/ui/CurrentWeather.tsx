import { Box, Card, CardBody, CardFooter, CardProps, HStack, Text } from "@chakra-ui/react"
import { IconType } from 'react-icons'

interface CurrentWeatherProps extends CardProps {
	temperature: string
	weatherType: string
	Icon: IconType
	slotBottom?: React.ReactNode
}

export const CurrentWeather = (props: CurrentWeatherProps) => {
	const { temperature, Icon, weatherType, slotBottom, ...cardProps } = props

	return (
		<Card {...cardProps}>
			<CardBody>
				<HStack gap={2} align="flex-start">
					<Icon
						size="13rem"
					/>
					<Box>
						<Text fontSize="5rem" fontWeight="bold">{temperature}</Text>
						<Text fontSize="3.7rem">{weatherType}</Text>
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
