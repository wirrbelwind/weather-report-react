import { Button, HStack, Text, useClipboard } from "@chakra-ui/react"
import { useTranslation } from "react-i18next"
import { FaCopy } from "react-icons/fa6"
import { LuCopyCheck } from "react-icons/lu"

interface TextWithCopyingProps {
	text: string
}

export const TextWithCopying = (props: TextWithCopyingProps) => {
	const { text } = props

	const { t } = useTranslation()
	const { onCopy, hasCopied } = useClipboard(text)

	return (
		<HStack
			onClick={onCopy}
		>
			<Text
				cursor="pointer"
				textDecor="underline"
			>
				{text}
			</Text>
			<Button leftIcon={hasCopied ? <LuCopyCheck /> : <FaCopy />}>
				{hasCopied ? t('copied') : t('copy')}
			</Button>
		</HStack>
	)
}