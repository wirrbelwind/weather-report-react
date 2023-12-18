import { defineStyleConfig } from '@chakra-ui/react'

export const container = defineStyleConfig({
	sizes: {
		md: {
			maxW: "90rem",
			p: "1rem"
		},
		max: {
			maxW: "100rem",
			p: "1.5rem",
			bg: 'pink'
		}
	},
})
