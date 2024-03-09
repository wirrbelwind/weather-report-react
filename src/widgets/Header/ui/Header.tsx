import { Box, Container, HStack } from "@chakra-ui/react"
import { AboutProjectPopup } from "features/project-info-popup";
import { AdvancedWeatherSwitching } from "features/advanced-weather-switching";
import { LangSwitcher } from "features/language-switching"
import { ThemeSwitcher } from "features/theme-switching"
import { useTranslation } from "react-i18next";
import { LinkWithLogo } from "./LinkWithLogo";

export const Header = () => {
	const { t } = useTranslation()

	return (
		<Box borderBottom="0.1rem solid black">
			<Container size="md">
				<HStack gap="1rem" justify="space-between">
					<LinkWithLogo />

					<HStack spacing="1.2rem">
						<AdvancedWeatherSwitching label={t("showAdvancedWheatherInfo")} />
						<AboutProjectPopup />
						<ThemeSwitcher />
						<LangSwitcher flexBasis="17rem" />
					</HStack>
				</HStack>
			</Container>
		</Box >
	)
}
