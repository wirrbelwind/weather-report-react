import { Button, HStack, Heading, Link, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, useDisclosure, useToken } from "@chakra-ui/react"
import { useTranslation } from "react-i18next";
import { BiLinkExternal } from "react-icons/bi";
import { REPOSITORY_LINK } from "../config/REPOSITORY_LINK";
import { TextWithCopying } from "shared/ui/TextWithCopying";
import { TELEGRAM } from "../config/TELEGRAM";
import { EMAIL } from "../config/EMAIL";

export const AboutProjectPopup = () => {
	const {
		isOpen,
		onClose,
		onOpen
	} = useDisclosure()

	const { t } = useTranslation()

	const scarlet = useToken('colors', 'scarlet')
	console.log(scarlet)
	return (
		<>
			<Button
				onClick={onOpen}
				bg="scarlet"
				color="white"
				fontSize="1.2rem"
				minW="17rem"
				boxShadow={`0 0 0.3rem ${scarlet}, 0 0 1.5rem ${scarlet}, 0 0 3rem ${scarlet}`}
				_hover={{
					boxShadow: `0 0 0.3rem ${scarlet}, 0 0 1.5rem ${scarlet}, 0 0 3rem ${scarlet}, 0 0 6rem ${scarlet}, 0 0 12rem ${scarlet}`
				}}
				_active={{
					bg: "scarlet"
				}}
			>
				{t('about')}
			</Button>
			<Modal
				isOpen={isOpen}
				onClose={onClose}
			>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>
						{t('about')}
					</ModalHeader>
					<ModalCloseButton />
					<ModalBody>

						<Link
							href={REPOSITORY_LINK}
							isExternal
							display='flex'
							alignItems="center"
							gap=".5rem"
							fontSize="1.5rem"
						>
							<Text>
								{t('openRepo')}
							</Text>
							<BiLinkExternal mx="1rem" />
						</Link>

						<Heading mt="2rem" mb="1rem" fontWeight="600">{t('contactMe')}</Heading>
						<TextWithCopying text={EMAIL} fontSize="1.5rem" />
						<HStack fontSize="1.5rem" mt="1rem">
							<Text>{t('telegram')}</Text>
							<TextWithCopying text={TELEGRAM} />
						</HStack>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	)
}
