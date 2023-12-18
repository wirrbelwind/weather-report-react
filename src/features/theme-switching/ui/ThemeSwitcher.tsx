import { Icon, IconButton, useColorMode } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { BsSun } from "react-icons/bs";

export const ThemeSwitcher = () => {
	const { t } = useTranslation('translation')
	const { colorMode, toggleColorMode } = useColorMode()

	const buttonAlt = colorMode === 'light' ? t('switchToDarkTheme') : t('switchToLightTheme')

	return (
		<IconButton
			aria-label={buttonAlt}
			icon={<Icon as={BsSun} />}
			onClick={toggleColorMode}
		/>

	)
}