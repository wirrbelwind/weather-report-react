import { Box, Container, HStack } from "@chakra-ui/react"
import { LangSwitcher } from "features/language-switching"
import { ThemeSwitcher } from "features/theme-switching"

export const Header = () => {

	return (
		<Box borderBottom="1px solid black">
			<Container size="md">
				<HStack justifyContent="flex-end" gap="1rem">
					<ThemeSwitcher />
					<LangSwitcher maxW="15%" />
				</HStack>
			</Container>
		</Box>
	)
}
