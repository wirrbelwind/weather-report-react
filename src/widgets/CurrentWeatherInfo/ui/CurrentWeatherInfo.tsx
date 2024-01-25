import { Box, BoxProps, Flex, HStack, Heading, IconButton, Text, Tooltip } from "@chakra-ui/react"
import { useAppSelector } from "app/providers/redux";
import { CurrentWeather, useCurrentWeather } from "entities/weather"
import { useTranslation } from "react-i18next";
import { FaCircleArrowDown } from "react-icons/fa6";
import { LuInfo } from "react-icons/lu";

export const CurrentWeatherInfo = (boxProps: BoxProps) => {
	const { t } = useTranslation('weatherParams')

	const { coordinates } = useAppSelector(state => state["user-settings"])
	const { global, weather, weatherType, WeatherIcon, isError, isLoading, isSuccess } = useCurrentWeather(coordinates)

	return (
		<Box {...boxProps}>
			<Flex alignItems="center" justifyContent="center">
				{isSuccess && weather && (
					<CurrentWeather
						minW="35%"

						temperature={`${weather.values?.temperature_2m} ${weather.units?.temperature_2m}`}
						weatherType={t(weatherType, { ns: 'weatherTypes' })}
						Icon={WeatherIcon}

						slotBottom={<Box>
							<Text fontSize="2.2rem">
								{t('seemsLike', { value: weather.values?.apparent_temperature, unit: weather.units?.apparent_temperature })}
							</Text>
							<Text fontSize="2.2rem">
								{t('humidity', { value: weather.values?.relative_humidity_2m, unit: weather.units?.relative_humidity_2m })}
							</Text>
							<HStack>
								<Text fontSize="2.2rem">
									{global?.timezone}
								</Text>
								<Tooltip label={t('coordsWarning', { ns: 'translation' })}>
									<Box display="inline-block">
										<LuInfo size="3rem" />
									</Box>
								</Tooltip>
							</HStack>
							<HStack justify="center" w="100%">
								<IconButton aria-label="" icon={<FaCircleArrowDown />} />
							</HStack>
						</Box>}
					/>
				)}
				{isError && <Heading>Something went wrong.</Heading>}
				{isLoading && <Heading>Loading...</Heading>}
			</Flex>
		</Box>
	)
}
