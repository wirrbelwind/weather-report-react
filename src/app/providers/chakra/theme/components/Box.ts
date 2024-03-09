import { defineStyleConfig } from "@chakra-ui/react";

export const Box = defineStyleConfig({
	baseStyle: props => ({
		bg: props.colorMode === 'light' ? 'red' : 'cyan.200'
	})
})
