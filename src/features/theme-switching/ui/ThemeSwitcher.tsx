import { Icon, IconButton, IconButtonProps, useColorMode } from "@chakra-ui/react";
import { BsSun } from "react-icons/bs";

interface ThemeSwitcherProps extends Omit<IconButtonProps, 'aria-label'> { }

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
	const { toggleColorMode } = useColorMode()

	return (
		<IconButton
			{...props}
			aria-label='switch theme'
			icon={<Icon as={BsSun} />}
			onClick={toggleColorMode}
		/>
	)
}
