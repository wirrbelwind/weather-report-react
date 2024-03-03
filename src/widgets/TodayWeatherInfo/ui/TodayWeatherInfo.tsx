import { Box, BoxProps, Button, CircularProgress, HStack, IconButton, Text, Tooltip } from "@chakra-ui/react"
import { PrimaryWeatherCard, useCurrentWeather } from "entities/weather"
import { SearchInputLocation, useCoordinates } from "features/location-input"
import { useTranslation } from "react-i18next";
import { LuInfo, LuLocate } from "react-icons/lu";

export const TodayWeatherInfo = (boxProps: BoxProps) => {
	const { t } = useTranslation()

	const {
		coordinates,
		onBackToUserCoordinates,
		selectedLocation,
		setSelectedLocation
	} = useCoordinates()

	const {
		data: {
			WeatherIcon,
			timezone,
			weather,
			weatherType,
			advanced
		},
		isError,
		isLoading,
		isSuccess,
		refetch
	} = useCurrentWeather(coordinates)

	return (
		<Box {...boxProps}>
			<HStack gap='1rem'>
				<IconButton
					icon={<LuLocate />}
					aria-label="reset to user's location"
					onClick={onBackToUserCoordinates}
				/>
				<SearchInputLocation
					value={selectedLocation}
					onChange={setSelectedLocation}
					chakraStyles={{
						container: provided => ({
							...provided,
							w: '100%'
						})
					}}
				/>
			</HStack>
			{
				isLoading && <CircularProgress />
			}
			{
				isError && (
					<Box>
						<Text>Something went wrong</Text>
						<Button onClick={refetch}>Try again</Button>
					</Box>
				)
			}
			{isSuccess && weather && (
				<PrimaryWeatherCard
					mt="2rem"
					temperature={weather.temperature_2m.value}
					apparentTemperature={weather.apparent_temperature.value}
					temperatureUnits={weather.temperature_2m.units}
					humidity={weather.relative_humidity_2m}
					weatherType={weatherType}
					Icon={WeatherIcon}
					advanced={advanced}
					slotBottom={
						<HStack align='center'>
							{timezone && (
								<Text fontSize="2rem">{timezone}</Text>
							)}
							<Tooltip label={t('coordsWarning')}>
								<LuInfo size="2rem" />
							</Tooltip>
						</HStack>
					}
				/>
			)}
		</Box>
	)
}

