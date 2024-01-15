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
				<HStack gap={2}>
					<Icon
						size="9rem"
					/>
					<Box>
						<Text fontSize="5rem" fontWeight="bold">{temperature}</Text>
						<Text>{weatherType}</Text>
					</Box>
				</HStack>
			</CardBody>
			{
				slotBottom && (
					<CardFooter>
						{slotBottom}
					</CardFooter>
				)
			}
		</Card>
	)
}
