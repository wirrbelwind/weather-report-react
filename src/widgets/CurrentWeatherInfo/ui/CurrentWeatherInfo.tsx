import { Box, BoxProps, Flex, HStack, IconButton, Text, Tooltip } from "@chakra-ui/react"
import { CurrentWeather, useGetWeatherForecastQuery } from "entities/weather"
import { getWeatherType } from "entities/weather/libs/getWeatherType";
import { useTranslation } from "react-i18next";
import { WiCloudy } from "react-icons/wi";
import { FaCircleArrowDown } from "react-icons/fa6";
import { useAppSelector } from "app/providers/redux";
// import { useWeather } from "../model/useWeather";
import { LuInfo } from "react-icons/lu";

export const CurrentWeatherInfo = (boxProps: BoxProps) => {
	const { t } = useTranslation('weatherParams')

	const { coordinates } = useAppSelector(store => store["user-settings"])
	const { data, isError, isLoading, isSuccess } = useGetWeatherForecastQuery(coordinates)
	console.log(data)
	return (
		<Box {...boxProps}>
			<Flex alignItems="center" justifyContent="center">
				{data && (
					<CurrentWeather
						minW="35%"
						temperature={`${data.current.temperature_2m} ${data.current_units.temperature_2m}`}
						weatherType={t(getWeatherType(data.current.weather_code), { ns: 'weatherTypes' })}
						Icon={WiCloudy}
						slotBottom={<Box>
							<Text fontSize="2.2rem">
								{t('seemsLike', { value: data.current.apparent_temperature, unit: data.current_units.apparent_temperature })}
							</Text>
							<Text fontSize="2.2rem">
								{t('humidity', { value: data.current.relative_humidity_2m, unit: data.current_units.relative_humidity_2m })}
							</Text>
							<HStack>
								<Text fontSize="2.2rem">
									{data.timezone}
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
			</Flex>
		</Box>
	)
}
