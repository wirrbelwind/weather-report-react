import { defineStyleConfig } from "@chakra-ui/react";

export const Text = defineStyleConfig({
	baseStyle: props => ({
		color: props.colorMode === 'light' ? 'cyan.900' : 'cyan.50'
	})
})
