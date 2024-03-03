import { Button, HStack, Link, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react"
import { useTranslation } from "react-i18next";
import { BiLinkExternal } from "react-icons/bi";
import { repositoryLink } from "../config/repositoryLink";
import { email } from "../config/email";
import { TextWithCopying } from "shared/ui/TextWithCopying";

export const AboutProjectPopup = () => {
	const {
		isOpen,
		onClose,
		onOpen
	} = useDisclosure()

	const { t } = useTranslation()

	return (
		<>
			<Button onClick={onOpen}>
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
							href={repositoryLink}
							isExternal
							display='flex'
						>

							<Text>
								{t('openRepo')}
							</Text>
							<BiLinkExternal mx="1rem" />
						</Link>

						<Text>{t('contactMe')}</Text>
						<TextWithCopying text={email} />
						<HStack>
							<Text>{t('telegram')}</Text>
							<TextWithCopying text={'@wirrbelwind'}/>
						</HStack>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	)
}
