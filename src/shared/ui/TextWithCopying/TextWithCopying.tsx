import { Button, HStack, StackProps, Text, useClipboard } from "@chakra-ui/react"
import { useTranslation } from "react-i18next"
import { FaCopy } from "react-icons/fa6"
import { LuCopyCheck } from "react-icons/lu"

interface TextWithCopyingProps extends StackProps {
	text: string
}

export const TextWithCopying = (props: TextWithCopyingProps) => {
	const { text, ...containerProps } = props

	const { t } = useTranslation()
	const { onCopy, hasCopied } = useClipboard(text)

	return (
		<HStack
			onClick={onCopy}
			{...containerProps}
		>
			<Text
				cursor="pointer"
			>
				{text}
			</Text>
			<Button leftIcon={hasCopied ? <LuCopyCheck /> : <FaCopy />}>
				{hasCopied ? t('copied') : t('copy')}
			</Button>
		</HStack>
	)
}