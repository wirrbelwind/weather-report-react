import { Box, Container, HStack, Link } from "@chakra-ui/react"
import { AboutProjectPopup } from "features/about-project-popup";
import { AdvancedWeatherSwitching } from "features/advanced-weather-switching";
import { LangSwitcher } from "features/language-switching"
import { ThemeSwitcher } from "features/theme-switching"
import { useTranslation } from "react-i18next";
import { GiTornado } from "react-icons/gi";

export const Header = () => {
	const { t } = useTranslation()

	return (
		<Box borderBottom="1px solid black">
			<Container size="md">
				<HStack gap="1rem" justify="space-between">
					<Link
						href="/"
					>
						<GiTornado size="3rem" />
					</Link>
					<AdvancedWeatherSwitching label={t("showAdvancedWheatherInfo")} />
					<AboutProjectPopup />
					<ThemeSwitcher />
					<LangSwitcher w="17rem" />
				</HStack>
			</Container>
		</Box >
	)
}
